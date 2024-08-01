import React from 'react';
import './navbar.css';
import { authLink, navItems } from '../constants/data';
import { Link } from 'react-router-dom';
import ModeCtrl from './ModeCtrl';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navWrapper">
          <div className="logo">
            <div className="logoSimbol">
              <span className="logoDot"></span>
            </div>
            <span className="logoTitle">AceDot.Dev</span>
          </div>
          <ul className="navi">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="subLinks">
            {authLink.map((item, idx) => (
              <Link
                to={item.to}
                key={idx}
                className={`${
                  idx === 1 && 'bg-gradient-to-r from-indigo-600 to-indigo-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ModeCtrl />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
