import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ticket, LogOut, Home, Film, Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <Ticket className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Marhaba Show</h1>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Home className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/movies"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Film className="w-5 h-5 mr-1" />
                Movies
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5 mr-2" />
                Dashboard
              </Link>
              <Link
                to="/movies"
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Film className="w-5 h-5 mr-2" />
                Movies
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gray-600 mb-2">Welcome, {user?.name}</div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    logout();
                  }}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}