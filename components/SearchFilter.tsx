'use client';

import { Filter, Bookmark, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useRef, useEffect } from 'react';

interface SearchFilterProps {
  breakingNews: string[];
}

export default function SearchFilter({ breakingNews }: SearchFilterProps) {
  const [selectedNews, setSelectedNews] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [newsStartIndex, setNewsStartIndex] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<'sort' | 'frequency' | 'type'>('sort');
  const lgNewsRowRef = useRef<HTMLDivElement>(null);
  const smNewsRowRef = useRef<HTMLDivElement>(null);
  const [lgVisibleNewsCount, setLgVisibleNewsCount] = useState(5);
  const [smVisibleNewsCount, setSmVisibleNewsCount] = useState(3);

  // Update visible news count based on available width for large screens
  useEffect(() => {
    const updateLgVisibleCount = () => {
      if (!lgNewsRowRef.current) return;
      const containerWidth = lgNewsRowRef.current.clientWidth;
      // Estimate: arrows (80px) + average button width (120px with margins)
      const estimatedButtonWidth = 120;
      const availableWidth = containerWidth - 80;
      const count = Math.max(1, Math.floor(availableWidth / estimatedButtonWidth));
      setLgVisibleNewsCount(count);
    };
    
    // Update visible news count based on available width for small screens
    const updateSmVisibleCount = () => {
      if (!smNewsRowRef.current) return;
      const containerWidth = smNewsRowRef.current.clientWidth;
      const estimatedButtonWidth = 120;
      const availableWidth = containerWidth - 80;
      const count = Math.max(1, Math.floor(availableWidth / estimatedButtonWidth));
      setSmVisibleNewsCount(count);
    };
    
    updateLgVisibleCount();
    updateSmVisibleCount();
    window.addEventListener('resize', () => {
      updateLgVisibleCount();
      updateSmVisibleCount();
    });
    
    return () => window.removeEventListener('resize', () => {
      updateLgVisibleCount();
      updateSmVisibleCount();
    });
  }, []);

  const lgVisibleNews = breakingNews.slice(newsStartIndex, newsStartIndex + lgVisibleNewsCount);
  const smVisibleNews = breakingNews.slice(newsStartIndex, newsStartIndex + smVisibleNewsCount);

  const handleNewsNav = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && newsStartIndex > 0) {
      setNewsStartIndex(newsStartIndex - 1);
    }
    if (direction === 'next' && newsStartIndex < breakingNews.length - Math.max(lgVisibleNewsCount, smVisibleNewsCount)) {
      setNewsStartIndex(newsStartIndex + 1);
    }
  };

  return (
    <div className="bg-[#101010] overflow-x-auto no-scrollbar">
      <div className="pt-4 px-2 xl:pl-1 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 lg:space-y-0">
          {/* Top Row: Search, Filter, Bookmark */}
          <div className="flex flex-col w-full">
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative ">
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
              <div className="relative">
                <Filter className="h-5 w-5 cursor-pointer" onClick={() => setShowFilter(!showFilter)} />
              </div>
              {/* Bookmark */}
              <Bookmark className="h-5 w-5" />
              {/* Divider */}
              <span className="hidden lg:inline-block h-6 border-l border-gray-700 mx-4" />
              
              {/* Breaking News (inline on lg+ screens) */}
              <div className="hidden lg:flex flex-1 items-center relative" ref={lgNewsRowRef}>
                {/* Breaking News label (always shown) */}
                <span className="text-[#AEA4FF] font-semibold text-sm mr-2">Breaking News:</span>
                
                <div className="flex flex-1 relative items-center overflow-hidden">
                  {/* Left arrow */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleNewsNav('prev')} 
                    disabled={newsStartIndex === 0}
                    className="z-10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {/* News buttons */}
                  <div className="flex items-center flex-1 overflow-hidden px-1">
                    {lgVisibleNews.map((news: string) => (
                      <Button
                        key={news}
                        variant="ghost"
                        size="sm"
                        className="whitespace-nowrap text-sm text-gray-300 hover:text-white hover:bg-[#101010] mx-1 flex-shrink-0"
                      >
                        {news}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Right arrow (absolute positioned to overlay if needed) */}
                  <div className="absolute right-0 top-0 h-full flex items-center bg-gradient-to-l from-[#101010] to-transparent pr-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleNewsNav('next')} 
                      disabled={newsStartIndex >= breakingNews.length - lgVisibleNewsCount}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Breaking News Row (only on smaller than lg screens) */}
            <div className="flex lg:hidden flex-wrap items-center mt-4 relative" ref={smNewsRowRef}>
              {/* Breaking News label */}
              <span className="text-[#AEA4FF] font-semibold text-sm mr-2">Breaking News:</span>
              
              <div className="flex flex-1 relative items-center overflow-hidden">
                {/* Left arrow */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleNewsNav('prev')} 
                  disabled={newsStartIndex === 0}
                  className="z-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {/* News buttons */}
                <div className="flex items-center flex-1 overflow-hidden px-1">
                  {smVisibleNews.map((news: string) => (
                    <Button
                      key={news}
                      variant="ghost"
                      size="sm"
                      className="whitespace-nowrap text-sm text-gray-300 hover:text-white hover:bg-[#101010] mx-1 flex-shrink-0"
                    >
                      {news}
                    </Button>
                  ))}
                </div>
                
                {/* Right arrow */}
                <div className="absolute right-0 top-0 h-full flex items-center bg-gradient-to-l from-[#101010] to-transparent pr-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleNewsNav('next')} 
                    disabled={newsStartIndex >= breakingNews.length - smVisibleNewsCount}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter Section Tabs - appears below when showFilter is true */}
          {showFilter && (
            <div className="w-full rounded-lg  pt-2 flex flex-col items-start animate-fade-in">
              <div className="flex space-x-2 mb-4">
                <Button
                  variant={activeFilterTab === 'sort' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveFilterTab('sort')}
                >
                  Sort By
                </Button>
                <Button
                  variant={activeFilterTab === 'frequency' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveFilterTab('frequency')}
                >
                  Frequency
                </Button>
                <Button
                  variant={activeFilterTab === 'type' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveFilterTab('type')}
                >
                  News Type
                </Button>
                <div className="w-full ">
                {activeFilterTab === 'sort' && (
                  <div className="w-60">
                    {/* <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label> */}
                    <Select defaultValue="relevance">
                      <SelectTrigger className="bg-[#101010] border-gray-700 text-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1B1B1B] border-gray-700">
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="popularity">Popularity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {activeFilterTab === 'frequency' && (
                  <div className=" w-60">
                    {/* <label className="block text-sm font-medium text-gray-300 mb-2">Frequency</label> */}
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-[#101010] border-gray-700 text-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1B1B1B] border-gray-700">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="day">Past Day</SelectItem>
                        <SelectItem value="week">Past Week</SelectItem>
                        <SelectItem value="month">Past Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {activeFilterTab === 'type' && (
                  <div className="w-60">
                    {/* <label className="block text-sm font-medium text-gray-300 mb-2">News Type</label> */}
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-[#101010] border-gray-700 text-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1B1B1B] border-gray-700">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="crypto">Crypto</SelectItem>
                        <SelectItem value="stocks">Stocks</SelectItem>
                        <SelectItem value="politics">Politics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
              </div>
              
            </div>
          )}

          {/* Mobile view is now integrated with the main news navigation */}
        </div>
      </div>
    </div>
  );
}