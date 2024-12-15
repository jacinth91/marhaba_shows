import React from 'react';
import { emirates } from '../data/emirates';
import { Emirate } from '../types';

interface EmirateSelectorProps {
  selectedEmirate: Emirate | null;
  onSelect: (emirate: Emirate) => void;
}

export default function EmirateSelector({ selectedEmirate, onSelect }: EmirateSelectorProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">Select Your Emirate</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {emirates.map((emirate) => (
          <button
            key={emirate}
            onClick={() => onSelect(emirate)}
            className={`
              p-3 md:p-4 rounded-lg border-2 transition-all text-sm md:text-base
              ${selectedEmirate === emirate
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-gray-200 hover:border-primary/50'
              }
            `}
          >
            {emirate}
          </button>
        ))}
      </div>
    </div>
  );
}