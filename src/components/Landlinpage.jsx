import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.jpg"

const LandingPage = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Optical Shop
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Find the best glasses and lenses for your needs.
        </p>
        <img
          alt="A display of various eyeglasses and lenses in a modern optical shop"
          className="mx-auto mb-8 rounded-lg shadow-lg"
          src={HeroImage}
        />
        <div>
          <Link
            to="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300 mr-4"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">High-Quality Lenses</h3>
          <p className="text-gray-600">
            We provide premium quality lenses for clear vision and comfort.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">Latest Eyewear Trends</h3>
          <p className="text-gray-600">
            Browse through our latest collection of stylish eyeglasses.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
          <p className="text-gray-600">
            Get expert advice to find the perfect eyewear for you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
