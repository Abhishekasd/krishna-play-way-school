import React, { useState, useEffect } from 'react';
import { Calendar, Bell } from 'lucide-react';
import { supabase } from '../supabase';

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
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Notice Board</h1>
        <p className="text-light">Stay updated with the latest news and announcements.</p>
      </div>

      <div className="flex flex-col gap-md" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {loading ? (
          <p className="text-center text-light">Loading notices...</p>
        ) : notices.length === 0 ? (
          <p className="text-center text-light">No announcements at this time.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="glass-panel bubbly-shape flex items-center justify-between" style={{ padding: '1.5rem 2rem', borderLeft: '5px solid var(--color-primary)' }}>
              <div className="notice-content">
                <h3 className="text-dark" style={{ marginBottom: '0.5rem' }}>{notice.title}</h3>
                <div className="flex items-center gap-sm text-sm text-light">
                  <Calendar size={14} /> <span>{notice.date}</span>
                  <span style={{ margin: '0 0.5rem' }}>|</span>
                  <span style={{ backgroundColor: 'var(--color-bg-light)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>{notice.category}</span>
                </div>
              </div>
              <div className="icon text-primary">
                <Bell size={24} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Announcements;
