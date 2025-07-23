"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, ArrowLeftRight, ChevronsUp, ChevronsDown, Share2, Settings, ExternalLink, BarChart2, FileText, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import TabNavigation from "@/components/TabNavigation";
import GameDetails from "@/components/GameDetails";

// Fake/mock data
const fakePrediction = {
  id: 1,
  title: "How many times will Elon Musk post on X between July 18 and July 25?",
  image: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Felon-musk-of-tweets-nov-22-29-apMPG21-pzx_.jpg&w=96&q=100&dpl=dpl_WRGwBgPCzGrZNVuBgN4sBNvFtmha",
  percentage: 62,
  volume: "2,345",
  options: [
    { name: "165–179", chance: 12, yesPrice: 0.98, noPrice: 0.02, vol: 120 },
    { name: "180–194", chance: 18, yesPrice: 0.16, noPrice: 0.84, vol: 300 },
    { name: "195–209", chance: 22, yesPrice: 0.45, noPrice: 0.55, vol: 210 },
    { name: "210–224", chance: 8, yesPrice: 0.29, noPrice: 0.71, vol: 90 },
    { name: "225–239", chance: 15, yesPrice: 0.07, noPrice: 0.93, vol: 180 },
    { name: "240–254", chance: 5, yesPrice: 0.018, noPrice: 0.982, vol: 60 },
    { name: "255–269", chance: 3, yesPrice: 0.01, noPrice: 0.99, vol: 30 },
    { name: "270–284", chance: 2, yesPrice: 0.005, noPrice: 0.995, vol: 10 },
    { name: "285–299", chance: 1, yesPrice: 0.002, noPrice: 0.998, vol: 5 },
    { name: "300+", chance: 1, yesPrice: 0.001, noPrice: 0.999, vol: 2 },
  ],
  chartData: [
    { time: "22Jul", value: 60 },
    { time: "23Jul", value: 62 },
    { time: "24Jul", value: 58 },
    { time: "25Jul", value: 62 },
  ],
};


const relatedQuestions = [
  { id: 2, title: "Will Elon Musk tweet about AI this week?", percentage: 54, image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, title: "Will X reach 1B users by 2026?", percentage: 33, image: "https://images.pexels.com/photos/1105452/pexels-photo-1105452.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, title: "Will Tesla stock hit $1000 in 2025?", percentage: 41, image: "https://images.pexels.com/photos/7947703/pexels-photo-7947703.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const fakeComments = Array.from({ length: 10 }, (_, i) => ({
  user: `User${i + 1}`,
  comment: `This is a fake comment #${i + 1}. Interesting market!`,
  time: `${i + 1}m ago`,
}));

const fakeTopHolders = [
  { name: "Holder1", amount: 1200, value: "$1,200" },
  { name: "Holder2", amount: 900, value: "$900" },
];

const fakeActivity = [
  { user: "rochamarie", action: "bought 35 Yes for 195–209 at 45.0¢ ($16)", time: "7s ago" },
  { user: "FadmohA1", action: "bought 126 Yes for 180–194 at 15.8¢ ($20)", time: "35s ago" },
  { user: "FadmohA1", action: "sold 891 Yes for 225–239 at 5.4¢ ($49)", time: "4m ago" },
  { user: "dc4cab483a98594...", action: "bought 100 Yes for 210–224 at 28.9¢ ($29)", time: "4m ago" },
  { user: "🍄TheMushroomGuy", action: "bought 10 No for 165–179 at 98.2¢ ($10)", time: "4m ago" },
  { user: "BondiBaddie", action: "bought 229 Yes for 225–239 at 7.0¢ ($16)", time: "5m ago" },
  { user: "Ugvgffhjbhhuik", action: "bought 38 Yes for 180–194 at 16.0¢ ($6)", time: "5m ago" },
  { user: "HaioPei", action: "bought 300 Yes for 240–254 at 1.8¢ ($5)", time: "5m ago" },
  { user: "Mnoor", action: "bought 102 Yes for 225–239 at 6.9¢ ($7)", time: "5m ago" },
  { user: "Ugvgffhjbhhuik", action: "bought 48 Yes for 195–209 at 45.0¢ ($21)", time: "5m ago" },
];

