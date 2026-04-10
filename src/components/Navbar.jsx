import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admission', path: '/admission' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Timetable', path: '/timetable' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar-wrapper">
      <div className="top-bar">
        <div className="container flex justify-between items-center top-bar-content">
          <div className="contact-info flex items-center gap-md">
            <span className="flex items-center gap-sm text-sm"><Phone size={14} /> +91 9876543210</span>
            <span className="flex items-center gap-sm text-sm"><Mail size={14} /> info@krishnaplaywayschool.com</span>
          </div>
          <div className="quick-links">
            <Link to="/contact" className="top-btn">Admissions Open 2026-27</Link>
          </div>
        </div>
      </div>
      
      <nav className="navbar container flex justify-between items-center">
        <Link to="/" className="brand flex items-center gap-sm">
          {/* Logo */}
          <img src="/logo.jpg" alt="Krishna Play Way School Logo" className="logo-img" style={{height: '40px'}} />
          <div className="brand-text">
            <h1 style={{fontSize: '1.2rem'}}>Krishna</h1>
            <p style={{fontSize: '0.8rem'}}>Play Way School</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu flex items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} className="text-secondary" /> : <Menu size={28} className="text-secondary" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu bg-surface top-bar-shadow">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
