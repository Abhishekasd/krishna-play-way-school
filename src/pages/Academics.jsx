import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Puzzle } from 'lucide-react';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

const Academics = () => {
  return (
    <motion.div 
      className="container" 
      style={{ padding: '4rem 1.5rem' }}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-lg" style={{ marginBottom: '3rem' }} variants={fadeInUp}>
        <h1 className="text-secondary">Academics</h1>
        <p className="text-muted">Our curriculum and approach to learning</p>
      </motion.div>

      <motion.div 
        className="responsive-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="glass-panel bubbly-shape" style={{ padding: '2rem', textAlign: 'center' }} variants={itemReveal} whileHover={{ y: -10 }}>
          <BookOpen size={48} className="text-primary mb-md" style={{ margin: '0 auto 1rem' }} />
          <h3>Curriculum</h3>
          <p className="text-muted mt-sm">A blend of modern educational practices and traditional values, designed specifically for early childhood development.</p>
        </motion.div>
        
        <motion.div className="glass-panel bubbly-shape" style={{ padding: '2rem', textAlign: 'center' }} variants={itemReveal} whileHover={{ y: -10 }}>
          <Puzzle size={48} className="text-secondary mb-md" style={{ margin: '0 auto 1rem' }} />
          <h3>Play-Way Method</h3>
          <p className="text-muted mt-sm">Learning through play! We use games, activities, and interactive tools to teach core concepts organically.</p>
        </motion.div>
        
        <motion.div className="glass-panel bubbly-shape" style={{ padding: '2rem', textAlign: 'center' }} variants={itemReveal} whileHover={{ y: -10 }}>
          <Award size={48} className="text-tertiary mb-md" style={{ margin: '0 auto 1rem' }} />
          <h3>Holistic Growth</h3>
          <p className="text-muted mt-sm">Focusing on physical, cognitive, social, and emotional development to build a strong foundation for the future.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Academics;
