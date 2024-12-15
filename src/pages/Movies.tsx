import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import TheaterList from '../components/TheaterList';
import { movies } from '../data/movies';
import { theaters } from '../data/theaters';
import { Movie } from '../types';

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    // Scroll to top when selecting a movie on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowTimeSelect = (theaterId: string, showTimeId: string) => {
    // Handle booking logic here
    alert(`Booking for theater ${theaterId} and showtime ${showTimeId}`);
  };

  return (
    <div className="space-y-6">
      {!selectedMovie ? (
        <>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Now Showing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={handleMovieSelect}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedMovie(null)}
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            ← Back to movies
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <MovieCard movie={selectedMovie} onSelect={() => {}} />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Select Show Time</h2>
              <TheaterList
                theaters={theaters}
                onSelectShowTime={handleShowTimeSelect}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}