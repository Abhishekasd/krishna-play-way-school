import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const whatsappUrl = "https://wa.me/916398921861?text=" + encodeURIComponent("Hello Krishna Play Way School! I'd like to inquire about admissions.");

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-brand flex items-center gap-sm">
             <img src="/logo.jpg" alt="Krishna Play Way School Logo" className="logo-img" style={{height: '60px', width: '60px', objectFit: 'cover', backgroundColor: 'white', borderRadius: '50%', padding: '2px'}} />
             <div>
                <h2 style={{fontSize: '1.3rem'}}>Krishna</h2>
                <p style={{fontSize: '0.85rem', color: '#E2E8F0'}}>Play Way School</p>
             </div>
          </div>
          <p className="footer-desc mt-sm text-light" style={{ lineHeight: '1.6' }}>
            A premier early childhood center in Aligarh where joyful play meets foundational learning. Providing safe, nurturing care for young minds.
          </p>
          <div className="social-links flex gap-md mt-md">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href="tel:+916398921861" className="social-icon" aria-label="Phone">
              <Phone size={20} />
            </a>
            <a href="mailto:info@krishnaplaywayschool.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links flex flex-col gap-sm mt-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics & Routine</Link></li>
            <li><Link to="/admission">Admissions 2026-27</Link></li>
            <li><Link to="/gallery">Campus Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul className="footer-links flex flex-col gap-sm mt-sm">
            <li><Link to="/announcements">Notice Board</Link></li>
            <li><Link to="/timetable">Class Timetable</Link></li>
            <li><Link to="/contact">Contact & Map</Link></li>
            <li><Link to="/admin">Staff / Admin</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Visit & Contact</h3>
          <ul className="footer-contact flex flex-col gap-sm mt-sm text-light">
            <li className="flex gap-sm items-start">
              <MapPin size={18} className="text-primary flex-shrink-0" style={{ marginTop: '3px' }} />
              <span>Krishna Play Way School, Aligarh, Uttar Pradesh, India</span>
            </li>
            <li className="flex gap-sm items-center">
              <Phone size={18} className="text-secondary flex-shrink-0" />
              <a href="tel:+916398921861" style={{ color: 'inherit' }}>+91 63989 21861</a>
            </li>
            <li className="flex gap-sm items-center">
              <Mail size={18} className="text-tertiary flex-shrink-0" />
              <a href="mailto:info@krishnaplaywayschool.com" style={{ color: 'inherit' }}>info@krishnaplaywayschool.com</a>
            </li>
            <li className="flex gap-sm items-center">
              <Clock size={18} className="text-accent flex-shrink-0" />
              <span>Mon - Fri: 9:00 AM - 1:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center text-light mt-lg">
        <p className="flex items-center justify-center gap-sm">
          <span>&copy; {new Date().getFullYear()} Krishna Play Way School. Crafted with</span>
          <Heart size={14} color="#FF6B6B" fill="#FF6B6B" />
          <span>for curious little minds.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

