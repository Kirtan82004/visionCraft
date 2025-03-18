import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, ShoppingCartButton } from '../index.js';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Optical Shop</h2>
          <p className="text-gray-400 mt-2">Best quality eyewear for your vision.</p>
          <Logo />
        </div>

        {/* Column 2 - Quick Links */}
        <div >
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="flex space-x-4">
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
          </ul>
          <ul className="mt-2 space-y-2">
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-gray-400">Terms & Conditions</Link></li>
          </ul>
          </div>
      
        </div>

        {/* Column 3 - Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">Email: support@opticalshop.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Optical Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
