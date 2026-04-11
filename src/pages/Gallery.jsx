import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

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
      // Filter out folders (which have no id) and the placeholder
      const files = data.filter(file => file.id && file.name !== '.emptyFolderPlaceholder');
      setImages(files);
    }
    setLoading(false);
  };

  const filtered = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.name.startsWith(`${activeCategory}_`));

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Photo Gallery</h1>
        <p className="text-light">Memories from our school activities</p>
      </div>

      <div className="flex justify-center gap-sm mb-lg flex-wrap" style={{ marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ 
              backgroundColor: activeCategory === cat ? 'var(--color-secondary)' : 'var(--color-surface)',
              color: activeCategory === cat ? 'white' : 'var(--color-text-dark)',
              border: '1px solid #e2e8f0',
              padding: '0.4rem 1.2rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-light">Loading gallery...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-light">No images available for this category.</p>
      ) : (
        <div className="responsive-grid">
          {filtered.map(img => {
            const url = supabase.storage.from('gallery').getPublicUrl(img.name).data.publicUrl;
            return (
              <div key={img.name} className="bubbly-shape" style={{ overflow: 'hidden', boxShadow: 'var(--shadow-sm)', aspectRatio: '4/3' }}>
                <img 
                  src={url} 
                  alt="School Activity" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
