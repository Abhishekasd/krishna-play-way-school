import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';
import Hero from '../components/Hero';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="home-page"
      initial="hidden"
      animate="visible"
    >
      <Hero />

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
