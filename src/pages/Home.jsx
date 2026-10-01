import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  BookOpen, 
  Palette, 
  Music, 
  Smile, 
  ChevronDown, 
  Star, 
  Clock, 
  Compass, 
  Calendar, 
  Award, 
  ArrowRight, 
  Check,
  PhoneCall,
  MapPin
} from 'lucide-react';
import { fadeInUp, staggerContainer, itemReveal, hoverLift } from '../utils/animations';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const stats = [
    { id: 1, icon: <Award size={26} color="#FFB347" />, number: "15+", label: "Years of Excellence", bg: "rgba(255, 179, 71, 0.12)" },
    { id: 2, icon: <Smile size={26} color="#4BA3E3" />, number: "1,000+", label: "Happy Little Learners", bg: "rgba(75, 163, 227, 0.12)" },
    { id: 3, icon: <Users size={26} color="#FF6B6B" />, number: "1:10", label: "Teacher to Child Ratio", bg: "rgba(255, 107, 107, 0.12)" },
    { id: 4, icon: <ShieldCheck size={26} color="#88D49E" />, number: "100%", label: "Safe & CCTV Campus", bg: "rgba(136, 212, 158, 0.15)" }
  ];

  const programs = [
    {
      id: "toddlers",
      title: "Playgroup / Toddlers",
      age: "1.5 - 2.5 Years",
      desc: "Gentle introduction to social environments with sensory play, music, and colorful toys.",
      icon: <Smile size={28} color="#FF6B6B" />,
      boxBg: "rgba(255, 107, 107, 0.1)",
      btnBg: "#FF6B6B",
      features: ["Sensory Development Activities", "Music, Rhymes & Movement", "Social & Emotional Bonding"]
    },
    {
      id: "pre-nursery",
      title: "Pre-Nursery",
      age: "2.5 - 3.5 Years",
      desc: "Building early curiosity with language foundations, fine motor control, and joyful discovery.",
      icon: <Palette size={28} color="#FFB347" />,
      boxBg: "rgba(255, 179, 71, 0.1)",
      btnBg: "#FFB347",
      features: ["Phonics & Vocabulary Sparks", "Art, Craft & Clay Modeling", "Habit & Manner Building"]
    },
    {
      id: "nursery",
      title: "Nursery",
      age: "3.5 - 4.5 Years",
      desc: "Structured yet playful curriculum developing early literacy, numeracy, and inquisitive minds.",
      icon: <BookOpen size={28} color="#4BA3E3" />,
      boxBg: "rgba(75, 163, 227, 0.1)",
      btnBg: "#4BA3E3",
      features: ["Early Reading & Storytelling", "Math Concepts & Number Fun", "Confidence & Stage Exposure"]
    },
    {
      id: "lkg",
      title: "Kindergarten / LKG",
      age: "4.5 - 5.5 Years",
      desc: "Comprehensive school readiness with critical thinking, teamwork, and strong foundational knowledge.",
      icon: <GraduationCap size={28} color="#88D49E" />,
      boxBg: "rgba(136, 212, 158, 0.15)",
      btnBg: "#2E7D32",
      features: ["Formal Writing & Logic Skills", "Science & Nature Exploration", "Smooth Grade-1 Transition"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Sparkles size={26} color="#FFB347" />,
      bg: "rgba(255, 179, 71, 0.12)",
      title: "Play-Way Methodology",
      desc: "No rote learning. Every concept is taught through playful games, real-world objects, and sensory exploration."
    },
    {
      icon: <HeartHandshake size={26} color="#FF6B6B" />,
      bg: "rgba(255, 107, 107, 0.12)",
      title: "Loving & Trained Faculty",
      desc: "Our patient, certified teachers provide warm maternal care and individualized attention to every single child."
    },
    {
      icon: <ShieldCheck size={26} color="#4BA3E3" />,
      bg: "rgba(75, 163, 227, 0.12)",
      title: "360° Safety & CCTV",
      desc: "Secure campus with 24/7 CCTV monitoring, sanitized play zones, child-friendly furniture, and strict security."
    },
    {
      icon: <Music size={26} color="#88D49E" />,
      bg: "rgba(136, 212, 158, 0.15)",
      title: "Music, Dance & Creativity",
      desc: "Special sessions dedicated to rhythm, stage performances, festival celebrations, and open-ended art."
    },
    {
      icon: <Compass size={26} color="#9C27B0" />,
      bg: "rgba(156, 39, 176, 0.12)",
      title: "Smart Activity Rooms",
      desc: "Interactive visual aids, audio-visual storytelling, Montessori puzzles, and tactile learning stations."
    },
    {
      icon: <Users size={26} color="#FF9800" />,
      bg: "rgba(255, 152, 0, 0.12)",
      title: "Parent Partnership",
      desc: "Regular feedback, photo updates, and parent-teacher dialogues to celebrate your child's milestones together."
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <Calendar size={28} />,
      title: "Submit Inquiry or Visit",
      desc: "Fill our simple online form or walk directly into our Aligarh campus to experience the vibrant learning atmosphere."
    },
    {
      number: "2",
      icon: <Smile size={28} />,
      title: "Friendly Interaction",
      desc: "A warm, pressure-free chat with the child and parents to understand developmental milestones and interests."
    },
    {
      number: "3",
      icon: <Award size={28} />,
      title: "Welcome to the Family",
      desc: "Complete simple paperwork, receive the welcome kit, and embark on a memorable early childhood journey!"
    }
  ];

  const testimonials = [
    {
      quote: "Krishna Play Way School has been a blessing for my daughter. From a shy toddler to a confident speaker in just 6 months, the teachers are truly affectionate and dedicated.",
      author: "Pooja Sharma",
      child: "Mother of Ananya (Nursery)",
      initials: "PS"
    },
    {
      quote: "The play-based learning approach is amazing. My son comes home everyday excited about stories, rhymes, and art. The campus is spotlessly clean and very safe.",
      author: "Rajeev Agarwal",
      child: "Father of Kabir (Pre-Nursery)",
      initials: "RA"
    },
    {
      quote: "Best preschool in Aligarh! The teacher-to-student ratio ensures each child gets personal care. Their festival celebrations and stage activities give immense confidence.",
      author: "Dr. Meenakshi Verma",
      child: "Mother of Reyansh (LKG)",
      initials: "MV"
    }
  ];

  const faqs = [
    {
      q: "What is the right age for admission in Playgroup and Nursery?",
      a: "Playgroup / Toddlers admission begins at 1.5 to 2.5 years. Pre-Nursery is for 2.5 to 3.5 years, and Nursery is for children aged 3.5 to 4.5 years."
    },
    {
      q: "What are the school timings for early years?",
      a: "School operates from 9:00 AM to 12:30 PM (Monday to Friday), structured with active play intervals, healthy snack breaks, and quiet storytelling time."
    },
    {
      q: "How does the school ensure safety and hygiene?",
      a: "Our entire campus is equipped with 24/7 CCTV surveillance, child-safe rounded furniture, daily sanitization of toys and play areas, and verified staff at all entry points."
    },
    {
      q: "Is transport facility available for students in Aligarh?",
      a: "Yes, safe and supervised van transport with trained female attendants is available across key residential areas of Aligarh."
    },
    {
      q: "What is the assessment system for young children?",
      a: "We believe in zero-pressure evaluation. Continuous observational assessments monitor social, physical, and cognitive milestones shared with parents quarterly."
    }
  ];

  return (
    <motion.div 
      className="home-page"
      initial="hidden"
      animate="visible"
    >
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Key Metrics & Stats Banner */}
      <section className="stats-section container">
        <motion.div 
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map(stat => (
            <motion.div 
              key={stat.id} 
              className="stat-card"
              variants={itemReveal}
            >
              <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bg }}>
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Comprehensive Programs / Age Groups */}
      <section className="programs-section container">
        <motion.div 
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-badge">Nurturing Pathways</span>
          <h2 className="section-title">Programs Designed For Every Stage</h2>
          <p className="section-subtitle">Specially curated developmental programs that inspire joy, creativity, and foundational learning.</p>
        </motion.div>

        <motion.div 
          className="programs-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map(prog => (
            <motion.div 
              key={prog.id} 
              className="program-card"
              variants={itemReveal}
            >
              <div>
                <div className="program-top">
                  <div className="program-icon-box" style={{ backgroundColor: prog.boxBg }}>
                    {prog.icon}
                  </div>
                  <span className="program-age-tag">{prog.age}</span>
                </div>

                <h3 className="program-title">{prog.title}</h3>
                <p className="program-desc">{prog.desc}</p>

                <ul className="program-features">
                  {prog.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} color={prog.btnBg} className="flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button 
                className="program-btn text-always-light"
                style={{ backgroundColor: prog.btnBg }}
                onClick={() => navigate('/admission')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply for {prog.title.split(' ')[0]}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="why-us-section">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-badge">Why Krishna Play Way</span>
            <h2 className="section-title">The Foundation for a Lifetime of Success</h2>
            <p className="section-subtitle">We combine modern early childhood pedagogy with loving care to bring out the natural genius in every child.</p>
          </motion.div>

          <motion.div 
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {whyChooseUs.map((feat, index) => (
              <motion.div 
                key={index} 
                className="feature-item"
                variants={itemReveal}
              >
                <div className="feature-icon-circle" style={{ backgroundColor: feat.bg }}>
                  {feat.icon}
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. 3-Step Simple Admission Roadmap */}
      <section className="journey-section container">
        <motion.div 
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-badge">Admission Process</span>
          <h2 className="section-title">3 Simple Steps to Join Us</h2>
          <p className="section-subtitle">Seamless, transparent, and parent-friendly admission for Academic Year 2026-27.</p>
        </motion.div>

        <motion.div 
          className="journey-steps"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="step-card"
              variants={itemReveal}
            >
              <div className="step-number-badge">{step.number}</div>
              <div className="step-icon-box">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. Parent Testimonials & Reviews */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-badge">Parent Voices</span>
            <h2 className="section-title">What Parents Say About Us</h2>
            <p className="section-subtitle">Real experiences and feedback from our wonderful family of parents in Aligarh.</p>
          </motion.div>

          <motion.div 
            className="testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((test, index) => (
              <motion.div 
                key={index} 
                className="testimonial-card"
                variants={itemReveal}
              >
                <div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#FFB347" stroke="#FFB347" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{test.quote}"</p>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">{test.initials}</div>
                  <div className="author-info">
                    <h4>{test.author}</h4>
                    <p>{test.child}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Interactive FAQ Accordion */}
      <section className="faq-section container">
        <motion.div 
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-badge">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Clear answers to common questions about admissions, timings, safety, and routines.</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} color="var(--color-secondary)" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Call to Action Banner Strip */}
      <section className="cta-banner-section container">
        <motion.div 
          className="cta-banner-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Give Your Child the Best Start in Life</h2>
          <p>Admissions are now open for the 2026-27 Academic Session. Schedule a campus visit or contact our admissions desk today!</p>
          
          <div className="cta-buttons">
            <button 
              className="cta-btn-primary"
              onClick={() => navigate('/admission')}
            >
              Enroll Your Child Now
            </button>
            <button 
              className="cta-btn-outline"
              onClick={() => navigate('/contact')}
            >
              Book a Campus Visit
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
