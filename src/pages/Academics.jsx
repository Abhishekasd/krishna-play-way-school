import React from 'react';
import { BookOpen, Award, Puzzle } from 'lucide-react';

const Academics = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Academics</h1>
        <p className="text-light">Our curriculum and approach to learning</p>
      </div>

      <div className="responsive-grid">
        <div className="glass-panel bubbly-shape" style={{ padding: '2rem', textAlign: 'center' }}>
          <BookOpen size={48} className="text-primary mb-md" style={{ margin: '0 auto 1rem' }} />
          <h3>Curriculum</h3>
          <p className="text-light mt-sm">A blend of modern educational practices and traditional values, designed specifically for early childhood development.</p>
        </div>
        
        <div className="glass-panel bubbly-shape" style={{ padding: '2rem', textAlign: 'center' }}>
          <Puzzle size={48} className="text-secondary mb-md" style={{ margin: '0 auto 1rem' }} />
          <h3>Play-Way Method</h3>
          <p className="text-light mt-sm">Learning through play! We use games, activities, and interactive tools to teach core concepts organically.</p>
        </div>
        
        <div className="glass-panel bubbly-shape" style={{ padding: '2rem', textAlign: 'center' }}>
          <Award size={48} className="text-tertiary mb-md" style={{ margin: '0 auto 1rem' }} />
          <h3>Holistic Growth</h3>
          <p className="text-light mt-sm">Focusing on physical, cognitive, social, and emotional development to build a strong foundation for the future.</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
