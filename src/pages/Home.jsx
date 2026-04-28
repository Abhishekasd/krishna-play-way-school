import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer, itemReveal, hoverLift } from '../utils/animations';

const images = Array.from({ length: 60 }, (_, i) => 
  `/krishna play way school/krishna play way school video_${String(i).padStart(3, '0')}.jpg`
);

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="home-page"
      initial="hidden"
      animate="visible"
    >
      <motion.section 
        className="hero bg-secondary text-center" 
        style={{ 
          padding: 0, 
          minHeight: '80vh',
          position: 'relative',
          overflow: 'hidden'
        }}
        variants={fadeInUp}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentImage ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
        </div>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem'
        }}>
          <motion.h1 
            style={{ color: 'var(--color-always-light)', marginBottom: '1rem', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            variants={fadeInUp}
          >
            Welcome to Krishna Play Way School
          </motion.h1>
          <motion.p 
            style={{ marginBottom: '2rem', fontSize: '1.25rem' }}
            variants={fadeInUp}
          >
            Where Every Child Blossoms
          </motion.p>
          <motion.button 
            className="top-btn" 
            style={{ padding: '1rem 2.5rem' }}
            onClick={() => navigate('/admission')}
            variants={hoverLift}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Enroll Now
          </motion.button>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem'
        }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentImage ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            />
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="highlights container" 
        style={{ padding: '4rem 1rem' }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-center" 
          style={{ marginBottom: '3rem' }}
          variants={fadeInUp}
        >
          Our Highlights
        </motion.h2>
        <div className="responsive-grid">
          {[
            { id: 1, title: "Modern Learning", desc: "Interactive teaching methodologies tailored for little minds." },
            { id: 2, title: "Safe Environment", desc: "A secure and nurturing space for every child to explore." },
            { id: 3, title: "Expert Care", desc: "Highly trained educators dedicated to holistic growth." }
          ].map(item => (
            <motion.div 
              key={item.id} 
              className="glass-panel bubbly-shape" 
              style={{ padding: '2.5rem', textAlign: 'center' }}
              variants={itemReveal}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary bubbly-shape" style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem' }}></div>
              <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
              <p className="text-muted mt-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
