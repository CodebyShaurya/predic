'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MentionCardProps {
  mention: {
    id: number;
    date: string;
    photo: string;
    news: string;
    dialog: string;
    tradeValue: string;
  };
}

export default function MentionCard({ mention }: MentionCardProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors">
      <div className="flex items-center space-x-4">
        {/* Date */}
        <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span className="text-gray-400 text-sm whitespace-nowrap">{mention.date}</span>
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
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-1">
            {mention.news}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
            {mention.dialog}
          </p>
        </div>

        {/* Trade Button */}
        <div className="flex-shrink-0">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2">
            Trade {mention.tradeValue}
          </Button>
        </div>
      </div>
    </div>
  );
}