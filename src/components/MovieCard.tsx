import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export default function MovieCard({ movie, onSelect }: MovieCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onSelect(movie)}
    >
      <img 
        src={movie.image} 
        alt={movie.title} 
        className="w-full h-48 sm:h-64 object-cover"
      />
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-1">{movie.title}</h3>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{movie.rating}/5</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{movie.duration}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {movie.genre.map((g) => (
            <span 
              key={g} 
              className="px-2 py-1 bg-gray-100 rounded-full text-xs"
            >
              {g}
            </span>
          ))}
        </div>
        <div className="flex items-center text-xs md:text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-1" />
          <span>Release: {movie.releaseDate}</span>
        </div>
      </div>
    </div>
  );
}