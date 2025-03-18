// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { getAllProducts } from "../services/productService.js";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from "../store/productSlice.js";
import { ProductCard } from './index.js';

const categoryMap = {
  "67921375d52eb54338824d55": "Eyeglasses",
  "67921375d52eb54338824d5e": "Sunglasses"
};


const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products)
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchProductsStart());
      try {
        const response = await getAllProducts();
        dispatch(fetchProductsSuccess(response.data));
      } catch (err) {
        dispatch(fetchProductsFailure(err.message));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (categoryFilter !== 'all') {
      filteredProducts = filteredProducts.filter(
        product => product.category === categoryFilter
      );
    }

    if (brandFilter !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.brand === brandFilter);
    }

    if (priceFilter !== 'all') {
      if (priceFilter === 'under-2000') {
        filteredProducts = filteredProducts.filter(product => product.price < 2000);
      } else if (priceFilter === '2000-5000') {
        filteredProducts = filteredProducts.filter(product => product.price >= 2000 && product.price <= 5000);
      } else if (priceFilter === '5000-10000') {
        filteredProducts = filteredProducts.filter(product => product.price > 5000 && product.price <= 10000);
      } else if (priceFilter === 'above-10000') {
        filteredProducts = filteredProducts.filter(product => product.price > 10000);
      }
    }

    if (priceFilter === 'low-high') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'high-low') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  if (loading) return <div className='mx-auto my-auto font-bold'>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col md:flex-row my-10">
      <aside className="w-full mt-50 md:w-1/4 mb-6 md:mb-0 md:mr-6 sticky top-20 h-fit">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Filters</h3>

          {/* Category Filter */}
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="category">Category:</label>
            <select
              className="border border-gray-300 rounded px-4 py-2 w-full"
              id="category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All</option>
              {Object.keys(categoryMap).map(id => (
                <option key={id} value={id}>{categoryMap[id]}</option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="brand">Brand:</label>
            <select
              className="border border-gray-300 rounded px-4 py-2 w-full"
              id="brand"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="kirtan211">kirtan211</option>
              <option value="oakley">Oakley</option>
              <option value="gucci">Gucci</option>
            </select>
          </div>


          {/* Price Filter */}
          <div>
            <label className="text-gray-700" htmlFor="price">Price:</label>
            <select
              className="border border-gray-300 rounded px-4 py-2 w-full"
              id="price"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="under-2000">Under ₹2000</option>
              <option value="2000-5000">₹2000 - ₹5000</option>
              <option value="5000-10000">₹5000 - ₹10000</option>
              <option value="above-10000">Above ₹10,000</option>
              <option value="low-high">Sort: Low to High</option>
              <option value="high-low">Sort: High to Low</option>
            </select>
          </div>
        </div>
      </aside>

      <div className="w-full md:w-3/4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProducts().map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
