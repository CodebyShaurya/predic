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
import MatchCarousel from '@/components/MatchCarousel';
import SportsSidebarTabs from '@/components/SportsSidebarTabs';

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
        `+7`,
        `+24`,
        '+1'
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

      {/* Match Carousel */}
      <MatchCarousel
        matches={siteData.sports.nbaMatches?.map((match: any, idx: number) => ({
          id: match.id || idx.toString(),
          time: match.time || '7:00 PM',
          volume: '$20m Vol',
          homeTeam: {
            name: match.homeTeam?.name || 'Team A',
            logo: match.homeTeam?.logo || '/logo.png',
            bid: match.homeTeam?.bid || 0,
          },
          awayTeam: {
            name: match.awayTeam?.name || 'Team B',
            logo: match.awayTeam?.logo || '/logo.png',
            bid: match.awayTeam?.bid || 0,
          },
        })) || []}
      />

      <main className="pr-4 sm:pr-6 lg:pr-8 px-2 xl:px-0 max-w-7xl mx-auto  z-1">
        

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SportsSidebarTabs />
            <br />
            {/* Team logos and names side by side for selected match */}
         
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