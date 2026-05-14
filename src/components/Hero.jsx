import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const images = Array.from({ length: 60 }, (_, i) => 
  `/krishna play way school/krishna play way school video_${String(i).padStart(3, '0')}.jpg`
);

const Hero = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax Effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Robust preloading
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      const promises = images.slice(0, 15).map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            if (loadedCount === 5) setIsLoaded(true);
            resolve();
          };
        });
      });
      await Promise.all(promises);
      // Continue loading rest in background
      images.slice(15).forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500); // Increased speed for a more dynamic "video" feel
    return () => clearInterval(timer);
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="hero-loader">
        <motion.div 
          className="loader-bar"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>Experience Loading...</span>
      </div>
    );
  }

  return (
    <section className="hero-container" onMouseMove={handleMouseMove}>
      {/* Cinematic Background Layer */}
      <div className="hero-bg">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: index % 2 === 0 ? 1.02 : 1.1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hero-slide"
            style={{ 
              backgroundImage: `url('${images[index]}')`,
              filter: 'brightness(0.85) contrast(1.1)'
            }}
          />
        </AnimatePresence>
        
        {/* Cinematic Overlays */}
        <div className="hero-overlay" />
        <div className="hero-grain" />
        <div className="hero-light-leak" />
        <div className="hero-vignette" />
      </div>

      {/* Content Area with Mouse Parallax */}
      <motion.div 
        className="hero-content-wrapper"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <motion.div 
          className="hero-glass-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Admissions Open 2026-27
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Where Every <span className="text-highlight">Child Blossoms</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A nurturing environment where curiosity meets creativity. Join our family and give your child the best start in life.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              className="btn-primary-hero"
              onClick={() => navigate('/admission')}
            >
              Enroll Now
            </button>
            <button 
              className="btn-secondary-hero"
              onClick={() => navigate('/about')}
            >
              Explore More
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hidden Buffer for flawless transitions */}
      <div style={{ display: 'none' }}>
        <img src={images[(index + 1) % images.length]} alt="next-frame" />
      </div>
    </section>
  );
};

export default Hero;
