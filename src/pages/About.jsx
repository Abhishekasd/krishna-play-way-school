import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Shield, Target, Eye, Sparkles, Award, Users } from 'lucide-react';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

const About = () => {
  const values = [
    {
      icon: <Heart size={28} color="#FF6B6B" />,
      bg: "rgba(255, 107, 107, 0.12)",
      title: "Loving Nurturance",
      desc: "Creating an atmosphere where every child feels cherished, valued, and emotionally secure every day."
    },
    {
      icon: <Compass size={28} color="#4BA3E3" />,
      bg: "rgba(75, 163, 227, 0.12)",
      title: "Joyful Inquiry",
      desc: "Encouraging natural curiosity through question-friendly, play-oriented exploration and tactile discovery."
    },
    {
      icon: <Shield size={28} color="#88D49E" />,
      bg: "rgba(136, 212, 158, 0.15)",
      title: "Safe & Inclusive",
      desc: "A strictly supervised, hygienic, and welcoming environment where every child blossoms without barriers."
    },
    {
      icon: <Sparkles size={28} color="#FFB347" />,
      bg: "rgba(255, 179, 71, 0.12)",
      title: "Holistic Growth",
      desc: "Fostering physical, cognitive, linguistic, social, and emotional milestones in harmony."
    }
  ];

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      style={{ paddingBottom: '5rem' }}
    >
      {/* Hero Header */}
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
            About Krishna Play Way School
          </span>
          <h1 style={{ color: 'var(--color-always-dark)', marginBottom: '0.5rem' }}>Nurturing Young Minds Since Inception</h1>
          <p style={{ color: 'var(--color-always-dark)', fontWeight: '600', maxWidth: '650px', margin: '0 auto' }}>
            Empowering early learners in Aligarh through modern play-way pedagogical practices, compassionate mentorship, and a joyful foundation.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <motion.div 
          className="responsive-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-panel bubbly-shape" 
            style={{ padding: '2.5rem', position: 'relative' }}
            variants={itemReveal}
            whileHover={{ y: -6 }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '14px', 
              background: 'rgba(75, 163, 227, 0.15)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.2rem' 
            }}>
              <Eye size={28} color="var(--color-secondary)" />
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Our Vision</h2>
            <p className="text-muted" style={{ lineHeight: '1.7' }}>
              To be the most trusted cradle of early childhood education in Aligarh, inspiring lifelong curiosity, self-confidence, emotional empathy, and creative intellect in every young learner who walks through our doors.
            </p>
          </motion.div>

          <motion.div 
            className="glass-panel bubbly-shape" 
            style={{ padding: '2.5rem', position: 'relative' }}
            variants={itemReveal}
            whileHover={{ y: -6 }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '14px', 
              background: 'rgba(255, 179, 71, 0.15)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.2rem' 
            }}>
              <Target size={28} color="var(--color-primary-hover)" />
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Our Mission</h2>
            <p className="text-muted" style={{ lineHeight: '1.7' }}>
              To provide a safe, playful, stimulating environment where personalized attention, experienced mentors, and multi-sensory learning activities develop strong moral values, communication skills, and foundational readiness for higher schooling.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section style={{ backgroundColor: 'var(--color-background)', padding: '4rem 1.5rem' }}>
        <div className="container">
          <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
            <h2 className="text-secondary">Our Core Pillars</h2>
            <p className="text-muted">The guiding principles behind every classroom activity and lesson plan.</p>
          </div>

          <motion.div 
            className="responsive-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                className="glass-panel bubbly-shape" 
                style={{ padding: '2rem', textAlign: 'center' }}
                variants={itemReveal}
                whileHover={{ y: -6 }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  background: v.bg, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1.2rem' 
                }}>
                  {v.icon}
                </div>
                <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{v.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
          <h2 className="text-secondary">Words From Our Leadership</h2>
          <p className="text-muted">Dedicated to guiding the next generation with warmth and integrity.</p>
        </div>

        <motion.div 
          className="flex flex-col gap-lg" 
          style={{ maxWidth: '850px', margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-panel bubbly-shape" 
            style={{ padding: '2.5rem', borderLeft: '6px solid var(--color-secondary)' }}
            variants={fadeInUp}
          >
            <h3 style={{ fontSize: '1.4rem' }}>Director's Message</h3>
            <h4 className="text-secondary mt-sm" style={{ fontWeight: '700' }}>Mr. Bhupendra Sir</h4>
            <p className="mt-md text-muted" style={{ lineHeight: '1.7', fontStyle: 'italic' }}>
              "At Krishna Play Way School, our primary endeavor is to craft a warm, home-like environment where little hearts feel secure and curious minds find answers. Early childhood is the critical window where personality, ethics, and love for knowledge take root. We are honored to partner with parents in shaping confident, empathetic, and joyful future citizens."
            </p>
          </motion.div>

          <motion.div 
            className="glass-panel bubbly-shape" 
            style={{ padding: '2.5rem', borderLeft: '6px solid var(--color-primary)' }}
            variants={fadeInUp}
          >
            <h3 style={{ fontSize: '1.4rem' }}>Principal's Message</h3>
            <h4 className="text-tertiary mt-sm" style={{ fontWeight: '700' }}>Mrs. Usha Sharma</h4>
            <p className="mt-md text-muted" style={{ lineHeight: '1.7', fontStyle: 'italic' }}>
              "Children are born natural explorers. Our role as educators is not to fill a bucket, but to light a fire of wonder. By replacing fear of failure with the joy of discovery through our play-way methods, we help every child find their voice, build social friendships, and discover their unique talents."
            </p>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
