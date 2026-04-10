import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Admission = () => {
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
          <form className="flex flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Child's Name" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <input type="text" placeholder="Parent's Name" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <input type="text" placeholder="Phone Number" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <button className="top-btn" style={{ padding: '1rem', width: '100%', marginTop: '0.5rem' }}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admission;
