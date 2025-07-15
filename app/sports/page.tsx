'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';
import SearchFilter from '@/components/SearchFilter';
import TopBoxes from '@/components/TopBoxes';
import CompanyPrices from '@/components/CompanyPrices';
import SportsSidebar from '@/components/SportsSidebar';
import NBAMatches from '@/components/NBAMatches';
import GameDetails from '@/components/GameDetails';

export default function SportsPage() {
  const [siteData, setSiteData] = useState<any>(null);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const data = await response.json();
          setSiteData(data);
          setSelectedMatch(data.sports.selectedGame);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleMatchSelect = (match: any) => {
    const gameData = {
      name: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
      teams: [match.homeTeam.name, match.awayTeam.name],
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      amount: match.money,
      tradeSuggestions: [
        `Buy ${match.homeTeam.name} at ${match.homeTeam.bid}`,
        `Hedge with ${match.awayTeam.name} spread`,
        'Consider live betting options'
      ]
    };
    setSelectedMatch(gameData);
  };

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
      <Navbar data={siteData.navbar} />
      <TabNavigation tabs={siteData.tabs} moreDropdown={siteData.moreDropdown} />
      {/* <SearchFilter breakingNews={siteData.breakingNews} /> */}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TopBoxes 
          boxes={siteData.sports.topBoxes} 
          teamMatchups={siteData.sports.teamMatchups}
        />
        <CompanyPrices companies={siteData.sports.companies} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SportsSidebar
              categories={siteData.sports.sidebar.categories}
              leagues={siteData.sports.sidebar.leagues}
            />
          </div>
          
          <div className="lg:col-span-2">
            <NBAMatches
              nbaMatches={siteData.sports.nbaMatches}
              onMatchSelect={handleMatchSelect}
            />
          </div>
          
          <div className="lg:col-span-1">
            {selectedMatch && <GameDetails selectedGame={selectedMatch} />}
          </div>
        </div>
      </main>
    </div>
  );
}