const rules = `This market will resolve according to the number of times Elon Musk (@elonmusk), posts on X between July 18, 2025, 12:00 PM ET and July 25, 2025, 12:00 PM ET.\n\nFor the purposes of this market, only main feed posts, quote posts and reposts posts will count.\n\nReplies will NOT count towards the total - however, replies on the main feed such as https://x.com/elonmusk/status/1786073478711353576 will be counted by the tracker.\n\nDeleted posts will count as long as they remain available long enough to be captured by the tracker (~5 minutes).\n\nCommunity reposts which are not counted by the tracker not count toward the total.\n\nThe resolution source for this market is the ‘Post Counter’ figure for posts found at https://www.xtracker.io/. Individual posts can be viewed by clicking "Export Data". If the tracker does not update correctly in accordance with the rules, X itself may be used as a secondary resolution source.`;

const navbarData = {
  logo: "/logo.png",
  searchPlaceholder: "Search News",
  howItWorks: "How it works",
  auth: {
    login: "Login",
    signup: "Sign Up",
  },
};
const tabNames = [
  "Trending",
  "News",
  "Politics",
  "Middle East",
  
  "Sports",
  "Crypto",
  "Tech",
  "Culture",
  "World",
  "Economy",
  "Trump",
  
  "Election",
  "Mentions"
];
const moreDropdown = [
  "Activity",
  "Leaderboard",
  "Dashboards",
  "Rewards",
];

