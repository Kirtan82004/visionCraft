import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import AddToCart from './user/AddToCart';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToSavedItems, removeFromSavedItems } from '../store/wishlistSlice';
import { addToWishlist, removeFromWishlist } from '../services/user/wishlistService';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const userStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWishlist = async () => {
    if (!userStatus) {
      alert('Please log in to use the wishlist feature.');
      return;
    }

    try {
      if (!isWishlisted) {
        const response = await addToWishlist(product);
        console.log('Wishlist Response:', response);
        
        if (!response || !response.data) {
          throw new Error('Invalid response from API');
        }
  
        dispatch(addToSavedItems(product));
        alert('Added to wishlist');
      } 
      setIsWishlisted(!isWishlisted);
    } catch (err) {
      alert('Failed to update wishlist');
      console.error('Wishlist Error:', err.message);
    }
  };

  const handleProductDetail = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <img
          onClick={handleProductDetail}
          src={Array.isArray(product.images) ? product.images[0] : product.images}
          alt={product.name}
          className="w-full h-64 object-cover cursor-pointer"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-lg">
          {product.isNew ? 'New' : 'On Sale'}
        </span>
        
        {/* Wishlist Button */}
        {userStatus && (
          <button
            onClick={handleWishlist}
            className={`absolute top-2 left-2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition duration-200 ${
              isWishlisted ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <HeartIcon className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              className={`w-5 h-5 ${index < product.ratings ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">${product.price}</span>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
