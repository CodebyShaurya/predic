'use client';

import { useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Currency {
  name: string;
  symbol: string;
  amount: string;
  logo: string;
}
interface Timeframe {
  name: string;
  symbol: string;
  amount: string;
  logo: string | ReactNode;
}


interface CryptoSidebarProps {
  timeframes: Timeframe[];
  currencies: Currency[];
}

export default function CryptoSidebar({ timeframes, currencies }: CryptoSidebarProps) {
  const [activeTimeframe, setActiveTimeframe] = useState(timeframes[0]);
  const [activeCurrency, setActiveCurrency] = useState<string | null>(null);

  return (
    <div className="bg-[#101010] border-r border-gray-700  p-4 h-fit">
      {/* Timeframes */}
      <div className="mb-6">
        {/* <h3 className="text-white font-semibold mb-3">Timeframes</h3> */}
        <div className="space-y-2">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe.name}
              variant={activeTimeframe === timeframe ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTimeframe(timeframe)}
              className={`w-full flex justify-between items-center ${
                activeTimeframe === timeframe
                  ? 'bg-gray-800 text-white hover:bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                {/* Render SVG icon or text logo */}
                {typeof timeframe.logo === 'string' ? (
                  <span className="text-lg font-bold">{timeframe.logo}</span>
                ) : (
                  <div className="flex-shrink-0">{timeframe.logo}</div>
                )}
                <div className="text-left">
                  <div className="text-lg">{timeframe.name}</div>
                  {/* <div className="text-xs opacity-75">{timeframe.symbol}</div> */}
                </div>
              </div>
              <div className="text-right font-semibold">{timeframe.amount}</div>
            </Button>
          ))}
        </div>
      </div>

      {/* Currencies */}
      <div>
        <h3 className="text-white font-semibold mb-3">Cryptocurrencies</h3>
        <div className="space-y-2">
          {currencies.map((currency) => (
            <Button
              key={currency.symbol}
              variant={activeCurrency === currency.symbol ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCurrency(currency.symbol)}
              className={`w-full justify-between p-3 h-auto ${
                activeCurrency === currency.symbol
                  ? 'bg-gray-700 text-white hover:bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold">{currency.logo}</span>
                <div className="text-left">
                  <div className="text-lg">{currency.name}</div>
                  {/* <div className="text-xs opacity-75">{currency.symbol}</div> */}
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{currency.amount}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}