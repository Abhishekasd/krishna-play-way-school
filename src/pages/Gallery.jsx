import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase';
import { fadeInUp, staggerContainer, itemReveal, hoverLift } from '../utils/animations';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Events', 'Classrooms', 'Playground'];

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data } = await supabase.storage.from('gallery').list('');
    if (data) {
      const files = data.filter(file => file.id && file.name !== '.emptyFolderPlaceholder');
      setImages(files);
    }
    setLoading(false);
  };

  const filtered = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.name.startsWith(`${activeCategory}_`));

  return (
    <motion.div 
      className="container" 
      style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-lg" style={{ marginBottom: '3rem' }} variants={fadeInUp}>
        <h1 className="text-secondary">Photo Gallery</h1>
        <p className="text-muted">Memories from our school activities</p>
      </motion.div>

      <motion.div 
        className="flex justify-center gap-sm mb-lg flex-wrap" 
        style={{ marginBottom: '2rem' }}
        variants={staggerContainer}
      >
        {categories.map(cat => (
          <motion.button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            variants={hoverLift}
            whileHover="whileHover"
            whileTap="whileTap"
            style={{ 
              backgroundColor: activeCategory === cat ? 'var(--color-secondary)' : 'var(--color-surface)',
              color: activeCategory === cat ? 'var(--color-always-light)' : 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              padding: '0.4rem 1.2rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              transition: 'background-color 0.2s, color 0.2s'
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {loading ? (
        <motion.p className="text-center text-muted" variants={fadeInUp}>Loading gallery...</motion.p>
      ) : (
        <motion.div 
          className="responsive-grid"
          variants={staggerContainer}
          layout
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map(img => {
              const url = supabase.storage.from('gallery').getPublicUrl(img.name).data.publicUrl;
              return (
                <motion.div 
                  key={img.name} 
                  className="bubbly-shape" 
                  layout
                  variants={itemReveal}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{ overflow: 'hidden', boxShadow: 'var(--shadow-sm)', aspectRatio: '4/3' }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <img 
                    src={url} 
                    alt="School Activity" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.p className="text-center text-muted" style={{ gridColumn: '1/-1' }} variants={fadeInUp}>
              No images available for this category.
            </motion.p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;
