'use client';

import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Team {
  name: string;
  short: string;
  bid: string;
}

interface GameDetailsProps {
  selectedGame: {
    name: string;
    teams: string[];
    homeTeam: Team;
    awayTeam: Team;
    amount: string;
    tradeSuggestions: string[];
  };
}

export default function GameDetails({ selectedGame }: GameDetailsProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold mb-2">{selectedGame.name}</h2>
        <p className="text-gray-400">
          {selectedGame.teams.join(' vs ')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Button className="bg-green-600 hover:bg-green-700 text-white p-4 h-auto flex flex-col">
          <span className="text-sm opacity-80">Buy</span>
          <span className="font-bold">{selectedGame.homeTeam.name}</span>
          <span className="text-lg">{selectedGame.homeTeam.bid}</span>
        </Button>
        
        <Button className="bg-red-600 hover:bg-red-700 text-white p-4 h-auto flex flex-col">
          <span className="text-sm opacity-80">Sell</span>
          <span className="font-bold">{selectedGame.awayTeam.name}</span>
          <span className="text-lg">{selectedGame.awayTeam.bid}</span>
        </Button>
      </div>

      <div className="flex justify-center mb-4">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
          <Eye className="h-4 w-4 mr-2" />
          Game View
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white p-4 h-auto flex flex-col">
          <span className="font-semibold">{selectedGame.homeTeam.short}</span>
          <span className="text-sm">{selectedGame.homeTeam.bid}</span>
        </Button>
        
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white p-4 h-auto flex flex-col">
          <span className="font-semibold">{selectedGame.awayTeam.short}</span>
          <span className="text-sm">{selectedGame.awayTeam.bid}</span>
        </Button>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-white text-3xl font-bold">{selectedGame.amount}</h3>
        <p className="text-gray-400 text-sm">Current Amount</p>
      </div>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Trade Suggestions</h4>
        <div className="space-y-2">
          {selectedGame.tradeSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="bg-gray-700 p-3 rounded-lg text-gray-300 text-sm"
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3">
        Execute Trade
      </Button>
    </div>
  );
}