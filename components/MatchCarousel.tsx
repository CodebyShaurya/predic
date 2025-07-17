import React from 'react';

interface Team {
  name: string;
  logo: string;
  bid: number;
}

interface Match {
  id: string;
  time: string;
  volume: string;
  homeTeam: Team;
  awayTeam: Team;
}

interface MatchCarouselProps {
  matches: Match[];
}

const MatchCarousel: React.FC<MatchCarouselProps> = ({ matches }) => {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex ">
        {[...matches,matches[0],matches[1],...matches].map((match) => (
          <div
            key={match.id}
            className="w-48 border-[#181818] border-2 rounded-lg shadow flex flex-col items-center justify-between p-4 min-w-[12rem]"
          >
            <div className="w-full flex justify-between items-center text-sm text-white mb-2 font-light">
              <span className='bg-[#FFFFFF0A]'>{match.time}</span>
              <span className='text-md'>{match.volume}</span>
            </div>
            <div className="flex flex-col  w-full">
              
              <div className="flex flex-col  mb-1">
                <div className="flex justify-between mb-1">
                    <div className='flex items-center'>
                  <img src={`https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/800px-Brentford_FC_crest.svg.png`} alt={match.homeTeam.name} className="w-4 h-4 object-contain" />
                  <span className="text-white text-md ml-2">{match.homeTeam.name}</span>
                  </div>
                  <span className="text-gray-600 text-xs ">${match.homeTeam.bid} </span>
                </div>
                <div className="flex justify-between mb-1">
                    <div className='flex items-center'>
                  <img src={`https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/800px-Brentford_FC_crest.svg.png`} alt={match.awayTeam.name} className="w-4 h-4 object-contain" />
                  <span className="text-white text-md ml-2">{match.awayTeam.name}</span>
                  </div>
                  <span className="text-gray-600 text-xs ">${match.awayTeam.bid} </span>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between mt-2">
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchCarousel; 