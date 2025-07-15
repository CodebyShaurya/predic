'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown , TrendingUp} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TabNavigationProps {
  tabs: string[];
  moreDropdown: string[];
  currentTab?: string;
}

export default function TabNavigation({ tabs, moreDropdown, currentTab }: TabNavigationProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(currentTab || tabs[0]);
  const [selectedMore, setSelectedMore] = useState<string | null>(null);

  // Remove 'Trending' and 'News' from the dynamic tabs if present
  const filteredTabs = tabs.filter(
    (tab) => tab.toLowerCase() !== 'trending' && tab.toLowerCase() !== 'news'
  );
  const visibleTabs = filteredTabs.slice(0, 6); // Show fewer tabs to make space for static ones
  const remainingTabs = filteredTabs.slice(6);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab.toLowerCase() === 'sports') {
      router.push('/sports');
    } else if (tab.toLowerCase() === 'crypto') {
      router.push('/crypto');
    } else if (tab.toLowerCase() === 'word mentions') {
      router.push('/mentions');
    } else if (tab.toLowerCase() === 'trending') {
      router.push('/'); // Adjust as needed
    } else if (tab.toLowerCase() === 'news') {
      router.push('/'); // Adjust as needed
    } else {
      router.push('/');
    }
  };

  // SVG for Trending (replace with your actual SVG if needed)
  const TrendingIcon = () => (
    <svg width="16" height="16" fill="currentColor" className="inline-block mr-1 align-text-bottom" viewBox="0 0 20 20"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  );

  return (
    <div className="bg-[#1B1B1B] border-b border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Only Trending, News, More */}
        <div className="flex items-center space-x-1 py-3 lg:hidden overflow-x-auto scrollbar-hide">
          <Button
            // variant={activeTab === 'Trending' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => handleTabClick('Trending')}
            className={`whitespace-nowrap ${activeTab === 'Trending' ? 'text-white' : 'text-gray-300'}`}
          >
            <TrendingIcon /> Trending
          </Button>
          <Button
            // variant={activeTab === 'News' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => handleTabClick('News')}
            className={`whitespace-nowrap ${activeTab === 'News' ? 'text-white' : 'text-gray-300'}`}
          >
            News
          </Button>
          <span className="text-gray-600 px-2 select-none">|</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-gray-700">
              {filteredTabs.map((tab) => (
                <DropdownMenuItem
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className="text-gray-300"
                >
                  {tab}
                </DropdownMenuItem>
              ))}
              {moreDropdown.map((item) => (
                <DropdownMenuItem
                  key={item}
                  onClick={() => setSelectedMore(item)}
                  className="text-gray-300"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop: Trending, News, Divider, then tabs, then More */}
        <div className="hidden lg:block py-3">
          <div className="bg-[#1B1B1B]">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-1 py-3 overflow-x-auto">
                <Button
                  variant={'ghost'}
                  size="sm"
                  onClick={() => handleTabClick('Trending')}
                  className={`whitespace-nowrap ${activeTab === 'Trending' ? 'text-white' : 'text-gray-300'}`}
                >
                  Trending <TrendingUp className='ml-1 ' /> 
                </Button>
                <Button
                  variant={ 'ghost'}
                  size="sm"
                  onClick={() => handleTabClick('News')}
                  className={`whitespace-nowrap ${activeTab === 'News' ? 'text-white' : 'text-gray-300'}`}
                >
                  News
                </Button>
                <span className="text-gray-600 px-2 select-none">|</span>
                {visibleTabs.map((tab) => (
                  <Button
                    key={tab}
                    variant={'ghost'}
                    size="sm"
                    onClick={() => handleTabClick(tab)}
                    className={`whitespace-nowrap ${activeTab === tab ? 'text-white' : 'text-gray-300'}`}
                  >
                    {tab}
                  </Button>
                ))}
                {remainingTabs.length > 0 && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-gray-300">
                        More <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border-gray-700">
                      {remainingTabs.map((tab) => (
                        <DropdownMenuItem
                          key={tab}
                          onClick={() => handleTabClick(tab)}
                          className="text-gray-300"
                        >
                          {tab}
                        </DropdownMenuItem>
                      ))}
                      {moreDropdown.map((item) => (
                        <DropdownMenuItem
                          key={item}
                          onClick={() => setSelectedMore(item)}
                          className="text-gray-300"
                        >
                          {item}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}