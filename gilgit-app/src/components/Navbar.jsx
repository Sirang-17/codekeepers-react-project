import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, Sun, Moon, 
  Car, Bike, Laptop, Smartphone, 
  Home as HomeIcon, Building2, Store, Mountain, 
  Tv, Sofa, Book, Dog, Shirt, 
  Nut, ShoppingBag, LayoutGrid 
} from 'lucide-react';

// 1. ADDED 'setSelectedCategory' and 'selectedCategory' to props
const Navbar = ({ 
  isDarkMode, 
  toggleTheme, 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  
  const categories = [
    { name: 'All', icon: <LayoutGrid size={20} /> }, // Added 'All' option to reset filters
    { name: 'Cars', icon: <Car size={20} /> },
    { name: 'Bikes', icon: <Bike size={20} /> },
    { name: 'Laptops', icon: <Laptop size={20} /> },
    { name: 'Mobiles', icon: <Smartphone size={20} /> },
    { name: 'Home', icon: <HomeIcon size={20} /> },
    { name: 'Office', icon: <Building2 size={20} /> },
    { name: 'Shop', icon: <Store size={20} /> },
    { name: 'Plot', icon: <Mountain size={20} /> },
    { name: 'Appliances', icon: <Tv size={20} /> },
    { name: 'Furniture', icon: <Sofa size={20} /> },
    { name: 'Books', icon: <Book size={20} /> },
    { name: 'Pets', icon: <Dog size={20} /> },
    { name: 'Fashion', icon: <Shirt size={20} /> },
    { name: 'Dry Fruit', icon: <Nut size={20} /> },
    { name: 'GA Store', icon: <ShoppingBag size={20} /> },
    { name: 'Others', icon: <LayoutGrid size={20} /> },
  ];

  return (
    <nav className="w-full bg-white dark:bg-[#0a0d14] border-b border-gray-100 dark:border-[#1e232e] sticky top-0 z-50 transition-colors">
      
      {/* Top Section */}
      <div className="max-w-350 mx-auto px-4 h-18.75 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" onClick={() => setSelectedCategory("All")} className="flex items-center gap-2 shrink-0">
          <div className="bg-black dark:bg-white text-white dark:text-black font-bold h-10 w-10 flex items-center justify-center rounded-lg text-2xl">
            g
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hidden lg:block">
            GilgitApp
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-137.5 flex items-center bg-white dark:bg-[#161b26] rounded-md border border-gray-200 dark:border-[#2d333f] px-3 h-12 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input 
            type="text" 
            placeholder="I'm looking for" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full h-full px-3 text-[15px] text-gray-700 dark:text-gray-200 placeholder-gray-400" 
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 px-1"
            >
              ×
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center justify-between w-50 px-3 h-12 bg-white dark:bg-[#161b26] border border-gray-200 dark:border-[#2d333f] rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1c222d] transition">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" />
              <span className="text-[15px] text-gray-700 dark:text-gray-300">Pakistan</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800 transition-transform active:scale-90"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-500" />}
          </button>

          <Link to="/login" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium text-[15px] hidden sm:block">
            Login
          </Link>
          
          <Link to="/sell" className="bg-[#3b82f6] hover:bg-blue-600 text-white h-12 px-8 rounded-md font-bold text-[15px] flex items-center justify-center transition shadow-sm active:scale-95">
            Sell Now
          </Link>
        </div>
      </div>

      {/* Category Bar */}
      <div className="w-full border-t border-gray-100 dark:border-[#1e232e] bg-white dark:bg-[#0a0d14] overflow-x-auto no-scrollbar">
        <div className="max-w-350 mx-auto flex items-center justify-between py-4 px-4 min-w-max">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedCategory(cat.name);
                setSearchQuery(""); // Optional: Clear search when switching categories
              }}
              className={`group flex flex-col items-center px-4 gap-2 transition-all ${
                selectedCategory === cat.name ? 'scale-110' : ''
              }`}
            >
              <div className={`transition-colors ${
                selectedCategory === cat.name 
                ? 'text-blue-600' 
                : 'text-gray-400 group-hover:text-blue-600'
              }`}>
                {cat.icon}
              </div>
              <span className={`text-[12px] font-medium transition-colors ${
                selectedCategory === cat.name 
                ? 'text-gray-900 dark:text-white font-bold' 
                : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
              }`}>
                {cat.name}
              </span>
              
              {/* Underline for active category */}
              {selectedCategory === cat.name && (
                <div className="w-full h-0.5 bg-blue-600 rounded-full mt-1"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;