import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCartButton, Logo, LogoutBtn } from '../index.js';
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.auth.status);
  const adminStatus = useSelector((state) => state.adminAuth.status);
  console.log(userStatus, adminStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const guestNavItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'About', slug: '/about', active: true },
    { name: 'Login', slug: '/login', active: true },
    { name: 'Signup', slug: '/signup', active: true }
  ];

  const userNavItems = [
    { name: 'Home', slug: '/', active: userStatus },
    { name: 'Products', slug: '/products', active: userStatus },
    { name: 'Profile', slug: '/profile', active: userStatus }
  ];

  const adminNavItems = [
    { name: 'Dashboard', slug: '/admin/dashboard', active: adminStatus },
    { name: 'Manage Products', slug: '/admin/products', active: adminStatus },
    { name: 'Manage Users', slug: '/admin/users', active: adminStatus },

  ];

  const moreNavItems = [
    { name: 'About', slug: '/about', active: true },
    { name: 'FAQ', slug: '/faq', active: true },
    { name: 'Terms & Conditions', slug: '/terms', active: true },

  ];

  let navItems;
  if (userStatus) {
    navItems = userNavItems;
  } else if (adminStatus) {
    navItems = adminNavItems;
  } else {
    navItems = guestNavItems;
  }

  return (
    <header className="py-3 shadow-md bg-gray-900 text-white fixed top-0 left-0 w-full z-50 ">
      <nav className="container mx-auto mr-40 flex items-center justify-between px-4 ">
        {/* Logo */}
        <div>
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 duration-200 hover:bg-blue-500 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              )
          )}
          {/* More Dropdown */}
          <li className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="px-4 py-2 flex items-center gap-1 duration-200 hover:bg-blue-500 rounded-full"
            >
              More <ChevronDown size={16} />
            </button>
            {moreOpen && (
              <ul className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg w-48">
                {moreNavItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="block w-full text-left py-2 px-4 hover:bg-blue-500"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {userStatus && <li key="logout"><LogoutBtn /></li>}
          {userStatus && <li key="cart"><ShoppingCartButton /></li>}
          {adminStatus && <li key="logout"><LogoutBtn /></li>}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left py-2 px-4 hover:bg-blue-500 rounded-md"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {moreNavItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    navigate(item.slug);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-2 px-4 hover:bg-blue-500 rounded-md"
                >
                  {item.name}
                </button>
              </li>
            ))}
            {userStatus ||adminStatus && (
              <li key="logout">
                <LogoutBtn />
              </li>
            )}
            {userStatus ||adminStatus  && (
              <li key="cart">
                <ShoppingCartButton />
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
