import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, FileText, Calendar, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { supabase } from '../supabase';
import { fadeInUp, staggerContainer, itemReveal, hoverLift } from '../utils/animations';

const Admission = () => {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    phone: '',
    grade: 'Pre-Nursery',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.childName || !formData.parentName || !formData.phone) return;
    
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert([{
      type: 'Admission Inquiry',
      name: formData.childName,
      parent_name: formData.parentName,
      contact: `${formData.phone} | Grade: ${formData.grade} | Msg: ${formData.message || 'None'}`
    }]);

    if (!error) {
      setStatus('success');
      setFormData({ childName: '', parentName: '', phone: '', grade: 'Pre-Nursery', message: '' });
      setTimeout(() => setStatus('idle'), 7000);
    } else {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      className="admission-page" 
      initial="hidden"
      animate="visible"
      style={{ paddingBottom: '5rem' }}
    >
      {/* Header */}
      <section className="bg-primary text-white" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <motion.div variants={fadeInUp}>
          <span style={{ 
            display: 'inline-block', 
            padding: '0.3rem 1rem', 
            background: 'rgba(0,0,0,0.1)', 
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            color: 'var(--color-always-dark)',
            marginBottom: '0.8rem'
          }}>
            Academic Session 2026-27
          </span>
          <h1 style={{ color: 'var(--color-always-dark)', marginBottom: '0.5rem' }}>Admissions Now Open</h1>
          <p style={{ color: 'var(--color-always-dark)', fontWeight: '600', maxWidth: '650px', margin: '0 auto' }}>
            Take the first step toward a cheerful, confident future for your child. Limited seats available for personalized care.
          </p>
        </motion.div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="responsive-grid" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Eligibility, Documents & Guidelines */}
          <motion.div 
            className="flex flex-col gap-lg"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Age Criteria */}
            <motion.div 
              className="glass-panel bubbly-shape" 
              style={{ padding: '2rem' }}
              variants={itemReveal}
            >
              <h3 style={{ marginBottom: '1.2rem', color: 'var(--color-secondary)' }}>Age Eligibility Guide</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  { grade: "Playgroup / Toddlers", age: "1.5 to 2.5 Years" },
                  { grade: "Pre-Nursery", age: "2.5 to 3.5 Years" },
                  { grade: "Nursery", age: "3.5 to 4.5 Years" },
                  { grade: "Kindergarten / LKG", age: "4.5 to 5.5 Years" }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '0.75rem 1rem', 
                    background: 'var(--color-background)', 
                    borderRadius: '10px',
                    border: '1px solid var(--color-border)'
                  }}>
                    <strong style={{ fontSize: '0.95rem' }}>{item.grade}</strong>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      background: 'rgba(75, 163, 227, 0.15)', 
                      color: 'var(--color-secondary)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      fontWeight: '700'
                    }}>
                      {item.age}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Required Documents */}
            <motion.div 
              className="glass-panel bubbly-shape" 
              style={{ padding: '2rem' }}
              variants={itemReveal}
            >
              <h3 style={{ marginBottom: '1.2rem', color: 'var(--color-primary)' }}>Documents Required</h3>
              <ul className="flex flex-col gap-sm">
                {[
                  "Child's Birth Certificate (Self-attested photocopy)",
                  "4 Recent Passport-size Photographs of the child",
                  "1 Family Photograph (Child with Parents)",
                  "Photocopy of Parent's Aadhar Card / Address Proof",
                  "Immunization / Medical Record photocopy"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-sm">
                    <CheckCircle2 size={18} color="var(--color-accent)" className="flex-shrink-0" />
                    <span className="text-muted" style={{ fontSize: '0.9rem' }}>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Contact Box */}
            <motion.div 
              className="glass-panel bubbly-shape" 
              style={{ padding: '1.8rem', background: 'rgba(255, 179, 71, 0.1)', border: '1px solid var(--color-primary)' }}
              variants={itemReveal}
            >
              <h4 style={{ color: 'var(--color-primary-hover)', marginBottom: '0.5rem' }}>Need Direct Assistance?</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Call our admission counselor or visit the school office between 9:00 AM - 1:00 PM.
              </p>
              <a 
                href="tel:+916398921861"
                className="top-btn flex items-center justify-center gap-sm text-always-light"
                style={{ backgroundColor: 'var(--color-primary)', width: '100%', padding: '0.75rem', borderRadius: '8px' }}
              >
                <Phone size={18} />
                <span>Call Admissions: +91 63989 21861</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Admission Inquiry Form */}
          <motion.div 
            className="glass-panel bubbly-shape" 
            style={{ padding: '2.5rem' }}
            variants={fadeInUp}
          >
            <h2 className="mb-md" style={{ marginBottom: '0.5rem' }}>Online Admission Inquiry</h2>
            <p className="text-muted" style={{ fontSize: '0.92rem', marginBottom: '1.8rem' }}>
              Fill this form and our admission team will get in touch with you within 24 hours.
            </p>

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
                  <CheckCircle2 size={54} style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Inquiry Submitted!</h3>
                  <p style={{ lineHeight: '1.6' }}>Thank you for expressing interest in Krishna Play Way School. Our team will contact you shortly to schedule a campus interaction.</p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="mt-md" 
                    style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}
                  >
                    Submit another inquiry
                  </button>
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
                    <label className="text-sm font-bold">Child's Full Name *</label>
                    <input 
                      type="text" required
                      placeholder="e.g. Aarav Sharma" 
                      value={formData.childName}
                      onChange={e => setFormData({...formData, childName: e.target.value})}
                      style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-main)' }} 
                    />
                  </div>

                  <div className="flex flex-col gap-sm">
                    <label className="text-sm font-bold">Parent / Guardian's Name *</label>
                    <input 
                      type="text" required
                      placeholder="e.g. Rajesh Sharma" 
                      value={formData.parentName}
                      onChange={e => setFormData({...formData, parentName: e.target.value})}
                      style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-main)' }} 
                    />
                  </div>

                  <div className="flex flex-col gap-sm">
                    <label className="text-sm font-bold">WhatsApp / Contact Phone *</label>
                    <input 
                      type="tel" required
                      placeholder="e.g. 9876543210" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-main)' }} 
                    />
                  </div>

                  <div className="flex flex-col gap-sm">
                    <label className="text-sm font-bold">Class Applying For</label>
                    <select
                      value={formData.grade}
                      onChange={e => setFormData({...formData, grade: e.target.value})}
                      style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-main)', cursor: 'pointer' }}
                    >
                      <option value="Playgroup / Toddlers">Playgroup / Toddlers (1.5 - 2.5 Years)</option>
                      <option value="Pre-Nursery">Pre-Nursery (2.5 - 3.5 Years)</option>
                      <option value="Nursery">Nursery (3.5 - 4.5 Years)</option>
                      <option value="Kindergarten / LKG">Kindergarten / LKG (4.5 - 5.5 Years)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-sm">
                    <label className="text-sm font-bold">Any Message or Query (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Want information regarding school transport, timings, etc."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-main)', resize: 'vertical' }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: 'red', fontSize: '0.85rem' }}>
                      Unable to submit inquiry. Please try calling directly at +91 63989 21861.
                    </p>
                  )}

                  <motion.button 
                    disabled={status === 'loading'} 
                    className="top-btn flex items-center justify-center gap-sm" 
                    style={{ padding: '1rem', width: '100%', marginTop: '0.5rem', backgroundColor: 'var(--color-secondary)' }}
                    variants={hoverLift}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Submit Admission Inquiry'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Admission;
