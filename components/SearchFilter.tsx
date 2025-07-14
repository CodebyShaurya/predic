'use client';

import { useState } from 'react';
import { Filter, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchFilterProps {
  breakingNews: string[];
}

export default function SearchFilter({ breakingNews }: SearchFilterProps) {
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  return (
    <div className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Filter and Bookmarks */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <Filter className="h-4 w-4 mr-2" />
              
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <Bookmark className="h-4 w-4 mr-2" />
              
            </Button>
          </div>

          {/* Breaking News */}
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-semibold text-sm">Breaking News:</span>
            <div className="flex items-center space-x-2">
              {breakingNews.map((news) => (
                <Button
                  key={news}
                  variant={selectedNews === news ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedNews(news)}
                  className={`whitespace-nowrap text-sm ${
                    selectedNews === news
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {news}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}