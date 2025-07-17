'use client';

import { useState } from 'react';
import { Search, Menu, X, ChevronDown, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
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
      <div className=" mx-[5%] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4 w-60 md:w-full">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {/* {data.logo} */}
                <Image src="/logo.png" alt="logo" width={200} height={32} className='w-[100px] h-auto md:w-[200px]' />
              </a>
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
            <div className="hidden lg:block">
            <button className="text-[#7371FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2">
            {/* Info */}
               <Info className='h-6 w-6 bg-[#7371FF] rounded-full  text-[#1B1B1B] mr-1' />{data.howItWorks}
            </button>
          </div>
          </div>

          {/* Center - How it works */}
          

          {/* Right - Auth buttons */}
          <div className="flex items-center space-x-4 ">
            
            <Button variant="ghost" className="text-[#7371FF] hover:text-white hover:bg-[#1B1B1B] w-20">
              {data.auth.login}
            </Button>
            <Button className="bg-gradient-to-r from-[#8A66FC] to-[#5A34DF] hover:bg-purple-700 text-white w-20 ">
              {data.auth.signup}
            </Button>

          

          <div className='hidden lg:flex'>
            <DropdownMenu >
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
                {/* Auth options */}
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  Sign In
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  Login
                </DropdownMenuItem>
                <div className="border-b border-gray-700 my-1" />
                {/* Navigation links */}
                <DropdownMenuItem asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <a href="/election">Election</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <a href="/sports">Sports</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <a href="/mentions">Mention</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <a href="/crypto">Crypto</a>
                </DropdownMenuItem>
                {/* Existing dynamic tabs, if any */}
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
          </div>

          {/* Mobile menu button */}
          
        </div>

       
      </div>
    </nav>
  );
}