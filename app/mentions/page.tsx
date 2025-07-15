'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';
import SearchFilter from '@/components/SearchFilter';
import MentionCard from '@/components/MentionCard';

export default function MentionsPage() {
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
        currentTab="Word Mentions" 
      />
      <SearchFilter breakingNews={siteData.breakingNews} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-white text-2xl font-bold mb-2">Word Mentions</h1>
          <p className="text-gray-400">Track mentions and trade on their impact</p>
        </div>
        
        <div className="space-y-4">
          {siteData.mentions.map((mention: any) => (
            <MentionCard key={mention.id} mention={mention} />
          ))}
        </div>
      </main>
    </div>
  );
}