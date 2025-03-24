import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/productService.js";
import { ProductCard,LandingPage } from "../components/index.js";



const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>

      <div className="mx-10 my-10 ">
        <LandingPage/>
        <h1 className="text-2xl font-bold my-8">Our Products</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {posts.length > 0 ? (
            posts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-600">Loading products...</p>
          )}
        </div>
      </div>
    </>


  );
};

export default Home;
