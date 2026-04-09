import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
        <h1 className="text-secondary">Get in Touch</h1>
        <p className="text-light">We'd love to hear from you!</p>
      </div>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        {/* Contact Info */}
        <div className="flex flex-col gap-lg">
          <div className="glass-panel bubbly-shape flex items-center gap-md" style={{ padding: '1.5rem' }}>
            <div className="bg-primary text-white bubbly-shape flex items-center justify-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
              <MapPin />
            </div>
            <div>
              <h3>Our Address</h3>
              <p className="text-light text-sm mt-sm">123 Play Way Street, Education City, State 12345</p>
            </div>
          </div>
          
          <div className="glass-panel bubbly-shape flex items-center gap-md" style={{ padding: '1.5rem' }}>
            <div className="bg-secondary text-white bubbly-shape flex items-center justify-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
              <Phone />
            </div>
            <div>
              <h3>Call Us</h3>
              <p className="text-light text-sm mt-sm">+91 9876543210</p>
            </div>
          </div>
          
          <div className="glass-panel bubbly-shape flex items-center gap-md" style={{ padding: '1.5rem' }}>
            <div className="bg-tertiary text-white bubbly-shape flex items-center justify-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
              <Mail />
            </div>
            <div>
              <h3>Email Us</h3>
              <p className="text-light text-sm mt-sm">info@krishnaplaywayschool.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel bubbly-shape" style={{ padding: '2rem' }}>
          <h2 className="mb-md" style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
          <form className="flex flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group flex flex-col gap-sm">
              <label>Name</label>
              <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
            <div className="form-group flex flex-col gap-sm">
              <label>Email / Phone</label>
              <input type="text" placeholder="Your Contact Details" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
            <div className="form-group flex flex-col gap-sm">
              <label>Message</label>
              <textarea placeholder="How can we help?" rows="4" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}></textarea>
            </div>
            <button className="top-btn flex items-center justify-center gap-sm mt-md" style={{ padding: '1rem', width: '100%' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
