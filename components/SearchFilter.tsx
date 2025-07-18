'use client';

import { Filter, Bookmark, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

interface SearchFilterProps {
  breakingNews: string[];
}

const MAX_VISIBLE_NEWS_DESKTOP = 3;

export default function SearchFilter({ breakingNews }: SearchFilterProps) {
  const [selectedNews, setSelectedNews] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {setWindowWidth(window.innerWidth)
      console.log(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { visibleNews, dropdownNews } = useMemo(() => {
    let visibleNews: string[] = [];
    let dropdownNews: string[] = [];
    if (windowWidth !== null) {
      if (windowWidth >= 768) { // lg and up
        visibleNews = breakingNews;
        dropdownNews = [];
      
      } else { // <md
        visibleNews = [];
        dropdownNews = breakingNews;
      }
    }
    return { visibleNews, dropdownNews };
  }, [windowWidth, breakingNews]);

  

  return (
    <div className="bg-[#101010] overflow-x-auto no-scrollbar ">
      <div className=" py-4 px-2 xl:px-0 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 lg:space-y-0">
          {/* Top Row: Search, Filter, Bookmark, Divider, Breaking News (desktop only) */}
          <div className="flex items-center w-full">
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={"Search News"}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-60 bg-[#1B1B1B] border-gray-700 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              {/* Filter */}
              <Filter className="h-7 w-7 " />
              {/* Bookmark */}
              <Bookmark className="h-7 w-7" />
              {/* Divider */}
              <span className="hidden lg:inline-block h-6 border-l border-gray-700 mx-4" />
              {/* Breaking News label (always shown) */}
              <span className="text-[#AEA4FF] font-semibold text-sm w-28">Breaking News:</span>
              {/* Breaking News buttons (lg+) */}
              <div className="hidden lg:flex items-center space-x-2 ml-2 ">
                {visibleNews.map((news) => (
                  <Button
                    key={news}
                    variant="ghost"
                    size="sm"
                    className="whitespace-nowrap text-sm text-gray-300 hover:text-white hover:bg-[#101010]"
                  >
                    {news}
                  </Button>
                ))}
              </div>
              {/* Breaking News buttons (md only, not lg) */}
              <div className="hidden md:flex lg:hidden items-center space-x-2 ml-2">
                {visibleNews.map((news) => (
                  <Button
                    key={news}
                    variant="ghost"
                    size="sm"
                    className="whitespace-nowrap text-sm text-gray-300 hover:text-white hover:bg-[#101010]"
                  >
                    {news}
                  </Button>
                ))}
                {dropdownNews.length > 0 && (
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-300 hover:text-white  flex items-center"
                      onClick={() => setShowMore((prev) => !prev)}
                    >
                      More <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                    {showMore && (
                      <div className="absolute z-10 mt-2 w-48 bg-[#1B1B1B] border border-gray-700 rounded shadow-lg right-0 max-w-xs overflow-auto">
                        {dropdownNews.map((news) => (
                          <Button
                            key={news}
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowMore(false)}
                            className="w-full justify-start text-sm text-gray-300 hover:text-white hover:bg-[#101010]"
                          >
                            {news}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Breaking News dropdown (mobile only, below label) */}
          {windowWidth !== null && windowWidth < 768 && (
            <div className="flex flex-col w-full mt-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#AEA4FF] font-semibold text-sm flex items-center justify-start w-fit"
                onClick={() => setShowMore((prev) => !prev)}
              >
                Show News <MoreHorizontal className="ml-1 h-4 w-4" />
              </Button>
              {showMore && (
                <div className="mt-2 w-full bg-[#1B1B1B] border border-gray-700 rounded shadow-lg flex flex-col max-w-xs overflow-auto">
                  {dropdownNews.map((news) => (
                    <Button
                      key={news}
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowMore(false)}
                      className="w-full justify-start text-sm text-gray-300 hover:text-white hover:bg-[#101010]"
                    >
                      {news}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}