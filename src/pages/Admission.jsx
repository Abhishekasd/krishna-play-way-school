import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../supabase';
import { fadeInUp, staggerContainer, itemReveal, hoverLift } from '../utils/animations';

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
    <motion.div 
      className="container" 
      style={{ padding: '4rem 1.5rem' }}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-lg" style={{ marginBottom: '3rem' }} variants={fadeInUp}>
        <h1 className="text-secondary">Admissions 2026-27</h1>
        <p className="text-muted">Join the Krishna Play Way School family</p>
      </motion.div>

      <div className="responsive-grid">
        <motion.div 
          className="bg-surface bubbly-shape" 
          style={{ padding: '2rem', boxShadow: 'var(--shadow-sm)' }}
          variants={fadeInUp}
        >
          <h2 className="mb-md" style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Eligibility & Process</h2>
          <motion.ul className="flex flex-col gap-md" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { title: "Age Criteria", desc: "Toddlers: 2 - 3 Years, Pre-Nursery: 3 - 4 Years, Nursery: 4 - 5 Years." },
              { title: "Required Documents", desc: "Birth Certificate, 4 Passport Size Photos, Aadhar Card (Parents)." },
              { title: "Interview / Interaction", desc: "A mild interaction session with the child and parents to understand the child better." }
            ].map((item, index) => (
              <motion.li key={index} className="flex gap-sm items-start" variants={itemReveal}>
                <CheckCircle2 className="text-accent flex-shrink-0 mt-sm" style={{ marginTop: '0.2rem' }} />
                <div>
                  <strong>{item.title}</strong>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="glass-panel bubbly-shape" 
          style={{ padding: '2rem' }}
          variants={fadeInUp}
        >
          <h2 className="mb-md" style={{ marginBottom: '1.5rem' }}>Inquiry Form</h2>
          <AnimatePresence mode='wait'>
            {status === 'success' ? (
              <motion.div 
                key="success"
                className="bg-primary bubbly-shape text-white text-center" 
                style={{ padding: '3rem 2rem' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <CheckCircle2 size={48} style={{ margin: '0 auto 1.5rem' }} />
                <h3>Thank You!</h3>
                <p>Your inquiry has been received. We will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-md" style={{ color: 'white', textDecoration: 'underline' }}>Send another</button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                className="flex flex-col gap-md" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col gap-sm">
                  <label className="text-sm font-bold">Child's Name</label>
                  <input 
                    type="text" required
                    placeholder="Enter child's full name" 
                    value={formData.childName}
                    onChange={e => setFormData({...formData, childName: e.target.value})}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                  />
                </div>
                <div className="flex flex-col gap-sm">
                  <label className="text-sm font-bold">Parent's Name</label>
                  <input 
                    type="text" required
                    placeholder="Enter parent's full name" 
                    value={formData.parentName}
                    onChange={e => setFormData({...formData, parentName: e.target.value})}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                  />
                </div>
                <div className="flex flex-col gap-sm">
                  <label className="text-sm font-bold">Phone Number</label>
                  <input 
                    type="text" required
                    placeholder="Your contact number" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                  />
                </div>
                {status === 'error' && <p style={{ color: 'red', fontSize: '0.8rem' }}>Something went wrong. Please try again.</p>}
                <motion.button 
                  disabled={status === 'loading'} 
                  className="top-btn flex items-center justify-center gap-sm" 
                  style={{ padding: '1rem', width: '100%', marginTop: '0.5rem' }}
                  variants={hoverLift}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Submit Inquiry'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Admission;
