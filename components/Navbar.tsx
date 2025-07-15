'use client';

import { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  data: {
    logo: string;
    searchPlaceholder: string;
    howItWorks: string;
    auth: {
      login: string;
      signup: string;
    };
  };
  tabs?: string[];
  moreDropdown?: string[];
}

export default function Navbar({ data, tabs = [], moreDropdown = [] }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allTabs = [...tabs, ...moreDropdown];

  return (
    <nav className="bg-[#1B1B1B] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {data.logo}
              </h1>
            </div>
            
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
            <div className="hidden md:block">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {data.howItWorks}
            </button>
          </div>
          </div>

          {/* Center - How it works */}
          

          {/* Right - Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
              {data.auth.login}
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              {data.auth.signup}
            </Button>

            <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1B1B1B] border-gray-700 max-h-60 overflow-y-auto">
                {allTabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {tab}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={data.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                    Categories <ChevronDown className="ml-1 h-4 w-4 inline" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 max-h-60 overflow-y-auto w-full">
                  {allTabs.map((tab) => (
                    <DropdownMenuItem
                      key={tab}
                      className="text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      {tab}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                {data.howItWorks}
              </button>
              <div className="flex space-x-2 pt-2">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 flex-1">
                  {data.auth.login}
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                  {data.auth.signup}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}