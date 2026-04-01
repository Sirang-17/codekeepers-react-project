import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white dark:bg-[#161b26] rounded-xl overflow-hidden border border-gray-100 dark:border-[#2d333f] transition-all duration-300 hover:shadow-lg">
        
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-[#0a0d14]">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Wishlist Heart - Subtle like the original */}
          <button className="absolute top-2 right-2 p-1.5 bg-white/30 dark:bg-black/20 backdrop-blur-md rounded-full text-white hover:text-red-500 transition-colors">
            <Heart size={16} />
          </button>

          {/* Category Tag */}
          <div className="absolute bottom-2 left-2 bg-blue-600/90 backdrop-blur-sm text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
            {product.category}
          </div>
        </div>

        {/* Content Section - Adjusted to match screenshot hierarchy */}
        <div className="p-3">
          {/* Title comes first in GilgitApp */}
          <h3 className="text-[13px] font-medium text-gray-700 dark:text-gray-300 truncate mb-1">
            {product.title}
          </h3>
          
          {/* Price is larger and more bold */}
          <p className="text-[16px] font-black text-gray-900 dark:text-white mb-3">
            PKR {product.price}
          </p>
          
          {/* Footer: Location and Time */}
          <div className="flex items-center justify-between border-t border-gray-50 dark:border-[#1e232e] pt-2 mt-auto">
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <MapPin size={10} className="shrink-0" />
              <span className="text-[10px] truncate max-w-17.5">{product.location}</span>
            </div>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
              {product.time}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;