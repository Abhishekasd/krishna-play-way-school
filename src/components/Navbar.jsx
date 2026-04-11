import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
            <span className="flex items-center gap-sm text-sm"><Phone size={14} /> +91 63989 21861</span>
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
          <img src="/logo.jpg" alt="Krishna Play Way School Logo" className="logo-img" />
          <div className="brand-text">
            <h1>Krishna</h1>
            <p>Play Way School</p>
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

        {/* Actions (Theme Toggle + Mobile Menu) */}
        <div className="flex items-center gap-md">
          <button 
            className="theme-toggle bubbly-shape flex items-center justify-center" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} className="text-secondary" /> : <Sun size={20} className="text-primary" />}
          </button>

          <button className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={28} className="text-secondary" /> : <Menu size={28} className="text-secondary" />}
          </button>
        </div>
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
