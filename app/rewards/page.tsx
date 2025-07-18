'use client';

import { useState , useEffect } from 'react';
import { Search, Calendar, ChevronDown, Plus, Coins, Bookmark, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';

const rewardsData = {
  banner: {
    title: "Daily Rewards",
    subtitle: "Earn rewards by placing orders within the spread. Rewards are distributed directly to wallets everyday at midnight UTC. Learn more",
    todaysDate: "December 15",
    totalAmount: "$12.45"
  },
  tabs: ["All", "Sports", "Politics", "Crypto", "Entertainment", "Middle East", "Tech"],
  rewards: [
    {
      id: 1,
      market: "Lakers vs Warriors",
      maxSpread: "2.5",
      minShares: "100",
      reward: "250",
      comp: "NBA",
      earnings: "$1,200",
      percent: "15.2%",
      price: { yes: "$1.85", no: "$0.15" },
      bars: 4
    },
    {
      id: 2,
      market: "Bitcoin $50k by Jan",
      maxSpread: "1.8",
      minShares: "50",
      reward: "180",
      comp: "Crypto",
      earnings: "$890",
      percent: "12.8%",
      price: { yes: "$0.72", no: "$0.28" },
      bars: 3
    },
    {
      id: 3,
      market: "2024 Election Winner",
      maxSpread: "3.2",
      minShares: "200",
      reward: "320",
      comp: "Politics",
      earnings: "$2,100",
      percent: "18.5%",
      price: { yes: "$0.45", no: "$0.55" },
      bars: 5
    },
    {
      id: 4,
      market: "Ethereum $3000",
      maxSpread: "2.1",
      minShares: "75",
      reward: "210",
      comp: "Crypto",
      earnings: "$1,450",
      percent: "14.7%",
      price: { yes: "$0.58", no: "$0.42" },
      bars: 2
    },
    {
      id: 5,
      market: "Celtics Championship",
      maxSpread: "4.5",
      minShares: "150",
      reward: "450",
      comp: "NBA",
      earnings: "$3,200",
      percent: "22.1%",
      price: { yes: "$1.65", no: "$0.35" },
      bars: 4
    },
    {
      id: 6,
      market: "AI Regulation Bill",
      maxSpread: "2.8",
      minShares: "80",
      reward: "280",
      comp: "Tech",
      earnings: "$1,800",
      percent: "16.3%",
      price: { yes: "$0.34", no: "$0.66" },
      bars: 3
    },
    {
      id: 7,
      market: "Tesla Stock $300",
      maxSpread: "1.9",
      minShares: "120",
      reward: "190",
      comp: "Tech",
      earnings: "$1,100",
      percent: "13.4%",
      price: { yes: "$2.15", no: "$0.85" },
      bars: 1
    },
    {
      id: 8,
      market: "Super Bowl Winner",
      maxSpread: "3.8",
      minShares: "180",
      reward: "380",
      comp: "NFL",
      earnings: "$2,800",
      percent: "19.8%",
      price: { yes: "$1.95", no: "$0.05" },
      bars: 5
    }
  ]
};

export default function RewardsPage() {
  const [siteData, setSiteData] = useState<any>(null);
  // const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);

  const filteredRewards = rewardsData.rewards.filter(reward => {
    const matchesTab = activeTab === "All" || reward.comp.toLowerCase().includes(activeTab.toLowerCase()) || 
                      (activeTab === "Sports" && (reward.comp === "NBA" || reward.comp === "NFL"));
    const matchesSearch = reward.market.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         reward.comp.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const toggleBookmark = (id: number) => {
    setBookmarkedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const renderBars = (filled: number) => {
    const bars = [];
    for (let i = 0; i < 5; i++) {
      bars.push(
        <div
          key={i}
          className={`w-2 h-4 rounded-sm ${
            i < filled ? 'bg-[#FF9D14]' : 'bg-gray-600'
          }`}
        />
      );
    }
    return <div className="flex gap-1">{bars}</div>;
  };
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await fetch('/api/data');
          if (response.ok) {
            const data = await response.json();
            setSiteData(data);
            // setSelectedMatch(data.sports.selectedGame);
          }
        } catch (error) {
          console.error('Error loading data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadData();
    }, []);
  const [activeCategory, setActiveCategory] = useState("Presidential");

  if (loading) {
    return (
      <div className="min-h-screen bg-[#101010] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="min-h-screen bg-[#101010] flex items-center justify-center">
        <div className="text-white text-xl">Error loading data</div>
      </div>
    );
  }



  return (
      <div className="min-h-screen bg-[#101010]">
      <Navbar data={siteData.navbar} />
                  <TabNavigation tabs={siteData.tabs} moreDropdown={siteData.moreDropdown} />
      <div className="   ">
        {/* Banner */}
            <div className="bg-gradient-to-br from-[#9A66FC]  to-[#5A34DF] p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
                {rewardsData.banner.title}
              </h1>
              <p className="text-purple-100 text-sm sm:text-base max-w-xl">
                {rewardsData.banner.subtitle}
              </p>
            </div>
            <div className="md:text-right text-center bg-white rounded-lg p-4 pr-16">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                {/* <Calendar className="h-4 w-4 text-purple-200 mr-2" /> */}
                <span className="text-black text-sm">
                  {rewardsData.banner.todaysDate} 
                </span>
              </div>
              <div className="text-black text-2xl sm:text-3xl font-bold">
                {rewardsData.banner.totalAmount}
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto justify-center px-4 sm:px-6 lg:px-8'>

        {/* Tabs */}
        <div className="mb-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 ju">
            {rewardsData.tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                  ? 'bg-gradient-to-r from-[#8A66FC] to-[#5A34DF] text-white '
                  : 'text-gray-300 bg-[#232323] hover:text-white hover:bg-[#232323]'
              } rounded-full`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 px-4 sm:px-6 lg:px-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search markets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10   bg-[#101010] border-gray-700 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className=" px-4 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Market  <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Max Spread <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Min Shares <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Reward <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Comp. <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Earnings <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Percent <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    Price <ChevronDown className="h-4 w-4" />
                      
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                    {/* Actions <ChevronDown className="h-4 w-4" /> */}
                      
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredRewards.map((reward) => (
                  <tr key={reward.id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap flex items-center gap-2 rounded-lg">
                      <div className="bg-blue-500 p-3 font-semibold rounded-lg">MIL</div>
                      <div className="text-white font-medium">{reward.market}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Plus className="h-4 w-4 text-gray-300" />
                        <span className="text-gray-300">{reward.maxSpread}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-gray-300">{reward.minShares}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 font-semibold">${reward.reward}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                       
                        {renderBars(reward.bars)}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-blue-400 font-semibold">{reward.earnings}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-yellow-400 font-semibold">{reward.percent}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <div className="text-green-400 font-medium text-sm">{reward.price.yes}</div>
                        <div className="text-red-400 font-medium text-sm">{reward.price.no}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleBookmark(reward.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          bookmarkedItems.includes(reward.id)
                            ? ''
                            : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Bookmark className="h-4 w-4" />
                          <ChevronDown className="h-3 w-3" />
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 mt-6">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Bookmark className="h-4 w-4" />
            <span>Bookmark All</span>
          </button>
        </div>
        </div>

        {filteredRewards.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No rewards found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}