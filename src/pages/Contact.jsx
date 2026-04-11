import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;
    
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert([{
      type: 'Contact',
      name: formData.name,
      contact: formData.contact,
      message: formData.message
    }]);

    if (!error) {
      setStatus('success');
      setFormData({ name: '', contact: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Get in Touch</h1>
        <p className="text-light">We'd love to hear from you!</p>
      </div>

      <div className="responsive-grid">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-lg">
          <div className="glass-panel bubbly-shape flex items-center gap-md" style={{ padding: '1.5rem' }}>
            <div className="bg-primary text-always-light bubbly-shape flex items-center justify-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
              <MapPin />
            </div>
            <div>
              <h3>Our Address</h3>
              <p className="text-light text-sm mt-sm">Krishna Play Way School, Aligarh, Uttar Pradesh, India</p>
            </div>
          </div>
          
          <div className="glass-panel bubbly-shape flex items-center gap-md" style={{ padding: '1.5rem' }}>
            <div className="bg-secondary text-always-light bubbly-shape flex items-center justify-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
              <Phone />
            </div>
            <div>
              <h3>Call Us</h3>
              <p className="text-light text-sm mt-sm">+91 63989 21861</p>
            </div>
          </div>
          
          <div className="glass-panel bubbly-shape flex items-center gap-md" style={{ padding: '1.5rem' }}>
            <div className="bg-tertiary text-always-light bubbly-shape flex items-center justify-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
              <Mail />
            </div>
            <div>
              <h3>Email Us</h3>
              <p className="text-light text-sm mt-sm">info@krishnaplaywayschool.com</p>
            </div>
          </div>
        </div>

        {status === 'success' ? (
          <div className="glass-panel bubbly-shape text-center" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={48} className="text-secondary mb-md" style={{ marginBottom: '1.5rem' }} />
            <h3>Message Sent!</h3>
            <p className="text-light">Thank you for Reaching out. We'll get back to you soon.</p>
            <button onClick={() => setStatus('idle')} className="mt-md text-secondary font-bold">Send another message</button>
          </div>
        ) : (
          <div className="glass-panel bubbly-shape" style={{ padding: '2rem' }}>
            <h2 className="mb-md" style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
            <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
              <div className="form-group flex flex-col gap-sm">
                <label className="text-sm font-bold">Name</label>
                <input 
                  type="text" required
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                />
              </div>
              <div className="form-group flex flex-col gap-sm">
                <label className="text-sm font-bold">Email / Phone</label>
                <input 
                  type="text" required
                  placeholder="Your Contact Details" 
                  value={formData.contact}
                  onChange={e => setFormData({...formData, contact: e.target.value})}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} 
                />
              </div>
              <div className="form-group flex flex-col gap-sm">
                <label className="text-sm font-bold">Message</label>
                <textarea 
                  required
                  placeholder="How can we help?" 
                  rows="4" 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                ></textarea>
              </div>
              {status === 'error' && <p style={{ color: 'red', fontSize: '0.8rem' }}>Something went wrong. Please try again.</p>}
              <button disabled={status === 'loading'} className="top-btn flex items-center justify-center gap-sm mt-md" style={{ padding: '1rem', width: '100%' }}>
                {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />} 
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        )}
      </div>
        
      {/* Google Maps Section */}
      <div className="mt-lg bubbly-shape glass-panel" style={{ padding: '0.5rem', overflow: 'hidden', height: '400px', marginTop: '3rem' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.123456789!2d78.0448407!3d27.8918888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzMwLjgiTiA3OMKwMDInNDEuNCJF!5e0!3m2!1sen!2sin!4v1712717000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Krishna Play Way School Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