export default function PredictionDetailsPage() {
  const [tab, setTab] = useState("comments");
  const [activityFilter, setActivityFilter] = useState("All");
  const [activityMin, setActivityMin] = useState(0);
  const [topHolderDropdown, setTopHolderDropdown] = useState(fakePrediction.options[0].name);

  return (
    <div className="bg-[#111111] min-h-screen w-full">
      <Navbar data={navbarData} tabs={tabNames} moreDropdown={moreDropdown} />
      <TabNavigation tabs={tabNames} moreDropdown={moreDropdown} />
      <div className="grid grid-cols-1 md:grid-cols-4 w-full max-w-7xl mx-auto pt-4 gap-6">
        {/* Main Content */}
        <div className="col-span-1 md:col-span-3 px-2 md:px-8 py-4">
          {/* Header: Question, Image */}
          <div className="flex items-center space-x-4 mb-4">
            <img src={fakePrediction.image} alt="Q" className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white mb-1">{fakePrediction.title}</h1>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <span>Question</span>
                <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
                <span>#{fakePrediction.id}</span>
              </div>
            </div>
          </div>
          {/* Fake Line Chart Section */}
          <div className="w-full max-w-5xl h-[420px] rounded-lg flex flex-col justify-between p-0 mb-8 mx-auto">
            {/* Legend */}
            <div className="flex items-center space-x-6 mb-2 px-2">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-4 h-1 rounded bg-[#7371FF]"></span>
                <span className="text-xs text-gray-300">Market A</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-4 h-1 rounded bg-green-400"></span>
                <span className="text-xs text-gray-300">Market B</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-4 h-1 rounded bg-red-400"></span>
                <span className="text-xs text-gray-300">Market C</span>
              </div>
              <span className="flex-1"></span>
              <span className="flex items-center text-xs text-gray-400"><BarChart2 className="h-4 w-4 mr-1" />62%</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {/* Fake SVG Line Chart with 3 lines, Y axis on right */}
              <svg viewBox="0 0 800 300" width="100%" height="100%" className="max-h-80">
                {/* X axis */}
                <line x1="60" y1="260" x2="780" y2="260" stroke="#888" strokeWidth="2" />
                {/* Y axis (right) */}
                <line x1="760" y1="30" x2="760" y2="260" stroke="#888" strokeWidth="2" />
                {/* Y axis labels (right) */}
                <text x="770" y="40" fill="#aaa" fontSize="16" textAnchor="start">100%</text>
                <text x="770" y="260" fill="#aaa" fontSize="16" textAnchor="start">0%</text>
                {/* X axis labels */}
                <text x="60" y="285" fill="#aaa" fontSize="16">1d</text>
                <text x="250" y="285" fill="#aaa" fontSize="16">1h</text>
                <text x="500" y="285" fill="#aaa" fontSize="16">1w</text>
                <text x="700" y="285" fill="#aaa" fontSize="16">all</text>
                {/* Polyline 1 (blue) */}
                <polyline
                  fill="none"
                  stroke="#7371FF"
                  strokeWidth="4"
                  points="60,220 180,180 300,120 420,140 540,80 660,100 760,60"
                />
                {/* Polyline 2 (green) */}
                <polyline
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  points="60,240 180,200 300,160 420,180 540,120 660,120 760,100"
                />
                {/* Polyline 3 (red) */}
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="4"
                  points="60,260 180,240 300,200 420,220 540,180 660,160 760,140"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center mt-4 px-2">
              <div className="flex space-x-2 text-xs text-gray-400">
                <Button variant="ghost" size="sm">1d</Button>
                <Button variant="ghost" size="sm">1h</Button>
                <Button variant="ghost" size="sm">1w</Button>
                <Button variant="ghost" size="sm">all</Button>
              </div>
              <div className="flex space-x-2">
                {/* <Button variant="ghost" size="icon"><ExternalLink className="h-4 w-4" /></Button> */}
                <Button variant="ghost" size="icon"><Share2 className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><FileText className="h-4 w-4 mr-1" /></Button>
                <Button variant="ghost" size="icon"><Code2 className="h-4 w-4 mr-1" /></Button>
              </div>
            </div>
          </div>
          {/* Outcome Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full table-fixed text-xs text-left text-gray-400 border-t border-b border-gray-700">
              <colgroup>
                <col className="w-2/6" />
                <col className="w-2/6" />
                <col className="w-2/6" />
              </colgroup>
              <thead>
                <tr>
                  <th className="py-2 px-2 font-semibold text-left">Outcome</th>
                  <th className="py-2 px-2 font-semibold text-center">Chance</th>
                  <th className="py-2 px-2 font-semibold text-right">Buy</th>
                </tr>
              </thead>
              <tbody>
                {fakePrediction.options.map((opt, i) => (
                  <tr key={i} className="border-t border-gray-800">
                    <td className="py-2 px-2 text-white align-middle">
                      <div className="flex flex-col items-start">
                        <span className="text-lg font-semibold">{opt.name}</span>
                        <span className="text-xs text-gray-400 flex items-center mt-1">{opt.vol} Vol <Gift className="inline h-3 w-3 ml-1 text-gray-500" /></span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-4xl text-center align-middle">{opt.chance}%</td>
                    <td className="py-2 px-2 flex justify-end space-x-2 align-middle">
                      <Button className="bg-[#71FE99] text-black font-semibold w-20 h-9 px-0 py-0 rounded-md flex items-center justify-center">Yes <span className='ml-1'>{(opt.yesPrice * 100).toFixed(1)}¢</span></Button>
                      <Button className="bg-[#FE7171] text-black font-semibold w-20 h-9 px-0 py-0 rounded-md flex items-center justify-center">No <span className='ml-1'>{(opt.noPrice * 100).toFixed(1)}¢</span></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Market Context & Rules */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold text-xl">Market Context</span>
            </div>
            <a href="https://caffeine.ai/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="rounded-xl border border-[#232323] bg-[#18181b] p-6 mb-4 flex flex-col items-center shadow">
                <span className="text-lg font-bold text-white mb-2">Powered by Caffeine AI</span>
                <span className="text-base text-gray-300 mb-2">Self-writing internet apps platform</span>
                <Button className="mt-2 bg-[#8373FE] text-white font-bold px-6 py-2 text-base rounded-full shadow hover:bg-[#8373FE]/90 transition">Generate</Button>
              </div>
            </a>
            <div className="text-white font-semibold mb-2 mt-6">Rules</div>
            <div className="text-gray-400 text-xs whitespace-pre-line border border-gray-700 rounded-lg p-3 bg-[#202020]">{rules}</div>
          </div>
          {/* Tabs: Comments, Top Holder, Activity */}
          <div className="mb-6">
            <div className="flex space-x-8 border-b border-gray-700 mb-4">
              <button className={`py-2 px-4 text-sm font-semibold ${tab === "comments" ? "text-white border-b-2 border-blue-500" : "text-gray-400"}`} onClick={() => setTab("comments")}>Comments</button>
              <button className={`py-2 px-4 text-sm font-semibold ${tab === "top" ? "text-white border-b-2 border-blue-500" : "text-gray-400"}`} onClick={() => setTab("top")}>Top Holder</button>
              <button className={`py-2 px-4 text-sm font-semibold ${tab === "activity" ? "text-white border-b-2 border-blue-500" : "text-gray-400"}`} onClick={() => setTab("activity")}>Activity</button>
            </div>
            {tab === "comments" && (
              <div>
                <div className="flex space-x-4 mb-4">
                  <Button size="sm" variant="outline">All</Button>
                  <Button size="sm" variant="outline">Top</Button>
                  <Button size="sm" variant="outline">Newest</Button>
                </div>
                <div className="space-y-3">
                  {[
                    { user: "Alice", comment: "Super interesting market!", time: "1m ago" },
                    { user: "Bob", comment: "I think the odds are off.", time: "2m ago" },
                    { user: "Charlie", comment: "Elon will surprise us!", time: "3m ago" },
                    { user: "Diana", comment: "Great UI!", time: "4m ago" },
                    { user: "Eve", comment: "I'm buying Yes.", time: "5m ago" },
                    { user: "Frank", comment: "No way this resolves as Yes.", time: "6m ago" },
                    { user: "Grace", comment: "Volume is picking up.", time: "7m ago" },
                    { user: "Heidi", comment: "Chart looks bullish.", time: "8m ago" },
                    { user: "Ivan", comment: "Following closely!", time: "9m ago" },
                    { user: "Judy", comment: "Good luck everyone!", time: "10m ago" },
                  ].map((c, i) => (
                    <div key={i} className="rounded-lg border border-gray-700 bg-[#18181b] p-4 flex items-start space-x-3">
                      <img src="/Ellipse 3599.png" alt="logo" className="w-8 h-8 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-200 font-semibold">{c.user}</span>
                          <span className="text-xs text-gray-500">{c.time}</span>
                        </div>
                        <span className="text-gray-300 text-sm mt-1 block">{c.comment}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === "top" && (
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                {[1, 2].map((tableIdx) => (
                  <table key={tableIdx} className="min-w-[180px] w-1/2 text-xs text-left text-gray-400 border-t border-b border-gray-700">
                    <thead>
                      <tr>
                        <th className="py-2 px-2 font-semibold">Name</th>
                        <th className="py-2 px-2 font-semibold">Amount</th>
                        <th className="py-2 px-2 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fakeTopHolders.map((h, i) => (
                        <tr key={i} className="border-t border-gray-800">
                          <td className="py-2 px-2 text-white flex items-center"><img src="/Ellipse 3599.png" alt="logo" className="w-6 h-6 rounded-full mr-2" /><span className="ml-2">{h.name}</span></td>
                          <td className="py-2 px-2">{h.amount}</td>
                          <td className="py-2 px-2">{h.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            )}
            {tab === "activity" && (
              <div className="space-y-0">
                <div className="flex space-x-4 mb-4">
                  <select className="bg-[#232323] text-white rounded px-2 py-1" value={activityFilter} onChange={e => setActivityFilter(e.target.value)}>
                    <option>All</option>
                    <option>Buy</option>
                    <option>Sell</option>
                  </select>
                  <select className="bg-[#232323] text-white rounded px-2 py-1" value={activityMin} onChange={e => setActivityMin(Number(e.target.value))}>
                    <option value={0}>Min amount</option>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
                {fakeActivity.map((a, i) => (
                  <div key={i} className="flex items-center border-b border-gray-700 py-3">
                    <img src="/Ellipse 3599.png" alt="logo" className="w-7 h-7 rounded-full mr-2" />
                    <span className="text-xs text-gray-200 font-semibold ml-2">{a.user}</span>
                    <span className="ml-2 text-gray-300 text-sm flex-1">{a.action}</span>
                    <span className="text-gray-500 text-xs mr-2">{a.time}</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white"><Share2 className="h-4 w-4" /></Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* End Main Content */}
        {/* Sidebar */}
        <aside className="col-span-1 w-full md:w-80 flex flex-col space-y-6">
          {/* Market Info Card for Prediction */}
          <div className="bg-[#111111] border border-[#232323] rounded-lg p-6">
            <div className="mb-6 flex">
              <img src={fakePrediction.image} alt={fakePrediction.title} className="w-16 h-16 rounded-lg object-cover" />
              <div className="ml-4">
                <h2 className="text-white text-lg font-semibold mb-2">{fakePrediction.title}</h2>
                <p className="text-gray-400 text-xs">Prediction Market</p>
              </div>
            </div>
            {/* Tabs navigation (Buy/Sell) */}
            <ul className="flex list-none h-14 mb-5 space-x-3 flex-row flex-wrap border-b-2 border-gray-400 border-b-solid ps-0" role="tablist">
              <li role="presentation" className='h-16'>
                <div className="mt-2 block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary" data-twe-toggle="pill" data-twe-target="#tabs-buy" data-twe-nav-active="" role="tab" aria-controls="tabs-buy" aria-selected="true">Buy</div>
              </li>
              <li role="presentation">
                <div className="mt-2 block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary" data-twe-toggle="pill" data-twe-target="#tabs-sell" role="tab" aria-controls="tabs-sell" aria-selected="false">Sell</div>
              </li>
            </ul>
            {/* Options summary */}
            <div className='flex w-full justify-center items-center space-x-5 text-black my-2 mt-10'>
              <div className={`p-3 px-5 w-full flex justify-center items-center font-semibold rounded-md bg-[#71FE99]`}>Yes <span className=' ml-2'>{fakePrediction.options[0]?.yesPrice ? (fakePrediction.options[0].yesPrice * 100).toFixed(1) + '¢' : '--'}</span></div>
              <div className={`p-3 px-5 w-full flex justify-center items-center font-semibold rounded-md bg-[#FE7171]`}>No <span className=' ml-2'>{fakePrediction.options[0]?.noPrice ? (fakePrediction.options[0].noPrice * 100).toFixed(1) + '¢' : '--'}</span></div>
            </div>
            <div className="my-6 flex justify-between">
              <p className="text-gray-400 text-sm">Volume</p>
              <h3 className="text-right text-gray-400 text-3xl font-light">{fakePrediction.volume}</h3>
            </div>
            <div className="mb-6">
              <div className="space-x-2 flex justify-end">
                <div className="px-3 py-1 rounded-lg text-[#AEA4FF] text-sm bg-[#232323] bg-opacity-50">Yes</div>
                <div className="px-3 py-1 rounded-lg text-[#AEA4FF] text-sm bg-[#232323] bg-opacity-50">No</div>
              </div>
            </div>
            <button className="w-full bg-[#8373FE] hover:bg-[#8373FE] text-white py-3 rounded-md font-semibold">Trade</button>
          </div>
     
          <div className="text-xs text-gray-400 mb-2">By trading you agree to the <span className="underline cursor-pointer">terms of use</span>.</div>
          <div className="border-b border-gray-700 mb-4"></div>
          <div>
            <h3 className="text-white font-semibold mb-2">Related Questions</h3>
            <div className="space-y-3">
              {relatedQuestions.map((q) => (
                <div key={q.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#232323] cursor-pointer">
                  <img src={q.image} alt={q.title} className="w-8 h-8 rounded object-cover" />
                  <div className="flex-1">
                    <span className="text-gray-200 text-sm font-medium">{q.title}</span>
                  </div>
                  <span className="text-xs text-white font-bold">{q.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 