'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MentionCardProps {
  mention: {
    id: number;
    date: string;
    month: string;
      photo: string;
    news: string;
    dialog: string;
    tradeValue: string;
  };
}

export default function MentionCard({ mention }: MentionCardProps) {
  return (
    <div className="bg-[#1B1B1B] border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors">
      <div className="flex items-center space-x-4">
        {/* Date */}
        <div className="flex flex-col items-center space-x-2 min-w-0 flex-shrink-0">
          {/* <Calendar className="h-4 w-4 text-gray-400" /> */}
          <span className="text-white text-3xl whitespace-nowrap">{mention.date} </span>
          <span className="text-gray-400 text-sm whitespace-nowrap">{mention.month}</span>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={mention.photo}
            alt={mention.news}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>

        {/* News and Dialog */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-xl mb-2 line-clamp-1">
            {mention.news}
          </h3>
          <div className="flex items-center space-x-2 mb-1">
            {/* Date Tag */}
            <span className="bg-[#1B1B1B] border border-gray-700 rounded-md px-2 py-0.5 text-xs text-gray-300 whitespace-nowrap">
              {mention.date} {mention.month} , 12:00
            </span>
            {/* Time Tag (placeholder) */}
           
            {/* Dialog (Volume) */}
            <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed m-0">
              {mention.dialog}
            </p>
          </div>
        </div>

        {/* Topic Tags and Trade Button */}
        <div className="flex flex-row items-end space-x-2 flex-shrink-0 items-center">
          <div className="flex space-x-2 mb-1">
            {/* Placeholder Topic Tags */}
            <span className="bg-[#1B1B1B] border border-gray-700 rounded-md px-2 py-0.5 text-xs text-gray-300 whitespace-nowrap">
              Crypto
            </span>
            <span className="bg-[#1B1B1B] border border-gray-700 rounded-md px-2 py-0.5 text-xs text-gray-300 whitespace-nowrap">
              News
            </span>
          </div>
          <Button className="bg-[#8373FE] hover:bg-[#8373FE] text-white  px-8 py-2 text-md">
            Trade 
          </Button>
        </div>
      </div>
    </div>
  );
}