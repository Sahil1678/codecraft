import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Rocket, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: <Target size={30} />, title: "Precision", desc: "Every line of code is written with surgical precision for peak performance." },
    { icon: <Heart size={30} />, title: "Passion", desc: "We don't just build websites; we pour our hearts into creating digital art." },
    { icon: <Rocket size={30} />, title: "Innovation", desc: "Staying ahead of the curve with the latest frameworks and technologies." }
  ];

  return (
    <div style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '8rem' }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>The <span className="gradient-text">Story</span> of CodeCraft</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
          Where technical excellence meets creative soul. We are a collective of digital 
          architects dedicated to redefining the web.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem',
        marginBottom: '10rem'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ padding: '3rem', backgroundColor: '#1e293b', borderRadius: '2.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Users size={40} /></div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who We Are</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Founded on the principle that digital experiences should be both powerful and beautiful. 
            Our expert team brings years of expertise in full-stack 
            development and modern UI/UX design to every project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ padding: '3rem', backgroundColor: '#1e293b', borderRadius: '2.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div style={{ color: '#22d3ee', marginBottom: '1.5rem' }}><Code2 size={40} /></div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Craft</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem' }}>
            We specialize in dynamic web applications, e-commerce stores with payment integration, 
            and modern mobile apps. Every solution is built for scale, featuring automated 
            email notifications and secure architecture.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Our Core <span className="gradient-text">Values</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              style={{
                padding: '2.5rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ color: '#8b5cf6', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {value.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ 
          textAlign: 'center', 
          padding: '6rem 2rem', 
          backgroundColor: 'rgba(139, 92, 246, 0.05)', 
          borderRadius: '3rem',
          border: '1px solid rgba(139, 92, 246, 0.1)'
        }}
      >
        <h2 style={{ marginBottom: '3rem' }}>Powering the Future with <span className="gradient-text">Modern Tech</span></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', color: '#cbd5e1', fontSize: '1.2rem', fontWeight: '600' }}>
          <span>React</span> • <span>Next.js</span> • <span>TypeScript</span> • <span>Node.js</span> • <span>MongoDB</span> • <span>Tailwind</span> • <span>Framer Motion</span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
