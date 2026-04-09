import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

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
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Class Timetable</h1>
        <p className="text-light">Weekly schedule for our little stars.</p>
      </div>

      <div className="flex justify-center gap-sm mb-md flex-wrap" style={{ marginBottom: '2rem' }}>
        {classes.map(c => (
          <button 
            key={c}
            onClick={() => setSelectedClass(c)}
            className={`top-btn`}
            style={{ 
              backgroundColor: selectedClass === c ? 'var(--color-primary)' : 'var(--color-surface)',
              color: selectedClass === c ? 'var(--color-text-dark)' : 'var(--color-text-light)',
              border: '1px solid #e2e8f0',
              padding: '0.4rem 1.2rem',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="glass-panel bubbly-shape" style={{ padding: '2rem', overflowX: 'auto' }}>
        {loading ? (
          <p className="text-center text-light">Loading timetable...</p>
        ) : currentSchedule.length === 0 ? (
          <p className="text-center text-light">No timetable available for this class.</p>
        ) : (
          <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
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
                // If all days have the exact same activity and it's a break/recap, highlight it
                const isHighlight = row.monday === row.tuesday && row.tuesday === row.wednesday && row.wednesday === row.thursday && row.thursday === row.friday;
                
                return (
                  <tr key={row.id} style={{ borderBottom: '1px solid #edf2f7' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.time_slot}</td>
                    {isHighlight ? (
                      <td style={{ padding: '1rem', backgroundColor: '#fcf0ed' }} colSpan={5}>{row.monday}</td>
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
        )}
      </div>
    </div>
  );
};

export default Timetable;
