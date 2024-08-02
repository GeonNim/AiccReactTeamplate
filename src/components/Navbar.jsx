import React, { useState } from 'react';
import './navbar.css';
import { authLink, navItems } from '../constants/data';
import { Link } from 'react-router-dom';
import ModeCtrl from './ModeCtrl';
import './navbar.css';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-lg">
      <div className="container relative">
        <div className="navWrapper">
          <div className="logo">
            <div className="logoSimbol">
              <span className="logoDot"></span>
            </div>
            <span className="logoTitle lg:text-xl md:text-lg ">AceDot.Dev</span>
          </div>
          <ul className="navi hidden lg:flex">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="subLinkWrapper flex">
            <div className="subLinks hidden lg:flex">
              {authLink.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className={`${
                    idx === 1 &&
                    'bg-gradient-to-r from-indigo-600 to-indigo-900  text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="menuIcon lg:hidden ">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
            <ModeCtrl />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="subNavMobile absolute bg-white w-full top-full left-0 dark:bg-neutral-900 mt-[1px] lg:hidden transition-all">
            <ul className="navi ">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="py-4 border-b border-neutral-600 w-full text-center"
                >
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="subLinks flex py-4 gap-2 justify-center border-b border-neutral-600">
              {authLink.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className={`${
                    idx === 1 &&
                    'bg-gradient-to-r from-indigo-600 to-indigo-900  text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
