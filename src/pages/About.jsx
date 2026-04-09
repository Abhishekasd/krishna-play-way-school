import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <section className="bg-primary text-white" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1>About Us</h1>
          <p className="text-dark" style={{color: 'var(--color-text-dark)', fontWeight: 'bold' }}>Our Journey, Mission, and Vision</p>
        </motion.div>
      </section>

      <section className="container mt-lg" style={{ padding: '3rem 1.5rem' }}>
        <div className="grid flex flex-col gap-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="glass-panel p-md bubbly-shape" style={{ padding: '2rem' }}>
            <h2>Director's Message</h2>
            <h4 className="text-secondary mt-sm">Mr. Bhupendra Sir</h4>
            <p className="mt-md text-light">
              "Welcome to Krishna Play Way School. Our vision is to provide a nurturing and 
              challenging environment where children can learn and grow. We believe in 
              fostering a love for learning that will last a lifetime."
            </p>
          </div>

          <div className="glass-panel p-md bubbly-shape" style={{ padding: '2rem' }}>
            <h2>Principal's Message</h2>
            <h4 className="text-tertiary mt-sm">Mrs. Usha Sharma</h4>
            <p className="mt-md text-light">
              "Children are like seeds, waiting to sprout and reach for the sun. Our goal 
              is to provide the right soil, water, and sunlight through modern education 
              and play-way methods methodologies."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
