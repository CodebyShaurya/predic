'use client';

import { useState } from 'react';
import { Eye, Pin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface League {
  name: string;
  logo: string;
  startDate: string;
}

interface Team {
  name: string;
  short: string;
  color: string;
  stats: string;
  bid: string;
}

interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  timer: string;
  money: string;
}

interface SportsSidebarProps {
  categories: string[];
  leagues: League[];
}

export default function SportsSidebar({ categories, leagues }: SportsSidebarProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-fit">
      {/* Categories */}
      <div className="flex space-x-2 mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Football Leagues */}
      <div>
        <h3 className="text-white font-semibold mb-3">Football Leagues</h3>
        <div className="space-y-2">
          {leagues.map((league, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{league.logo}</span>
                <span className="text-white text-sm">{league.name}</span>
              </div>
              <span className="text-gray-400 text-xs">{league.startDate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}