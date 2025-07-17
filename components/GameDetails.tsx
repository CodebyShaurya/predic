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
    <div className="bg-[#111111] border border-[#232323] rounded-lg p-6">
      <div className="mb-6 flex">
        <img src={`https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/800px-Brentford_FC_crest.svg.png`} alt={selectedGame.name} className="w-16 h-16" />
        <div>
        <h2 className="text-white text-2md font-light mb-2">{selectedGame.name}</h2>
        <p className="text-gray-400 ml-3">
          MLS
        </p>
        </div>
      </div>

      <>
  {/*Tabs navigation*/}
  <ul
    className=" flex list-none h-14 mb-5 space-x-3 -pb-4 flex-row flex-wrap border-b-2 border-gray-400 border-b-solid  ps-0"
    role="tablist"
    data-twe-nav-ref=""
  >
    <li role="presentation" className='h-16'>
      <div
        // href=""
        className="mt-2 block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
        data-twe-toggle="pill"
        data-twe-target="#tabs-home"
        data-twe-nav-active=""
        role="tab"
        aria-controls="tabs-home"
        aria-selected="true"
      >
        Buy
      </div>
    </li>
    <li role="presentation">
      <div
        // href="#tabs-profile"
        className="mt-2 block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
        // assName="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
        data-twe-toggle="pill"
        data-twe-target="#tabs-profile"
        role="tab"
        aria-controls="tabs-profile"
        aria-selected="false"
      >
        Sell
      </div>
    </li>
    
  </ul>
  {/*Tabs content*/}

</>


      
      <div className='flex w-full justify-center items-center space-x-5 text-black my-2 mt-10'>
                <div className={`p-3 px-5 w-full flex justify-center items-center font-semibold rounded-md  bg-[#71FE99] flex`}> {selectedGame.awayTeam.short}   {' '} <span className='text-sm'>{selectedGame.awayTeam.bid}</span></div>
                <div className={`p-3 px-5 w-full flex justify-center items-center font-semibold rounded-md bg-[#FE7171] flex`}> {selectedGame.homeTeam.short} <span className='text-sm'>{selectedGame.homeTeam.bid}</span></div>
                {/* <span className="text-green-500 font-semibold">{match.awayTeam.bid}</span> */}
                </div>

      {/* <div className="flex justify-center mb-4">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
          <Eye className="h-4 w-4 mr-2" />
          Game View
        </Button>
      </div> */}

     

      <div className=" my-6 flex justify-between">
      <p className="text-gray-400 text-sm">Amount</p>
        <h3 className="text-right text-gray-400 text-3xl font-light">{selectedGame.amount}</h3>
        
      </div>

      <div className="mb-6">
        {/* <h4 className="text-white font-semibold mb-3">Trade Suggestions</h4> */}
        <div className="space-x-2 flex justify-end">
          {selectedGame.tradeSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className=" px-3 py-1
               rounded-lg text-[#AEA4FF] text-sm bg-[#232323] bg-opacity-50"
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full bg-[#8373FE] hover:bg-[#8373FE] text-white  py-3">
        Trade
      </Button>
    </div>
  );
}