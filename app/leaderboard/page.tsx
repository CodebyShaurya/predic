'use client';

import { useState , useEffect} from 'react';
import { Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';

const leaderboardData = {
  timeframes: ["Day", "Week", "Month", "All"],
  resetTime: "Resets in 3 days 18h 45m 1s",
  volume: [
    { rank: 1, avatar: "/Ellipse 3599.png", name: "CryptoKing", amount: "$2.5M" },
    { rank: 2, avatar: "/Ellipse 3599.png", name: "TradeMaster", amount: "$1.8M" },
    { rank: 3, avatar: "/Ellipse 3599.png", name: "DiamondHands", amount: "$1.2M" },
    { rank: 4, avatar: "/Ellipse 3599.png", name: "BullsEye", amount: "$950K" },
    { rank: 5, avatar: "/Ellipse 3599.png", name: "QuickTrade", amount: "$780K" },
    { rank: 6, avatar: "/Ellipse 3599.png", name: "HotStreak", amount: "$650K" },
    { rank: 7, avatar: "/Ellipse 3599.png", name: "LuckyBets", amount: "$520K" },
    { rank: 8, avatar: "/Ellipse 3599.png", name: "ChartWiz", amount: "$480K" }
  ],
  profit: [
    { rank: 1, avatar: "/Ellipse 3599.png", name: "ProfitPro", amount: "+$450K" },
    { rank: 2, avatar: "/Ellipse 3599.png", name: "WinStreak", amount: "+$380K" },
    { rank: 3, avatar: "/Ellipse 3599.png", name: "StarTrader", amount: "+$320K" },
    { rank: 4, avatar: "/Ellipse 3599.png", name: "Champion", amount: "+$280K" },
    { rank: 5, avatar: "/Ellipse 3599.png", name: "GoldRush", amount: "+$240K" },
    { rank: 6, avatar: "/Ellipse 3599.png", name: "StrongBuy", amount: "+$190K" },
    { rank: 7, avatar: "/Ellipse 3599.png", name: "RingMaster", amount: "+$150K" },
    { rank: 8, avatar: "/Ellipse 3599.png", name: "Rising Star", amount: "+$120K" }
  ]
};

export default function LeaderboardPage() {
    const [siteData, setSiteData] = useState<any>(null);
    // const [selectedMatch, setSelectedMatch] = useState<any>(null);s
    const [loading, setLoading] = useState(true);
    const [activeTimeframe, setActiveTimeframe] = useState("Day");
  const [activeTable, setActiveTable] = useState("Volume");
    
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
      <div className=" max-w-7xl mx-auto py-8 px-2 lg:px-0">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl font-semibold mb-6">Leaderboard</h1>
          
          {/* Timeframe buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {leaderboardData.timeframes.map((timeframe) => (
              <Button
                key={timeframe}
                variant={activeTimeframe === timeframe ? "default" : "ghost"}
                onClick={() => setActiveTimeframe(timeframe)}
                className={`${
                  activeTimeframe === timeframe
                    ? 'bg-gradient-to-r from-[#8A66FC] to-[#5A34DF] text-white '
                    : 'text-gray-300 bg-[#232323] hover:text-white hover:bg-[#232323]'
                } rounded-full`}
              >
                {timeframe}
              </Button>
            ))}
          </div>

          {/* Reset time */}
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{leaderboardData.resetTime}</span>
          </div>
        </div>



        {/* Table Toggle */}
        <div className="flex space-x-2 mb-6 lg:hidden block justify-center">
          <Button
            variant={activeTable === "Volume" ? "default" : "ghost"}
            onClick={() => setActiveTable("Volume")}
            className={`${
              activeTable === "Volume"
                ? 'bg-gradient-to-r from-[#8A66FC] to-[#5A34DF] text-white '
                    : 'text-gray-300 bg-[#232323] hover:text-white hover:bg-[#232323]'
            }`}
          >
            Volume
          </Button>
          <Button
            variant={activeTable === "Profit" ? "default" : "ghost"}
            onClick={() => setActiveTable("Profit")}
            className={`${
              activeTable === "Profit"
                 ? 'bg-gradient-to-r from-[#8A66FC] to-[#5A34DF] text-white '
                    : 'text-gray-300 bg-[#232323] hover:text-white hover:bg-[#232323]'
            }`}
          >
            Profit
          </Button>
        </div>

        {/* Leaderboard Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Volume Table */}
          <div className={`${activeTable !== "Volume" ? "hidden lg:block" : ""}`}>
            <div className="bg-[#1B1B1B] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h2 className="text-white text-xl font-semibold">Volume </h2>
              </div>
              
              <div className="space-y-3">
                {leaderboardData.volume.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-3  rounded-lg  transition-colors">
                    <div className="flex items-center space-x-4">
                     
                      <span className="text-2xl"><img src={user.avatar} alt="avatar" className="w-8 h-8" /></span>
                      <span className="text-white font-medium">{user.name}</span>
                    </div>
                    <span className="text-gray-600 ">{user.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profit Table */}
          <div className={`${activeTable !== "Profit" ? "hidden lg:block" : ""}`}>
            <div className="bg-[#1B1B1B] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Trophy className="h-5 w-5 text-green-500" />
                <h2 className="text-white text-xl font-semibold">Profit</h2>
              </div>
              
              <div className="space-y-3">
                {leaderboardData.profit.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-3 transition-colors">
                    <div className="flex items-center space-x-4">
                      
                      <span className="text-2xl"><img src={user.avatar} alt="avatar" className="w-8 h-8" /></span>
                      <span className="text-white ">{user.name}</span>
                    </div>
                    <span className="text-gray-600 ">{user.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}