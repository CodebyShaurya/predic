'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const activityData = {
  filters: {
    categories: ["All", "Sports", "Politics", "Crypto", "Entertainment"],
    amounts: ["Min Amount", "$100+", "$500+", "$1000+", "$5000+"]
  },
  activities: [
    {
      id: 1,
      photo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
      matchup: "Lakers vs Warriors",
      teamLogos: ["🟣", "🔵"],
      description: "John bought Lakers at $1.85 odds for the upcoming NBA game",
      time: "2 mins ago"
    },
    {
      id: 2,
      photo: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
      matchup: "Bitcoin vs $50k",
      teamLogos: ["₿", "💰"],
      description: "Sarah sold Bitcoin prediction at $0.72 for end of month target",
      time: "5 mins ago"
    },
    {
      id: 3,
      photo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      matchup: "Biden vs Trump",
      teamLogos: ["🔵", "🔴"],
      description: "Mike bought Biden at $0.45 for 2024 Presidential Election",
      time: "8 mins ago"
    },
    {
      id: 4,
      photo: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=400",
      matchup: "Celtics vs Heat",
      teamLogos: ["🟢", "🔴"],
      description: "Emma sold Celtics at $1.65 odds for tonight's playoff game",
      time: "12 mins ago"
    },
    {
      id: 5,
      photo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
      matchup: "Ethereum vs $3000",
      teamLogos: ["Ξ", "💎"],
      description: "Alex bought Ethereum prediction at $0.58 for monthly target",
      time: "15 mins ago"
    }
  ]
};

export default function ActivityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAmount, setSelectedAmount] = useState("Min Amount");
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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
      <div className="max-w-7xl mx-auto px-2 lg:px-0 py-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-white text-3xl font-bold mb-4 sm:mb-0">Activity</h1>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#101010] border-gray-700 text-gray-300 hover:text-white hover:bg-[#101010]"
                >
                  {selectedCategory} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#101010] border-gray-700">
                {activityData.filters.categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#101010] hover:bg-[#101010] text-gray-300 hover:text-white "
                >
                  {selectedAmount} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#101010] border-gray-700">
                {activityData.filters.amounts.map((amount) => (
                  <DropdownMenuItem
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {amount}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          {activityData.activities.map((activity) => (
            <div key={activity.id} className="border-b border-gray-700 p-4 hover:bg-gray-750 transition-colors w-full">
              <div className="sm:flex items-center justify-between space-x-4">
                {/* Photo */}
                <div className=" flex items-center gap-4 flex-shrink-0">
                  <img
                    src={activity.photo}
                    alt={activity.matchup}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                

                {/* Matchup with team logos */}
                <div className="grid grid-cols-1 items-center space-y-2 ">
                  {/* <span className="text-2xl">{activity.teamLogos[0]}</span> */}
                  <span className="text-white text-xl font-semibold">{activity.matchup}</span>
                  <div className="flex min-w-0 ">
                    <img src="/Ellipse 3599.png" alt="user" className="w-6 h-6 rounded-full" />
                  <p className="text-gray-300 text-sm ml-1">
                    {activity.description}
                  </p>
                </div>
                  {/* <span className="text-2xl">{activity.teamLogos[1]}</span> */}
                </div>
                </div>

                {/* Description */}
                

                {/* Time */}
                <div className="flex-shrink-0">
                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}