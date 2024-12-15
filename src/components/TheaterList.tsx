import React from 'react';
import { MapPin } from 'lucide-react';
import { Theater } from '../types';

interface TheaterListProps {
  theaters: Theater[];
  onSelectShowTime: (theaterId: string, showTimeId: string) => void;
}

export default function TheaterList({ theaters, onSelectShowTime }: TheaterListProps) {
  return (
    <div className="space-y-6">
      {theaters.map((theater) => (
        <div key={theater.id} className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
            <h3 className="text-lg md:text-xl font-semibold">{theater.name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{theater.location}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {theater.showTimes.map((showTime) => (
              <button
                key={showTime.id}
                onClick={() => onSelectShowTime(theater.id, showTime.id)}
                className="p-2 md:p-3 border rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="font-semibold text-sm md:text-base">{showTime.time}</div>
                <div className="text-xs md:text-sm text-gray-600">AED {showTime.price}</div>
                <div className="text-xs text-gray-500">
                  {showTime.seatsAvailable} seats left
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}