'use client';

import { useState } from 'react';
import { Gift, Bookmark, TrendingUp, TrendingDown } from 'lucide-react';
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
      <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm leading-tight">
                {prediction.title}
              </h3>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="py-2">
          <div className="space-y-3">
            {prediction.options?.map((option, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{option.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{option.percentage}%</span>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 bg-green-600 hover:bg-green-700 border-green-600 text-white text-xs"
                    >
                      Yes
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 bg-red-600 hover:bg-red-700 border-red-600 text-white text-xs"
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
          <span className="text-gray-400 text-sm font-medium">{prediction.volume} Vol</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-gray-400 hover:text-white"
            >
              <Gift className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBookmarked(!bookmarked)}
              className={`h-8 w-8 p-0 ${
                bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bookmark className="h-4 w-4" fill={bookmarked ? 'currentColor' : 'none'} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Binary prediction card
  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm leading-tight">
                {prediction.title}
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
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
            <div className="flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 text-xs">{prediction.percentage}%</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-2">
        <div className="flex space-x-2">
          <Button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            size="sm"
          >
            Buy Yes 
          </Button>
          <Button
            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            size="sm"
          >
            Buy No
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-3">
        <span className="text-gray-400 text-sm font-medium">{prediction.volume} Vol</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-gray-400 hover:text-white"
          >
            <Gift className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBookmarked(!bookmarked)}
            className={`h-8 w-8 p-0 ${
              bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Bookmark className="h-4 w-4" fill={bookmarked ? 'currentColor' : 'none'} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}