import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase';
import { fadeInUp, staggerContainer, itemReveal, hoverLift } from '../utils/animations';

const Timetable = () => {
  const [selectedClass, setSelectedClass] = useState('Pre-Nursery');
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const classes = ['Toddlers', 'Pre-Nursery', 'Nursery', 'LKG'];

  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    const { data, error } = await supabase
      .from('timetable')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true });
    
    if (error) console.error('Error fetching timetable:', error);
    else setTimetable(data);
    
    setLoading(false);
  };

  const currentSchedule = timetable.filter(t => t.class_name === selectedClass);

  return (
    <motion.div 
      className="container" 
      style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-lg" style={{ marginBottom: '3rem' }} variants={fadeInUp}>
        <h1 className="text-secondary">Class Timetable</h1>
        <p className="text-muted">Weekly schedule for our little stars.</p>
      </motion.div>

      <motion.div 
        className="flex justify-center gap-sm mb-md flex-wrap" 
        style={{ marginBottom: '2rem' }}
        variants={staggerContainer}
      >
        {classes.map(c => (
          <motion.button 
            key={c}
            onClick={() => setSelectedClass(c)}
            variants={itemReveal}
            whileHover="whileHover"
            whileTap="whileTap"
            className={`top-btn`}
            style={{ 
              backgroundColor: selectedClass === c ? 'var(--color-primary)' : 'var(--color-surface)',
              color: selectedClass === c ? 'var(--color-always-light)' : 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              padding: '0.4rem 1.2rem',
              transition: 'background-color 0.2s, color 0.2s'
            }}
          >
            {c}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="glass-panel bubbly-shape" 
        style={{ padding: '2rem', overflowX: 'auto' }}
        variants={fadeInUp}
      >
        <AnimatePresence mode='wait'>
          {loading ? (
            <motion.p 
              key="loading" 
              className="text-center text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Loading timetable...
            </motion.p>
          ) : currentSchedule.length === 0 ? (
            <motion.p 
              key="empty" 
              className="text-center text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No timetable available for this class.
            </motion.p>
          ) : (
            <motion.div
              key={selectedClass}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-always-light)' }}>
                    <th style={{ padding: '1rem', borderRadius: '10px 0 0 0' }}>Time</th>
                    <th style={{ padding: '1rem' }}>Monday</th>
                    <th style={{ padding: '1rem' }}>Tuesday</th>
                    <th style={{ padding: '1rem' }}>Wednesday</th>
                    <th style={{ padding: '1rem' }}>Thursday</th>
                    <th style={{ padding: '1rem', borderRadius: '0 10px 0 0' }}>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSchedule.map((row, i) => {
                    const isHighlight = row.monday === row.tuesday && row.tuesday === row.wednesday && row.wednesday === row.thursday && row.thursday === row.friday;
                    
                    return (
                      <tr key={row.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.time_slot}</td>
                        {isHighlight ? (
                          <td style={{ padding: '1rem', backgroundColor: 'var(--color-bg-light)', opacity: 0.8 }} colSpan={5}>{row.monday}</td>
                        ) : (
                          <>
                            <td style={{ padding: '1rem' }}>{row.monday}</td>
                            <td style={{ padding: '1rem' }}>{row.tuesday}</td>
                            <td style={{ padding: '1rem' }}>{row.wednesday}</td>
                            <td style={{ padding: '1rem' }}>{row.thursday}</td>
                            <td style={{ padding: '1rem' }}>{row.friday}</td>
                          </>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Timetable;
