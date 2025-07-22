import React, { useState } from 'react';
import { 
  Home, 
  Phone, 
  History, 
  Briefcase, 
  ShoppingCart, 
  Heart, 
  User, 
  Percent, 
  LogOut,
  ChevronDown,
} from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between h-full px-6 lg:px-10 xl:px-12 w-full">
        {/* Left Section - Today's Deals */}
        <div className="flex items-center">
          <a 
            href="/deals" 
            className="flex text-[#d62d4c] items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:border border-[#c20f31]"
          >
            <Percent size={16} />
            <span>Deals Today</span>
          </a>
        </div>

        {/* Center Section - Main Navigation Links */}
        <div className="flex items-center space-x-8 lg:space-x-10">
          <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4">
            <Home size={18} />
            <span className="tracking-wide">Home</span>
          </a>
          <a href="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4">
            <Phone size={18} />
            <span className="tracking-wide">Contact</span>
          </a>
          <a href="/purchase-history" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4">
            <History size={18} />
            <span className="tracking-wide">Purchase History</span>
          </a>
          <a href="/careers" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4">
            <Briefcase size={18} />
            <span className="tracking-wide">Careers</span>
          </a>
        </div>

        {/* Right Section - Cart, Wishlist & Profile */}
        <div className="flex items-center space-x-6">
          <a href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group">
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">3</span>
            </div>
            <span className="hidden lg:inline font-medium text-sm tracking-wide group-hover:underline underline-offset-4">Cart</span>
          </a>
          
          <a href="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group">
            <div className="relative">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">5</span>
            </div>
            <span className="hidden lg:inline font-medium text-sm tracking-wide group-hover:underline underline-offset-4">Wishlist</span>
          </a>
          
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('profile')}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
            >
              <User size={20} />
              <span className="hidden lg:inline font-medium text-sm tracking-wide group-hover:underline underline-offset-4">Profile</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'profile' && (
              <div className="absolute top-full right-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
                <div className="py-2">
                  <a href="/profile" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium text-sm">
                    <User size={16} className="mr-3 text-gray-500" />
                    My Profile
                  </a>
                  <a href="/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium text-sm">
                    <span className="mr-3 text-gray-500">⚙️</span>
                    Settings
                  </a>
                  <div className="border-t border-gray-100 mt-1"></div>
                  <button className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm">
                    <LogOut size={16} className="mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom Navigation */}
      <nav className="md:hidden flex items-center justify-around h-full px-3 bg-[#fee9a2] border-t-2 border-yellow-300">
        <a href="/" className="flex flex-col items-center justify-center min-h-[3rem] space-y-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2">
          <Home size={20} />
          <span className="text-xs font-semibold tracking-wide">Home</span>
        </a>
        
        <a href="/deals" className="flex flex-col items-center justify-center min-h-[3rem] space-y-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 relative">
          <div className="relative">
            <Percent size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3"></span>
          </div>
          <span className="text-xs font-semibold tracking-wide">Deals</span>
        </a>
        
        <a href="/cart" className="flex flex-col items-center justify-center min-h-[3rem] space-y-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 relative">
          <div className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">3</span>
          </div>
          <span className="text-xs font-semibold tracking-wide">Cart</span>
        </a>
        
        <a href="/purchase-history" className="flex flex-col items-center justify-center min-h-[3rem] space-y-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2">
          <History size={20} />
          <span className="text-xs font-semibold tracking-wide">Orders</span>
        </a>
        
        <button className="flex flex-col items-center justify-center min-h-[3rem] space-y-1 text-red-600 hover:text-red-700 transition-colors duration-200 py-2">
          <LogOut size={20} />
          <span className="text-xs font-semibold tracking-wide">Logout</span>
        </button>
      </nav>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
}