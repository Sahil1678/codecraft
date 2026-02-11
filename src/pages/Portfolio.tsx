import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Smartphone, Bell, Database } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: "Global E-Commerce Store",
      description: "A high-performance online marketplace featuring secure payment gateway integration and real-time email notifications.",
      tech: ["React", "Stripe API", "Node.js", "MongoDB"],
      icon: <ShoppingBag size={48} color="#ec4899" />,
      gradient: "linear-gradient(135deg, #0f172a 0%, #831843 100%)"
    },
    {
      name: "Dynamic SaaS Platform",
      description: "Custom web ecosystem with automated user onboarding, dynamic data visualization, and robust security architecture.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      icon: <Database size={48} color="#8b5cf6" />,
      gradient: "linear-gradient(135deg, #1e293b 0%, #4c1d95 100%)"
    },
    {
      name: "Notification Engine",
      description: "Scalable backend service designed for real-time email and push notification delivery across multiple platforms.",
      tech: ["Node.js", "Redis", "SendGrid", "Socket.io"],
      icon: <Bell size={48} color="#10b981" />,
      gradient: "linear-gradient(135deg, #0f172a 0%, #064e3b 100%)"
    },
    {
      name: "Cross-Platform Mobile App",
      description: "Premium mobile application for iOS and Android featuring offline support and smooth gesture-based interactions.",
      tech: ["React Native", "Expo", "Firebase"],
      icon: <Smartphone size={48} color="#22d3ee" />,
      gradient: "linear-gradient(135deg, #1e293b 0%, #164e63 100%)"
    }
  ];

  return (
    <div style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '6rem' }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Portfolio</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Showcasing our expertise in building high-end digital products.</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -15 }}
            style={{
              backgroundColor: '#1e293b',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{
              height: '250px',
              background: project.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {project.icon}
              </motion.div>
            </div>
            
            <div style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>{project.name}</h2>
              <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    color: '#a78bfa',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
