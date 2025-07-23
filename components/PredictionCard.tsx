'use client';

import { useState } from 'react';
import { Gift, Bookmark, Share2, ArrowLeftRight , ChevronsUp, ChevronsDown} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PredictionOption {
  name: string;
  percentage: number;
}

interface PredictionCardProps {
  prediction: {
    id: number;
    type: 'list' | 'binary';
    image: string;
    title: string;
    volume: string;
    options?: PredictionOption[];
    percentage?: number;
    yesPrice?: string;
    noPrice?: string;
  };
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [buyMode, setBuyMode] = useState(false);
  const [buyType, setBuyType] = useState<'yes' | 'no' | null>(null);
  const [priceValue, setPriceValue] = useState(50);

  const handleBuyClick = (type: 'yes' | 'no') => {
    setBuyType(type);
    setBuyMode(true);
  };

  const handleClose = () => {
    setBuyMode(false);
    setBuyType(null);
  };

  if (prediction.type === 'list') {
    return (
      <Card className="bg-[#1E1E1E] border-gray-700 hover:bg-gray-750 transition-colors">
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-9 h-9 rounded-lg object-cover"
            />
            <div className="flex-1 mt-1">
              <h3 className="text-white font-semibold text-sm leading-tight">
                {prediction.title}
              </h3>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className=" h-[75px] overflow-x-auto no-scrollbar">
          <div className="space-y-2">
            {prediction.options?.map((option, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{option.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium text-sm">{option.percentage}%</span>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 bg-green-200 bg-opacity-10 hover:bg-green-700 text-lg text-green-400 text-xs"
                    >
                      Yes
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 bg-red-200 bg-opacity-10 hover:bg-red-700 text-xl text-red-400 text-xs"
                    >
                      No
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-2">
          <span className="text-gray-200 text-sm font-medium flex items-center space-x-2">{prediction.volume} Vol    </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 text-gray-400 hover:text-white"
            >
                <Gift className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBookmarked(!bookmarked)}
              className={`h-4 w-4 p-0 ${
                bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bookmark className="h-4 w-4" fill={bookmarked ? 'currentColor' : 'none'} />
            </Button>
             <Button
              variant="ghost"
              size="sm"
              // onClick={() => setBookmarked(!bookmarked)}
              className={`h-4 w-4  p-0 text-gray-400`}
            >
              <Share2 className="h-4 w-4"  />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Binary prediction card
  return (
    <Card className="bg-[#1E1E1E] border-gray-700 hover:bg-gray-750 transition-colors">
      <CardHeader className={`${buyMode ? 'py-2' : 'pb-3'}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-9 h-9 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm leading-tight 2xl:mr-0 mr-5">
                {prediction.title}
              </h3>
            </div>
          </div>
          
          {buyMode ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-8 w-8 p-0 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeDasharray={`${prediction.percentage || 0}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{prediction.percentage}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className={`py-2 ${buyMode ? 'mt-0' : 'mt-1'}`}>
        {buyMode ? (
          <div className="flex flex-col space-y-4">
            <div className=" p-1 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 text-sm">Price</span>
                <span className="text-white font-medium">${(priceValue / 10).toFixed(2)}</span>
                <div>
              <div className="relative ">
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={priceValue}
                  onChange={(e) => setPriceValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: buyType === 'yes' 
                      ? `linear-gradient(to right, #22c55e ${priceValue}%, #333 ${priceValue}%)` 
                      : `linear-gradient(to right, #ef4444 ${priceValue}%, #333 ${priceValue}%)`
                  }}
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>$1.00</span>
                <span>$10.00</span>
              </div>
              </div>
              </div>
              
              {/* Price slider */}
              
            </div>
            
            <Button
              className={`w-full h-12 ${
                buyType === 'yes'
                  ? 'bg-green-700 hover:bg-green-800 text-white'
                  : 'bg-red-700 hover:bg-red-800 text-white'
              }`}
            >
              Confirm {buyType === 'yes' ? 'Yes' : 'No'} Purchase
            </Button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Button
              className="flex-1 bg-green-200 bg-opacity-10 hover:bg-green-700 text-md text-green-400 h-12"
              size="sm"
              onClick={() => handleBuyClick('yes')}
            >
              Buy Yes <ChevronsUp className='h-6 w-6' />
            </Button>
            <Button
              className="flex-1 bg-red-200 bg-opacity-10 hover:bg-red-700 text-md text-red-400 h-12"
              size="sm"
              onClick={() => handleBuyClick('no')}
            >
              Buy No <ChevronsDown className='h-6 w-6' />
            </Button>
          </div>
        )}
      </CardContent>

      {!buyMode && (
        <CardFooter className="flex justify-between items-center pt-2">
          <span className="text-gray-200 text-sm font-medium flex items-center space-x-2">{prediction.volume} Vol <ArrowLeftRight className='ml-2 h-4 w-4' /></span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 text-gray-400 hover:text-white"
            >
              <Gift className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBookmarked(!bookmarked)}
              className={`h-4 w-4 p-0 ${
                bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bookmark className="h-4 w-4" fill={bookmarked ? 'currentColor' : 'none'} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-4 w-4 p-0 text-gray-400`}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}