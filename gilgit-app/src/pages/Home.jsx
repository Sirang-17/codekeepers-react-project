import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ searchQuery = "", selectedCategory = "All" }) => {
  // --- FILTER LOGIC ---
  // Filters by search text AND the category selected in the navbar
  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.title.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower);
    
    const matchesCategory = 
      selectedCategory === "All" || 
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Separate data for specific rows (only shown on the "All" home view)
  const carProducts = products.filter(p => p.category === "Cars");
  const mobileProducts = products.filter(p => p.category === "Mobiles");

  // Determine which title to show
  const sectionTitle = searchQuery 
    ? `Results for "${searchQuery}"` 
    : selectedCategory !== "All" 
      ? `Items in ${selectedCategory}` 
      : "Most Recent Items";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0d14] transition-colors duration-300">
  <div className="max-w-312.5 mx-auto px-4 pb-10"> 
        
        {/* --- 1. HERO & BUYER REQUEST SECTION --- */}
        {/* We hide this section when a specific category is selected to focus on products */}
        {selectedCategory === "All" && !searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
            {/* Buyer Request Card */}
            <div className="bg-white dark:bg-[#161b26] rounded-xl p-8 flex flex-col justify-center items-center text-center border border-transparent dark:border-[#2d333f] shadow-sm">
              <h2 className="text-[#0f172a] dark:text-white text-xl font-bold mb-2">Buyer Requests</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                Didn't get what you were <br /> looking for?
              </p>
              <button className="w-full border border-blue-600 text-blue-600 px-4 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm font-bold">
                Post a Buyer Request
              </button>
            </div>

            {/* Main Promo Banner */}
            <div className="md:col-span-3 relative bg-white dark:bg-[#161b26] rounded-xl overflow-hidden flex items-center min-h-75 border border-gray-100 dark:border-[#2d333f] shadow-sm">
              <div className="p-8 md:p-12 z-10 w-full md:w-3/5">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-black dark:bg-white text-white dark:text-black font-bold h-7 w-7 flex items-center justify-center rounded text-sm">g</div>
                  <span className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">GilgitApp</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] mb-8">
                  Your One-Stop <br /> Shop for <span className="text-blue-600">Buying & Selling.</span>
                </h1>
                <button className="bg-[#ffd700] hover:bg-yellow-500 text-black font-extrabold py-3 px-10 rounded-full text-[10px] uppercase tracking-widest shadow-md">
                  Download Now!
                </button>
              </div>
              <div className="hidden md:block absolute right-0 top-0 h-full w-2/5">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000" className="h-full w-full object-cover" alt="Banner" />
                <div className="absolute inset-0 bg-linear-to-r from-white dark:from-[#161b26] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* --- 2. MAIN PRODUCT GRID (Recent / Category Results) --- */}
        <section className={`${selectedCategory === "All" && !searchQuery ? 'mt-12' : 'pt-10'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {sectionTitle}
            </h2>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline">
              View all
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
              <p className="text-gray-500">
                No items found in <span className="font-bold">"{selectedCategory}"</span> 
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* --- 3. CATEGORY SPECIFIC ROWS (Only visible on Default Home View) --- */}
        {selectedCategory === "All" && !searchQuery && (
          <>
            {/* Popular In Cars */}
            {carProducts.length > 0 && (
              <section className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Popular In Cars</h2>
                  <button className="text-blue-600 text-sm font-bold hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {carProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}

            {/* Popular In Mobiles */}
            {mobileProducts.length > 0 && (
              <section className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Popular In Mobiles</h2>
                  <button className="text-blue-600 text-sm font-bold hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {mobileProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}
            {/* --- Bottom Action Buttons --- */}
            <div className="mt-8 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#3b82f6] hover:bg-blue-600 text-white h-[44px] px-10 rounded-md font-bold flex items-center gap-2 transition-all shadow-md text-sm">
                <span className="text-lg font-light">$</span> Sell your item
              </button>
              <button className="border border-[#1e232e] dark:border-gray-700 text-gray-900 dark:text-white h-[44px] px-10 rounded-md font-bold flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm">
                More items <span className="text-lg">→</span>
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;