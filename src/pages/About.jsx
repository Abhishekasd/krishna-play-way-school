import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section className="bg-primary text-white" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <motion.div variants={fadeInUp}>
          <h1>About Us</h1>
          <p style={{ color: 'var(--color-always-dark)', fontWeight: 'bold' }}>Our Journey, Mission, and Vision</p>
        </motion.div>
      </section>

      <section className="container mt-lg" style={{ padding: '3rem 1rem' }}>
        <motion.div 
          className="grid flex flex-col gap-lg" 
          style={{ maxWidth: '800px', margin: '0 auto' }}
          variants={staggerContainer}
        >
          
          <motion.div 
            className="glass-panel p-md bubbly-shape" 
            style={{ padding: '2rem' }}
            variants={fadeInUp}
          >
            <h2>Director's Message</h2>
            <h4 className="text-secondary mt-sm">Mr. Bhupendra Sir</h4>
            <motion.p className="mt-md text-muted" variants={fadeInUp}>
              "Welcome to Krishna Play Way School. Our vision is to provide a nurturing and 
              challenging environment where children can learn and grow. We believe in 
              fostering a love for learning that will last a lifetime."
            </motion.p>
          </motion.div>

          <motion.div 
            className="glass-panel p-md bubbly-shape" 
            style={{ padding: '2rem' }}
            variants={fadeInUp}
          >
            <h2>Principal's Message</h2>
            <h4 className="text-tertiary mt-sm">Mrs. Usha Sharma</h4>
            <motion.p className="mt-md text-muted" variants={fadeInUp}>
              "Children are like seeds, waiting to sprout and reach for the sun. Our goal 
              is to provide the right soil, water, and sunlight through modern education 
              and play-way methods methodologies."
            </motion.p>
          </motion.div>

        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
