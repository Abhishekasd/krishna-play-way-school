import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../supabase';

const Admission = () => {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    phone: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.childName || !formData.parentName || !formData.phone) return;
    
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert([{
      type: 'Inquiry',
      name: formData.childName,
      parent_name: formData.parentName,
      contact: formData.phone
    }]);

    if (!error) {
      setStatus('success');
      setFormData({ childName: '', parentName: '', phone: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Admissions 2026-27</h1>
        <p className="text-light">Join the Krishna Play Way School family</p>
      </div>

      <div className="responsive-grid">
        <div className="bg-surface bubbly-shape" style={{ padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <h2 className="mb-md" style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Eligibility & Process</h2>
          <ul className="flex flex-col gap-md">
            <li className="flex gap-sm items-start">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-sm" style={{ marginTop: '0.2rem' }} />
              <div>
                <strong>Age Criteria</strong>
                <p className="text-light text-sm">Toddlers: 2 - 3 Years, Pre-Nursery: 3 - 4 Years, Nursery: 4 - 5 Years.</p>
              </div>
            </li>
            <li className="flex gap-sm items-start">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-sm" style={{ marginTop: '0.2rem' }} />
              <div>
                <strong>Required Documents</strong>
                <p className="text-light text-sm">Birth Certificate, 4 Passport Size Photos, Aadhar Card (Parents).</p>
              </div>
            </li>
            <li className="flex gap-sm items-start">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-sm" style={{ marginTop: '0.2rem' }} />
              <div>
                <strong>Interview / interaction</strong>
                <p className="text-light text-sm">A mild interaction session with the child and parents to understand the child better.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="glass-panel bubbly-shape" style={{ padding: '2rem' }}>
          <h2 className="mb-md" style={{ marginBottom: '1.5rem' }}>Inquiry Form</h2>
          {status === 'success' ? (
            <div className="bg-primary bubbly-shape text-white text-center" style={{ padding: '3rem 2rem' }}>
              <CheckCircle2 size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Thank You!</h3>
              <p>Your inquiry has been received. We will contact you shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-md" style={{ color: 'white', textDecoration: 'underline' }}>Send another</button>
            </div>
          ) : (
            <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-sm">
                <label className="text-sm font-bold">Child's Name</label>
                <input 
                  type="text" required
                  placeholder="Enter child's full name" 
                  value={formData.childName}
                  onChange={e => setFormData({...formData, childName: e.target.value})}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                />
              </div>
              <div className="flex flex-col gap-sm">
                <label className="text-sm font-bold">Parent's Name</label>
                <input 
                  type="text" required
                  placeholder="Enter parent's full name" 
                  value={formData.parentName}
                  onChange={e => setFormData({...formData, parentName: e.target.value})}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                />
              </div>
              <div className="flex flex-col gap-sm">
                <label className="text-sm font-bold">Phone Number</label>
                <input 
                  type="text" required
                  placeholder="Your contact number" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                />
              </div>
              {status === 'error' && <p style={{ color: 'red', fontSize: '0.8rem' }}>Something went wrong. Please try again.</p>}
              <button disabled={status === 'loading'} className="top-btn flex items-center justify-center gap-sm" style={{ padding: '1rem', width: '100%', marginTop: '0.5rem' }}>
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admission;
