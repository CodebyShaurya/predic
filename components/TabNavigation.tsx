'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
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

  const visibleTabs = tabs.slice(0, 8);
  const remainingTabs = tabs.slice(8);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab.toLowerCase() === 'sports') {
      router.push('/sports');
    } else {
      router.push('/');
    }
  };
  return (
    <div className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 py-3 overflow-x-auto">
          {visibleTabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              size="sm"
              onClick={() => handleTabClick(tab)}
              className={`whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {tab}
            </Button>
          ))}
          
          {remainingTabs.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                {remainingTabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {tab}
                  </DropdownMenuItem>
                ))}
                {moreDropdown.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    onClick={() => setSelectedMore(item)}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
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
  );
}