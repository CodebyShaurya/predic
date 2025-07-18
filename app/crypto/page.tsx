'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';
import SearchFilter from '@/components/SearchFilter';
import CryptoSidebar from '@/components/CryptoSidebar';
import PredictionCard from '@/components/PredictionCard';

// Local timeframe data with SVGs
const timeframes = [
  {
    name: "Live/Soon",
    symbol: "LIVE",
    amount: "23",
    logo: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="te">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <circle cx="12" cy="12" r="1" fill="white"/>
      </svg>
    )
  },
  {
    name: "Hourly",
    symbol: "1H",
    amount: "12",
    logo: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Daily",
    symbol: "1D",
    amount: "96",
    logo: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="te">
        <circle cx="12" cy="12" r="5" fill="currentColor"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Weekly",
    symbol: "1W",
    amount: "520",
    logo: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function CryptoPage() {
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const data = await response.json();
          setSiteData(data);
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
      <Navbar 
        data={siteData.navbar} 
        tabs={siteData.tabs} 
        moreDropdown={siteData.moreDropdown} 
      />
      <TabNavigation 
        tabs={siteData.tabs} 
        moreDropdown={siteData.moreDropdown} 
        currentTab="Crypto" 
      />
      {/* <SearchFilter breakingNews={siteData.breakingNews} /> */}

      <main className="max-w-7xl mx-auto py-8">
        <div className="mb-6 px-2 lg:px-0">
          <h1 className="text-white text-2xl font-bold mb-2">Crypto Predictions</h1>
          <p className="text-gray-400">Trade on cryptocurrency price movements and market events</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
          <div className="lg:col-span-1">
            <CryptoSidebar
              timeframes={timeframes}
              currencies={siteData.crypto.sidebar.currencies}
            />
          </div>
          
          <div className="lg:col-span-3 pr-4 sm:pr-6 lg:pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {siteData.predictions.map((prediction: any) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}