import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Login from "./Login";
import ServicesDropdown from "./ServicesDropdown";
import { servicesData } from "../data/servicesData";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Refs for click outside detection
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close all dropdowns
  const closeAll = () => {
    setDropdownOpen(false);
    setShowSearch(false);
    setMobileMenuOpen(false);
  };

  // Handle search submission
  const handleSearch = async (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => {
        console.log('Searching for:', searchValue);
        setIsSearching(false);
        // You can add your search logic here
      }, 1000);
    }
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      
      // Close search if clicked outside
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }

      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeAll();
        setSearchValue('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [showSearch]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-4 md:px-6 py-3 flex items-center justify-between z-50 shadow-lg">
        {/* Logo */}
        <Link to="/" onClick={closeAll} className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15a4 4 0 014-4h1a4 4 0 118 0h1a4 4 0 010 8H7a4 4 0 01-4-4z"
            />
          </svg>
          <span className="text-xl font-extrabold text-white">CloudNest</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8">
          {/* Services Dropdown Component */}
          <ServicesDropdown closeAll={closeAll} />

          {/* Other Nav Links */}
          {["Support", "Company", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-300 transition-colors duration-200">
              <Link 
                to={`/${item.toLowerCase()}`} 
                onClick={closeAll}
                className="px-2 py-1 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            <button
              onClick={() => {
                setShowSearch((prev) => !prev);
                setDropdownOpen(false);
                setMobileMenuOpen(false);
              }}
              className="p-2 hover:text-yellow-300 hover:bg-blue-700 rounded transition-all duration-200"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>
            
            {/* Search Input with Animation */}
            <div className={`absolute right-0 mt-2 transition-all duration-300 transform ${
              showSearch 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}>
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="Search... (Press Enter)"
                  className="w-48 md:w-56 px-3 py-2 text-black border border-gray-300 rounded-lg shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                />
                {isSearching && (
                  <div className="absolute right-2 top-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setShowSearch(false);
                setMobileMenuOpen(false);
              }}
              className="p-2 hover:text-yellow-300 hover:bg-blue-700 rounded transition-all duration-200"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="User menu"
            >
              <UserCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>
            
            {/* Dropdown with Animation */}
            <div className={`absolute right-0 mt-2 w-36 transition-all duration-200 transform ${
              dropdownOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}>
              <ul className="bg-white text-black border border-gray-200 rounded-lg shadow-xl text-sm overflow-hidden">
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 border-b border-gray-100"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setDropdownOpen(false);
                  }}
                >
                  <span className="font-medium">Login</span>
                </li>
                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150">
                  <span className="font-medium">Logout</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/services" onClick={closeAll}>
            <button className="hidden md:block bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-200 text-sm">
              Try for Free
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden" ref={mobileMenuRef}>
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setDropdownOpen(false);
                setShowSearch(false);
              }}
              className="p-2 hover:bg-blue-700 rounded transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
            
            {/* Mobile Menu */}
            <div className={`absolute right-0 top-12 w-72 transition-all duration-200 transform ${
              mobileMenuOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}>
              <div className="bg-white text-black border border-gray-200 rounded-lg shadow-xl overflow-hidden max-h-96 overflow-y-auto">
                {/* Services in Mobile */}
                <div className="border-b border-gray-100">
                  <div className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">Services</div>
                  <div className="max-h-40 overflow-y-auto">
                    {Object.entries(servicesData).slice(0, 3).map(([category, services]) => (
                      <div key={category} className="px-4 py-2">
                        <div className="text-xs font-medium text-gray-600 mb-1">{category}</div>
                        {services.slice(0, 2).map((service) => (
                          <Link
                            key={service.name}
                            to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={closeAll}
                            className="flex items-center space-x-2 py-1 text-sm hover:text-blue-600 transition-colors"
                          >
                            <span className="text-xs">{service.icon}</span>
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link
                      to="/services"
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
                
                {/* Other Nav Items */}
                {["Support", "Company", "Contact"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={closeAll}
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={closeAll}
                  className="block px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 font-semibold text-center"
                >
                  Try for Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}