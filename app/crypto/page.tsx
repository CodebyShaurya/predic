'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';
import SearchFilter from '@/components/SearchFilter';
import CryptoSidebar from '@/components/CryptoSidebar';
import PredictionCard from '@/components/PredictionCard';

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
      
      <main className="  py-8">
        <div className="mb-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-2xl font-bold mb-2">Crypto Predictions</h1>
          <p className="text-gray-400">Trade on cryptocurrency price movements and market events</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
          <div className="lg:col-span-1">
            <CryptoSidebar
              timeframes={siteData.crypto.sidebar.timeframes}
              currencies={siteData.crypto.sidebar.currencies}
            />
          </div>
          
          <div className="lg:col-span-3 pr-4 sm:pr-6 lg:pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {siteData.crypto.predictions.map((prediction: any) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}