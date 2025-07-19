'use client';

import { useState } from 'react';
import { Gift, Bookmark, Share2, ArrowLeftRight , ChevronsUp} from 'lucide-react';
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
        
        <CardContent className="pb-2 h-[80px] overflow-x-auto no-scrollbar">
          <div className="space-y-2">
            {prediction.options?.map((option, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{option.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{option.percentage}%</span>
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

        <CardFooter className="flex justify-between items-center pt-3">
          <span className="text-gray-200 text-md font-medium flex items-center space-x-2">{prediction.volume} Vol    </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 text-gray-400 hover:text-white"
            >
              <Gift className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBookmarked(!bookmarked)}
              className={`h-5 w-5 p-0 ${
                bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bookmark className="h-5 w-5" fill={bookmarked ? 'currentColor' : 'none'} />
            </Button>
             <Button
              variant="ghost"
              size="sm"
              // onClick={() => setBookmarked(!bookmarked)}
              className={`h-5 w-5 p-0 text-gray-400`}
            >
              <Share2 className="h-5 w-5"  />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Binary prediction card
  return (
    <Card className="bg-[#1E1E1E] border-gray-700 hover:bg-gray-750 transition-colors">
  

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-9 h-9 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm leading-tight 2xl:mr-0 mr-5 ">
                {prediction.title}
              </h3>
            </div>
          </div>
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
        </div>
      </CardHeader>
      
      <CardContent className="py-2  mt-1">
        <div className="flex space-x-2">
          <Button
            className="flex-1 bg-green-200 bg-opacity-10 hover:bg-green-700 text-md text-green-400 h-12"
            size="sm"
          >
            Buy Yes <ChevronsUp className='h-6 w-6' />
          </Button>
          <Button
            className="flex-1 bg-red-200 bg-opacity-10 hover:bg-red-700 text-md text-red-400 h-12"
            size="sm"
          >
            Buy No <ChevronsUp className='h-6 w-6' />
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-3">
        <span className="text-gray-200 text-md font-medium flex items-center space-x-2">{prediction.volume} Vol <ArrowLeftRight className='ml-2 h-6 w-6' />    </span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-5 w-5 p-0 text-gray-400 hover:text-white"
          >
            <Gift className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBookmarked(!bookmarked)}
            className={`h-5 w-5 p-0 ${
              bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Bookmark className="h-5 w-5" fill={bookmarked ? 'currentColor' : 'none'} />
          </Button>
           <Button
              variant="ghost"
              size="sm"
              // onClick={() => setBookmarked(!bookmarked)}
              className={`h-5 w-5 p-0 text-gray-400`}
            >
              <Share2 className="h-5 w-5"  />
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}