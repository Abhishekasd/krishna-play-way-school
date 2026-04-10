import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-text-dark text-white">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-brand flex items-center gap-sm">
             <img src="/logo.jpg" alt="Krishna Play Way School Logo" className="logo-img" style={{height: '40px', backgroundColor: 'white', borderRadius: '50%', padding: '2px'}} />
             <div>
                <h2 style={{fontSize: '1.2rem'}}>Krishna</h2>
                <p style={{fontSize: '0.8rem'}}>Play Way School</p>
             </div>
          </div>
          <p className="footer-desc mt-sm text-light">
            A nurturing environment where little minds grow, play, and learn everyday.
          </p>
          <div className="social-links flex gap-md mt-md">
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="#" className="social-icon"><Globe size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links flex flex-col gap-sm mt-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul className="footer-links flex flex-col gap-sm mt-sm">
            <li><Link to="/announcements">Notice Board</Link></li>
            <li><Link to="/timetable">Timetable</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin">Admin Staff</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="footer-contact flex flex-col gap-sm mt-sm text-light">
            <li className="flex gap-sm">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <span>123 Play Way Street, Education City, State 12345</span>
            </li>
            <li className="flex gap-sm">
              <Phone size={18} className="text-secondary flex-shrink-0" />
              <span>+91 9876543210</span>
            </li>
            <li className="flex gap-sm">
              <Mail size={18} className="text-tertiary flex-shrink-0" />
              <span>info@krishnaplaywayschool.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center text-light mt-lg">
        <p>&copy; {new Date().getFullYear()} Krishna Play Way School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
