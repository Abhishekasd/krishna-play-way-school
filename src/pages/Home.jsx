import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero bg-secondary text-center" style={{ padding: '6rem 1rem', color: 'var(--color-always-light)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container"
        >
          <h1 style={{ color: 'var(--color-always-light)', marginBottom: '1rem' }}>Welcome to Krishna Play Way School</h1>
          <p style={{ marginBottom: '2rem' }}>Where Every Child Blossoms</p>
          <button 
            className="top-btn" 
            style={{ padding: '1rem 2.5rem' }}
            onClick={() => navigate('/admission')}
          >
            Enroll Now
          </button>
        </motion.div>
      </section>

      <section className="highlights container" style={{ padding: '4rem 1rem' }}>
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Highlights</h2>
        <div className="responsive-grid">
          {[1, 2, 3].map(i => (
            <div key={i} className="glass-panel bubbly-shape" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div className="bg-primary bubbly-shape" style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem' }}></div>
              <h3 style={{ marginBottom: '1rem' }}>Highlight {i}</h3>
              <p className="text-light mt-sm">Amazing facility provided for our kids to ensure their holistic growth.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
