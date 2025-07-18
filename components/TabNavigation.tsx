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
  // Show all tabs at once, no slicing
  const visibleTabs = filteredTabs; 
  const remainingTabs: string[] = []; // No remaining tabs, all are visible

  // SVG icons for More dropdown options
  const moreOptions = [
    { label: 'All Market', icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block mr-2 align-text-bottom"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ) },
    { label: 'Activity', icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block mr-2 align-text-bottom"><path d="M3 12h3l3 8 4-16 3 8h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
    { label: 'Leaderboard', icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block mr-2 align-text-bottom"><rect x="3" y="10" width="4" height="11" stroke="currentColor" strokeWidth="2"/><rect x="10" y="3" width="4" height="18" stroke="currentColor" strokeWidth="2"/><rect x="17" y="14" width="4" height="7" stroke="currentColor" strokeWidth="2"/></svg>
    ) },
    { label: 'Dashboards', icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block mr-2 align-text-bottom"><rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/></svg>
    ) },
    { label: 'Rewards', icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block mr-2 align-text-bottom"><circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2"/><path d="M8 21h8l-4-4-4 4z" stroke="currentColor" strokeWidth="2"/></svg>
    ) },
  ];

  // Route mapping for all tabs and More options
  const tabRoutes: Record<string, string> = {
    Trending: '/',
    // News: '/news',
    // Politics: '/politics',
    Sports: '/sports',
    Crypto: '/crypto',
    // 'Tech': '/tech',
    'Mentions': '/mentions',
    // Economy: '/economy',
    Election: '/election',
    // 'All Market': '/all-market',
    'Activity': '/activity',
    'Leaderboard': '/leaderboard',
    'Dashboards': '/dashboard',
    'Rewards': '/rewards',
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const route = tabRoutes[tab] || '/';
    router.push(route);
  };


  return (
    <div className="bg-[#1B1B1B] border-b border-gray-800 sticky top-16 z-50">
      <div className=" max-w-7xl mx-auto">
        {/* Mobile: Only Trending, News, More */}
        <div className="flex items-center space-x-1 py-3 lg:hidden no-scrollbar overflow-x-auto">
          <Button
            variant={'ghost'}
            size="sm"
            onClick={() => handleTabClick('Trending')}
            className={`whitespace-nowrap ${activeTab === 'Trending' ? 'text-white' : 'text-gray-300'}`}
          >
            Trending <TrendingUp className='ml-1 h-5 w-5' /> 
          </Button>
          <Button
            variant={'ghost'}
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
        </div>

        {/* Desktop: Trending, News, Divider, then all tabs, then More */}
        <div className="hidden lg:block py03">          
          <div className="bg-[#1B1B1B]">
            <div className="">
              <div className="flex space-x-1 py-3 noscroll no-scrollbar overflow-x-auto">
                <Button
                  variant={'ghost'}
                  size="sm"
                  onClick={() => handleTabClick('Trending')}
                  className={`whitespace-nowrap ${activeTab === 'Trending' ? 'text-white' : 'text-gray-300'}`}
                >
                  Trending <TrendingUp className='ml-1 h-5 w-5' /> 
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
                {/* More button after all tabs, only on lg screens */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-gray-300">
                      More <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-gray-700">
                    {moreOptions.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        onClick={() => handleTabClick(item.label)}
                        className="text-gray-300 flex items-center"
                      >
                        {item.icon}{item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}