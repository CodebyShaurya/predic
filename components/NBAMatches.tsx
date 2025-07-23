'use client';

import { useState } from 'react';
import { Eye, Pin } from 'lucide-react';

interface Team {
  name: string;
  short: string;
  color: string;
  stats: string;
  bid: string;
}

interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  timer: string;
  money: string;
}

interface NBAMatchesProps {
  nbaMatches: Match[];
  onMatchSelect: (match: Match) => void;
}

export default function NBAMatches({ nbaMatches, onMatchSelect }: NBAMatchesProps) {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);

  const handleMatchSelect = (match: Match) => {
    setSelectedMatch(match.id);
    onMatchSelect(match);
  };

  return (
    <div className="bg-[#101010]  overflow-y-auto max-h-[calc(100vh-250px)] no-scrollbar">
      <h1 className="text-[#E0E0E0] font-semibold text-3xl mb-4">Starting Soon</h1>
      <h1 className="text-[#E0E0E0] font-semibold text-md mb-2">July 17, 2025</h1>
      <h3 className="text-[#E0E0E0] font-semibold text-md mb-4">NBA</h3>
      <div className="space-y-3">
        {nbaMatches.map((match) => (
          <div
            key={match.id}
            onClick={() => handleMatchSelect(match)}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedMatch === match.id
                ? ' bg-[#232323]'
                : ' bg-[#232323]'
            }`}
          >
            <div className="flex justify-between items-center mb-3 ">
              <div className='flex items-center'>
              <span className='bg-[#FFFFFF0A] p-2 rounded-md text-xs'>{match.timer}</span>
              <span className='text-gray-400 text-xs ml-2'>$20m Vol</span>
              </div>
              <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <div className='flex items-center'>
                  <span className='bg-[#FFFFFF0A] font-light p-2 rounded-md text-xs'>Game View {'>'}</span>
                </div>
                <Pin className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            </div>
            
            
            <div className='md:flex items-center justify-between space-x-2 text-black -mt-4'>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-10 font-serif text-white flex justify-center items-center  rounded-md font-bold ${match.homeTeam.color}`}> {match.homeTeam.short}</div>
                  <span className="text-white font-medium">{match.homeTeam.name}</span>
                  <span className="text-gray-400 text-sm">{match.homeTeam.stats}</span>
                </div>
                {/* <span className="text-green-500 font-semibold">{match.homeTeam.bid}</span> */}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-10 font-serif text-white flex justify-center items-center rounded-md font-bold ${match.awayTeam.color}`}> {match.awayTeam.short}</div>
                  <span className="text-white font-medium">{match.awayTeam.name}</span>
                  <span className="text-gray-400 text-sm">{match.awayTeam.stats}</span>
                </div>

               
              </div>
            </div>

            <div className='flex items-center space-x-6 text-black mt-4'>
                <div className={`p-3 px-5 flex justify-center items-center font-semibold rounded-md  bg-[#71FE99] flex`}> {match.awayTeam.short}   {' '} <span >{match.awayTeam.bid}</span></div>
                <div className={`p-3 px-5 flex justify-center items-center font-semibold rounded-md bg-[#FE7171] flex mr-4`}> {match.homeTeam.short} <span >{match.homeTeam.bid}</span></div>
                {/* <span className="text-green-500 font-semibold">{match.awayTeam.bid}</span> */}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}