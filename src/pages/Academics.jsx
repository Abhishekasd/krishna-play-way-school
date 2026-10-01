import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Puzzle, Clock, Music, Palette, Sun, Smile, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

const Academics = () => {
  const pillars = [
    {
      icon: <BookOpen size={42} className="text-primary" />,
      title: "Interactive Curriculum",
      desc: "Curated blend of Montessori and Play-Way approaches designed to foster early cognitive, linguistic, and motor development."
    },
    {
      icon: <Puzzle size={42} className="text-secondary" />,
      title: "Learning Through Play",
      desc: "Hands-on discovery through tactile blocks, sorting puzzles, sensory bins, and physical exploration without rote pressure."
    },
    {
      icon: <Award size={42} className="text-tertiary" />,
      title: "Holistic Assessment",
      desc: "Zero-stress observational progress reports tracking social milestones, motor coordination, and curiosity."
    }
  ];

  const dailySchedule = [
    { time: "09:00 AM", title: "Warm Welcome & Circle Time", desc: "Rhymes, greetings, sharing feelings, and building camaraderie." },
    { time: "09:45 AM", title: "Interactive Phonics & Math Sparks", desc: "Tactile letter recognition, counting games, and storybooks." },
    { time: "10:30 AM", title: "Nutritious Snack & Table Manners", desc: "Encouraging healthy eating habits, hand hygiene, and sharing." },
    { time: "11:00 AM", title: "Outdoor Fun & Gross Motor Play", desc: "Climbing frames, slides, sandpit exploration, and gentle yoga." },
    { time: "11:45 AM", title: "Creative Art & Music Workshop", desc: "Color splashing, clay modeling, percussion instruments, and dance." },
    { time: "12:15 PM", title: "Storytelling & Joyful Wrap-Up", desc: "Moral stories, puppetry, and departure with smiles." }
  ];

  const coCurricular = [
    { title: "Festivals & Cultural Days", desc: "Diwali, Eid, Christmas, Independence Day, Janmashtami celebrations to teach unity and cultural joy." },
    { title: "Kids Yoga & Mini Athletics", desc: "Fun stretching, balancing games, and gentle coordination activities for healthy physical development." },
    { title: "Little Picasso Art Studio", desc: "Finger painting, leaf printing, sponge art, and clay pottery to unleash uninhibited imagination." },
    { title: "Nature & Gardening Explorers", desc: "Watering plants, watching seeds sprout, and observing butterflies to nurture love for Mother Nature." }
  ];

  return (
    <motion.div 
      className="academics-page" 
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
            Academic Philosophy
          </span>
          <h1 style={{ color: 'var(--color-always-dark)', marginBottom: '0.5rem' }}>Joyful Learning That Lasts a Lifetime</h1>
          <p style={{ color: 'var(--color-always-dark)', fontWeight: '600', maxWidth: '650px', margin: '0 auto' }}>
            Where questions are welcomed, creativity is nurtured, and learning is as natural as play.
          </p>
        </motion.div>
      </section>

      {/* Core Pillars */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
          <h2 className="text-secondary">Our Educational Pillars</h2>
          <p className="text-muted">A balanced blend of joyful exploration and structured cognitive growth.</p>
        </div>

        <motion.div 
          className="responsive-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((item, idx) => (
            <motion.div 
              key={idx}
              className="glass-panel bubbly-shape" 
              style={{ padding: '2.5rem', textAlign: 'center' }} 
              variants={itemReveal} 
              whileHover={{ y: -8 }}
            >
              <div style={{ margin: '0 auto 1.2rem', display: 'inline-block' }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: '0.8rem' }}>{item.title}</h3>
              <p className="text-muted" style={{ lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* A Day in the Life Schedule */}
      <section style={{ backgroundColor: 'var(--color-background)', padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
            <h2 className="text-secondary">A Day in the Life of a Little Learner</h2>
            <p className="text-muted">Thoughtfully balanced between active play, quiet discovery, and wholesome socialization.</p>
          </div>

          <motion.div 
            className="flex flex-col gap-md"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dailySchedule.map((slot, index) => (
              <motion.div 
                key={index}
                className="glass-panel bubbly-shape flex items-center gap-md"
                style={{ padding: '1.5rem 1.8rem', borderLeft: '4px solid var(--color-secondary)' }}
                variants={itemReveal}
                whileHover={{ x: 5 }}
              >
                <div style={{ 
                  background: 'rgba(75, 163, 227, 0.15)', 
                  padding: '0.6rem 1rem', 
                  borderRadius: '12px',
                  fontWeight: '800',
                  color: 'var(--color-secondary)',
                  whiteSpace: 'nowrap',
                  fontSize: '0.9rem'
                }}>
                  {slot.time}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{slot.title}</h4>
                  <p className="text-muted" style={{ fontSize: '0.88rem' }}>{slot.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Co-Curricular & Special Activities */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="text-center mb-lg" style={{ marginBottom: '3rem' }}>
          <h2 className="text-secondary">Beyond the Classroom</h2>
          <p className="text-muted">Enriching activities that build confidence, expression, and joy.</p>
        </div>

        <motion.div 
          className="responsive-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coCurricular.map((act, i) => (
            <motion.div 
              key={i} 
              className="glass-panel bubbly-shape" 
              style={{ padding: '2rem' }}
              variants={itemReveal}
              whileHover={{ y: -6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <CheckCircle size={22} color="var(--color-primary-hover)" />
                <h3 style={{ fontSize: '1.2rem' }}>{act.title}</h3>
              </div>
              <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{act.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Academics;
