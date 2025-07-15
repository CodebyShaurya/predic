'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Currency {
  name: string;
  symbol: string;
  amount: string;
  logo: string;
}

interface CryptoSidebarProps {
  timeframes: string[];
  currencies: Currency[];
}

export default function CryptoSidebar({ timeframes, currencies }: CryptoSidebarProps) {
  const [activeTimeframe, setActiveTimeframe] = useState(timeframes[0]);
  const [activeCurrency, setActiveCurrency] = useState<string | null>(null);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-fit">
      {/* Timeframes */}
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-3">Timeframes</h3>
        <div className="space-y-2">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe}
              variant={activeTimeframe === timeframe ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTimeframe(timeframe)}
              className={`w-full justify-start ${
                activeTimeframe === timeframe
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {timeframe}
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
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold">{currency.logo}</span>
                <div className="text-left">
                  <div className="font-medium">{currency.name}</div>
                  <div className="text-xs opacity-75">{currency.symbol}</div>
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