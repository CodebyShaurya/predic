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
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">NBA Matches</h3>
      <div className="space-y-3">
        {nbaMatches.map((match) => (
          <div
            key={match.id}
            onClick={() => handleMatchSelect(match)}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedMatch === match.id
                ? 'border-purple-500 bg-purple-900/20'
                : 'border-gray-700 bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-400 text-sm">{match.timer}</span>
              <span className="text-purple-400 text-sm font-semibold">{match.money}</span>
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-gray-400" />
                <Pin className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${match.homeTeam.color}`}></div>
                  <span className="text-white font-medium">{match.homeTeam.short}</span>
                  <span className="text-gray-400 text-sm">({match.homeTeam.stats})</span>
                </div>
                <span className="text-green-500 font-semibold">{match.homeTeam.bid}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${match.awayTeam.color}`}></div>
                  <span className="text-white font-medium">{match.awayTeam.short}</span>
                  <span className="text-gray-400 text-sm">({match.awayTeam.stats})</span>
                </div>
                <span className="text-green-500 font-semibold">{match.awayTeam.bid}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}