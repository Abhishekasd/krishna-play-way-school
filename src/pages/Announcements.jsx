import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell } from 'lucide-react';
import { supabase } from '../supabase';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

const Announcements = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error('Error fetching notices:', error);
    else setNotices(data);
    
    setLoading(false);
  };

  return (
    <motion.div 
      className="container" 
      style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-lg" style={{ marginBottom: '3rem' }} variants={fadeInUp}>
        <h1 className="text-secondary">Notice Board</h1>
        <p className="text-muted">Stay updated with the latest news and announcements.</p>
      </motion.div>

      <motion.div 
        className="flex flex-col gap-md" 
        style={{ maxWidth: '800px', margin: '0 auto' }}
        variants={staggerContainer}
      >
        {loading ? (
          <motion.p className="text-center text-muted" variants={fadeInUp}>Loading notices...</motion.p>
        ) : notices.length === 0 ? (
          <motion.p className="text-center text-muted" variants={fadeInUp}>No announcements at this time.</motion.p>
        ) : (
          notices.map((notice) => (
            <motion.div 
              key={notice.id} 
              className="glass-panel bubbly-shape flex items-center justify-between flex-wrap gap-md" 
              style={{ padding: '1.5rem', borderLeft: '5px solid var(--color-primary)' }}
              variants={itemReveal}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <div className="notice-content">
                <h3 className="text-dark" style={{ marginBottom: '0.5rem' }}>{notice.title}</h3>
                <div className="flex items-center gap-sm text-sm text-muted">
                  <Calendar size={14} /> <span>{notice.date}</span>
                  <span style={{ margin: '0 0.5rem' }}>|</span>
                  <span style={{ backgroundColor: 'var(--color-surface)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>{notice.category}</span>
                </div>
              </div>
              <div className="icon text-primary">
                <Bell size={24} />
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Announcements;
