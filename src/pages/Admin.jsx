import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Admin = () => {
  const [session, setSession] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Notices State
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState('');
  const [newCategory, setNewCategory] = useState('General');

  // Gallery State
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [imageCategory, setImageCategory] = useState('All');

  // Timetable State
  const [timetable, setTimetable] = useState([]);
  const [ttClass, setTtClass] = useState('Pre-Nursery');
  const [ttTimeSlot, setTtTimeSlot] = useState('');
  const [ttMonday, setTtMonday] = useState('');
  const [ttTuesday, setTtTuesday] = useState('');
  const [ttWednesday, setTtWednesday] = useState('');
  const [ttThursday, setTtThursday] = useState('');
  const [ttFriday, setTtFriday] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      if (activeTab === 'notices') fetchNotices();
      if (activeTab === 'gallery') fetchImages();
      if (activeTab === 'timetable') fetchTimetable();
    }
  }, [session, activeTab]);

  // --- Auth Handlers ---
  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthError('');
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAuthError(error.message);
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setAuthError(error.message);
      else setAuthError('Signup successful! Check email if confirmation required, or just login.');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // --- Notice Handlers ---
  const fetchNotices = async () => {
    const { data } = await supabase.from('notices').select('*').order('created_at', { ascending: false });
    if (data) setNotices(data);
  };

  const handleAddNotice = async (e) => {
    e.preventDefault();
    if (!newNotice.trim()) return;

    const { data, error } = await supabase.from('notices').insert([{ 
      title: newNotice, 
      date: new Date().toISOString().split('T')[0],
      category: newCategory
    }]).select();

    if (!error && data) {
      setNotices([data[0], ...notices]);
      setNewNotice('');
    }
  };

  const handleDeleteNotice = async (id) => {
    const { error } = await supabase.from('notices').delete().eq('id', id);
    if (!error) {
      setNotices(notices.filter(n => n.id !== id));
    }
  };

  // --- Gallery Handlers ---
  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from('gallery').list('');
    if (data) {
      const files = data.filter(file => file.name !== '.emptyFolderPlaceholder');
      setImages(files);
    }
  };

  const handleUploadImage = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${imageCategory}/${fileName}`; 

    const { error } = await supabase.storage.from('gallery').upload(filePath, file);
    if (!error) {
      fetchImages();
    } else {
      alert('Error uploading image!');
    }
    setUploading(false);
  };

  const handleDeleteImage = async (name) => {
    const { error } = await supabase.storage.from('gallery').remove([name]);
    if (!error) {
      fetchImages();
    }
  };

  // --- Timetable Handlers ---
  const fetchTimetable = async () => {
    const { data } = await supabase.from('timetable').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: true });
    if (data) setTimetable(data);
  };

  const handleAddTimetableRow = async (e) => {
    e.preventDefault();
    if (!ttTimeSlot.trim()) return;

    const { data, error } = await supabase.from('timetable').insert([{ 
      class_name: ttClass,
      time_slot: ttTimeSlot,
      monday: ttMonday,
      tuesday: ttTuesday,
      wednesday: ttWednesday,
      thursday: ttThursday,
      friday: ttFriday
    }]).select();

    if (!error && data) {
      setTimetable([...timetable, data[0]]);
      setTtTimeSlot('');
      setTtMonday('');
      setTtTuesday('');
      setTtWednesday('');
      setTtThursday('');
      setTtFriday('');
    }
  };

  const handleDeleteTimetableRow = async (id) => {
    const { error } = await supabase.from('timetable').delete().eq('id', id);
    if (!error) {
      setTimetable(timetable.filter(t => t.id !== id));
    }
  };

  if (!session) {
    return (
      <div className="container flex justify-center items-center" style={{ minHeight: '60vh', padding: '4rem 1.5rem' }}>
        <div className="glass-panel bubbly-shape" style={{ padding: '2.5rem', width: '100%', maxWidth: '400px', backgroundColor: 'var(--color-surface)' }}>
          <h2 className="text-center text-secondary mb-md">{isLogin ? 'Admin Login' : 'Admin Signup'}</h2>
          {authError && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{authError}</div>}
          <form className="flex flex-col gap-md" onSubmit={handleAuth}>
            <div className="flex flex-col gap-sm">
              <label>Email</label>
              <input 
                type="email" required
                value={email} onChange={e => setEmail(e.target.value)}
                style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} 
              />
            </div>
            <div className="flex flex-col gap-sm">
              <label>Password</label>
              <input 
                type="password" required minLength="6"
                value={password} onChange={e => setPassword(e.target.value)}
                style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} 
              />
            </div>
            <button className="top-btn" style={{ padding: '1rem', marginTop: '1rem' }}>
              {isLogin ? 'Login to Admin' : 'Create Account'}
            </button>
          </form>
          <div className="text-center mt-md">
            <button onClick={() => setIsLogin(!isLogin)} style={{ color: 'var(--color-secondary)' }}>
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container admin-layout" style={{ padding: '2rem 1rem', minHeight: '60vh' }}>
      
      {/* Sidebar */}
      <div className="admin-sidebar glass-panel bubbly-shape" style={{ padding: '1.5rem', height: 'fit-content' }}>
        <h3 className="mb-md text-primary">Admin Panel</h3>
        <ul className="flex flex-col gap-sm">
          <li>
            <button 
              onClick={() => setActiveTab('dashboard')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem', borderRadius: '8px', backgroundColor: activeTab === 'dashboard' ? 'var(--color-secondary)' : 'transparent', color: activeTab === 'dashboard' ? 'white' : 'var(--color-text-dark)' }}
            >Dashboard</button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('notices')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem', borderRadius: '8px', backgroundColor: activeTab === 'notices' ? 'var(--color-secondary)' : 'transparent', color: activeTab === 'notices' ? 'white' : 'var(--color-text-dark)' }}
            >Manage Notices</button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('timetable')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem', borderRadius: '8px', backgroundColor: activeTab === 'timetable' ? 'var(--color-secondary)' : 'transparent', color: activeTab === 'timetable' ? 'white' : 'var(--color-text-dark)' }}
            >Manage Timetable</button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gallery')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem', borderRadius: '8px', backgroundColor: activeTab === 'gallery' ? 'var(--color-secondary)' : 'transparent', color: activeTab === 'gallery' ? 'white' : 'var(--color-text-dark)' }}
            >Manage Gallery</button>
          </li>
          <li>
            <button 
              onClick={handleLogout}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem', borderRadius: '8px', color: 'red', marginTop: '1rem' }}
            >Logout</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-content" style={{ flex: 1 }}>
        <div className="glass-panel bubbly-shape" style={{ padding: '2rem', height: '100%' }}>
          
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="mb-md">Welcome, Admin</h2>
              <p className="text-light">Connected to Supabase Backend. You can now manage real site content.</p>
              <p className="text-light mt-sm">Currently logged in as: {session.user.email}</p>
            </div>
          )}

          {activeTab === 'notices' && (
            <div>
              <h2 className="mb-md">Manage Notices</h2>
              <form className="flex gap-md mb-lg flex-wrap" onSubmit={handleAddNotice}>
                <input 
                  type="text" 
                  placeholder="New notice title..." 
                  value={newNotice} 
                  onChange={e => setNewNotice(e.target.value)}
                  style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', minWidth: '200px' }} 
                  required
                />
                <select 
                  value={newCategory} 
                  onChange={e => setNewCategory(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                >
                  <option>General</option>
                  <option>Events</option>
                  <option>Academic</option>
                  <option>Holiday</option>
                </select>
                <button type="submit" className="top-btn" style={{ padding: '0.8rem 1.5rem' }}>Add Notice</button>
              </form>

              <div className="flex flex-col gap-sm">
                {notices.map(notice => (
                  <div key={notice.id} className="flex justify-between items-center bg-surface" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                    <div>
                      <strong>{notice.title}</strong>
                      <div className="text-sm text-light">{notice.date} - {notice.category}</div>
                    </div>
                    <button 
                      onClick={() => handleDeleteNotice(notice.id)}
                      style={{ color: 'red', fontWeight: 'bold', fontSize: '0.9rem' }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {notices.length === 0 && <p className="text-light text-center py-md">No notices found.</p>}
              </div>
            </div>
          )}

          {activeTab === 'timetable' && (
            <div>
              <h2 className="mb-md">Manage Timetable</h2>
              <form className="flex gap-sm mb-lg flex-wrap items-end" onSubmit={handleAddTimetableRow} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div className="flex flex-col gap-sm">
                  <label className="text-sm font-bold">Class</label>
                  <select value={ttClass} onChange={e=>setTtClass(e.target.value)} style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <option>Toddlers</option>
                    <option>Pre-Nursery</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                  </select>
                </div>
                <div className="flex flex-col gap-sm" style={{flex: 1, minWidth: '100px'}}>
                  <label className="text-sm font-bold">Time Slot</label>
                  <input type="text" placeholder="e.g. 09:00 - 09:30" value={ttTimeSlot} onChange={e=>setTtTimeSlot(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </div>
                <div className="flex flex-col gap-sm" style={{flex: 1, minWidth: '100px'}}>
                  <label className="text-sm font-bold">Mon</label>
                  <input type="text" value={ttMonday} onChange={e=>setTtMonday(e.target.value)} style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </div>
                <div className="flex flex-col gap-sm" style={{flex: 1, minWidth: '100px'}}>
                  <label className="text-sm font-bold">Tue</label>
                  <input type="text" value={ttTuesday} onChange={e=>setTtTuesday(e.target.value)} style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </div>
                <div className="flex flex-col gap-sm" style={{flex: 1, minWidth: '100px'}}>
                  <label className="text-sm font-bold">Wed</label>
                  <input type="text" value={ttWednesday} onChange={e=>setTtWednesday(e.target.value)} style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </div>
                <div className="flex flex-col gap-sm" style={{flex: 1, minWidth: '100px'}}>
                  <label className="text-sm font-bold">Thu</label>
                  <input type="text" value={ttThursday} onChange={e=>setTtThursday(e.target.value)} style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </div>
                <div className="flex flex-col gap-sm" style={{flex: 1, minWidth: '100px'}}>
                  <label className="text-sm font-bold">Fri</label>
                  <input type="text" value={ttFriday} onChange={e=>setTtFriday(e.target.value)} style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </div>
                <button type="submit" className="top-btn" style={{ padding: '0.6rem 1.2rem', height: '42px' }}>Add</button>
              </form>

              <div className="flex flex-col gap-sm" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: 'var(--color-surface)', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e2e8f0', backgroundColor: '#f7fafc' }}>
                      <th style={{ padding: '0.8rem' }}>Class</th>
                      <th style={{ padding: '0.8rem' }}>Time</th>
                      <th style={{ padding: '0.8rem' }}>Mon</th>
                      <th style={{ padding: '0.8rem' }}>Tue</th>
                      <th style={{ padding: '0.8rem' }}>Wed</th>
                      <th style={{ padding: '0.8rem' }}>Thu</th>
                      <th style={{ padding: '0.8rem' }}>Fri</th>
                      <th style={{ padding: '0.8rem' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.map(row => (
                      <tr key={row.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '0.8rem' }}>{row.class_name}</td>
                        <td style={{ padding: '0.8rem', fontWeight: 'bold' }}>{row.time_slot}</td>
                        <td style={{ padding: '0.8rem' }}>{row.monday}</td>
                        <td style={{ padding: '0.8rem' }}>{row.tuesday}</td>
                        <td style={{ padding: '0.8rem' }}>{row.wednesday}</td>
                        <td style={{ padding: '0.8rem' }}>{row.thursday}</td>
                        <td style={{ padding: '0.8rem' }}>{row.friday}</td>
                        <td style={{ padding: '0.8rem' }}>
                          <button onClick={() => handleDeleteTimetableRow(row.id)} style={{ color: 'red', fontWeight: 'bold' }}>Del</button>
                        </td>
                      </tr>
                    ))}
                    {timetable.length === 0 && (
                      <tr><td colSpan="8" style={{ padding: '1rem', color: '#718096' }}>No timetable data found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h2 className="mb-md">Manage Gallery</h2>
              
              <div className="flex gap-md mb-lg items-center p-md bg-surface bubbly-shape" style={{ padding: '1.5rem', border: '1px dashed #cbd5e0' }}>
                <select 
                  value={imageCategory} 
                  onChange={e => setImageCategory(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                >
                  <option>All</option>
                  <option>Events</option>
                  <option>Classrooms</option>
                  <option>Playground</option>
                </select>
                <label className="top-btn" style={{ cursor: 'pointer', padding: '0.8rem 1.5rem', textAlign: 'center' }}>
                  {uploading ? 'Uploading...' : 'Upload Image'}
                  <input type="file" accept="image/*" onChange={handleUploadImage} disabled={uploading} style={{ display: 'none' }} />
                </label>
              </div>

              <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                {images.map(img => (
                  <div key={img.name} className="bubbly-shape bg-surface" style={{ overflow: 'hidden', border: '1px solid #e2e8f0', position: 'relative' }}>
                    <div style={{ height: '120px', width: '100%', backgroundColor: '#f7fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <img 
                          src={`${supabase.storage.from('gallery').getPublicUrl(img.name).data.publicUrl}`} 
                          alt="gallery" 
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                        />
                    </div>
                    <div className="flex justify-between items-center p-sm" style={{ padding: '0.5rem', fontSize: '0.8rem' }}>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80px' }}>{img.name.split('/').pop()}</span>
                      <button onClick={() => handleDeleteImage(img.name)} style={{ color: 'red' }}>🗑</button>
                    </div>
                  </div>
                ))}
                {images.length === 0 && <p className="text-light" style={{ gridColumn: '1 / -1' }}>No images uploaded yet.</p>}
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default Admin;
