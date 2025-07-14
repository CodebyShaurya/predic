'use client';

import { Button } from '@/components/ui/button';

interface TopBox {
  id: number;
  time: string;
  price: string;
  volume: string;
}

interface Team {
  name: string;
  short: string;
  color: string;
  price: string;
}

interface TeamMatchup {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
}

interface TopBoxesProps {
  boxes: TopBox[];
  teamMatchups: TeamMatchup[];
}

export default function TopBoxes({ boxes, teamMatchups }: TopBoxesProps) {
  return (
    <div className="mb-6">
      {/* Top Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Time</span>
              <span className="text-white font-semibold">{box.time}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Price</span>
              <span className="text-green-500 font-bold">{box.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Volume</span>
              <span className="text-purple-400 font-semibold">{box.volume}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Team Matchups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamMatchups.map((matchup) => (
          <div
            key={matchup.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-3 flex-1">
                <div className={`w-4 h-4 rounded-full ${matchup.homeTeam.color}`}></div>
                <span className="text-white font-semibold">{matchup.homeTeam.short}</span>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1"
                >
                  {matchup.homeTeam.price}
                </Button>
              </div>
              
              <span className="text-gray-400 text-sm">vs</span>
              
              <div className="flex items-center space-x-3 flex-1 justify-end">
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1"
                >
                  {matchup.awayTeam.price}
                </Button>
                <span className="text-white font-semibold">{matchup.awayTeam.short}</span>
                <div className={`w-4 h-4 rounded-full ${matchup.awayTeam.color}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}