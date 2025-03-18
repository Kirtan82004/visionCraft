// src/components/ProductCard.js

import React, { useState} from 'react';
import { HeartIcon } from '@heroicons/react/outline'; // Heart icon for wishlist
import { StarIcon } from '@heroicons/react/solid'; // Solid star icon for rating
import AddToCart from './user/AddToCart';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const userStatus = useSelector((state) => state.auth.status);
  const [isRated, setIsRated] = useState(false);



  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted); // Toggle wishlist state
  };
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <img
          src={product.images}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-lg">
          {product.isNew ? 'New' : 'On Sale'}
        </span>
        {/* Wishlist Button (Heart Icon) */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-2 left-2 ${isWishlisted ? 'text-red-500' : 'text-gray-600'} p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition duration-200`}
        >{
          userStatus ? (
            <HeartIcon className="w-6 h-6" />
          ) : null
        }
        </button>
      </div>

      {/* Info Section */}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          {/* Render stars based on rating */}
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              className={`w-5 h-5 ${index < product.ratings ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          {/* Price Section */}
          <span className="text-lg font-semibold text-green-600">${product.price}</span>
          <AddToCart product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
