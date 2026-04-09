import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero bg-secondary text-center" style={{ padding: '4rem 1rem', color: 'white' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Krishna Play Way School</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Where Every Child Blossoms</p>
          <button className="top-btn" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Enroll Now</button>
        </motion.div>
      </section>

      <section className="highlights container" style={{ padding: '4rem 1.5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Our Highlights</h2>
        <div className="grid flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
          {[1, 2, 3].map(i => (
            <div key={i} className="glass-panel bubbly-shape" style={{ padding: '2rem', width: '300px', textAlign: 'center' }}>
              <div className="bg-primary bubbly-shape" style={{ width: '60px', height: '60px', margin: '0 auto 1rem' }}></div>
              <h3>Highlight {i}</h3>
              <p className="text-light mt-sm">Amazing facility provided for our kids.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
