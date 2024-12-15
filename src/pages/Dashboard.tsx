import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Clock, Ticket as TicketIcon, TrendingUp, MapPin } from 'lucide-react';
import { movies } from '../data/movies';
import { theaters } from '../data/theaters';
import { Emirate } from '../types';
import EmirateSelector from '../components/EmirateSelector';

export default function Dashboard() {
  const [selectedEmirate, setSelectedEmirate] = useState<Emirate | null>(null);
  
  const filteredTheaters = selectedEmirate
    ? theaters.filter(theater => theater.emirate === selectedEmirate)
    : [];

  const recentBookings = [
    { id: 1, movie: 'Dune: Part Two', date: '2024-03-15', time: '7:15 PM', seats: 2 },
    { id: 2, movie: 'Poor Things', date: '2024-03-10', time: '4:30 PM', seats: 3 },
  ];

  return (
    <div className="space-y-6">
      <EmirateSelector
        selectedEmirate={selectedEmirate}
        onSelect={setSelectedEmirate}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Bookings</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <TicketIcon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Movies Watched</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <Film className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Hours Enjoyed</p>
              <h3 className="text-2xl font-bold">16.5</h3>
            </div>
            <Clock className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Points Earned</p>
              <h3 className="text-2xl font-bold">450</h3>
            </div>
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {selectedEmirate && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Theaters in {selectedEmirate}
            </h2>
            {filteredTheaters.length > 0 ? (
              <div className="space-y-4">
                {filteredTheaters.map((theater) => (
                  <div key={theater.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">{theater.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {theater.location}
                      </p>
                    </div>
                    <Link
                      to="/movies"
                      className="text-primary hover:text-primary/80"
                    >
                      View Shows
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No theaters found in {selectedEmirate}</p>
            )}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-medium">{booking.movie}</h3>
                  <p className="text-sm text-gray-500">
                    {booking.date} at {booking.time} • {booking.seats} seats
                  </p>
                </div>
                <Link
                  to={`/booking/${booking.id}`}
                  className="text-primary hover:text-primary/80"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Now Showing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.slice(0, 3).map((movie) => (
            <div key={movie.id} className="flex items-center space-x-4">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.genre.join(', ')}</p>
              </div>
              <Link
                to="/movies"
                className="ml-auto text-primary hover:text-primary/80"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}