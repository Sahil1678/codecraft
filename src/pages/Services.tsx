import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, ShoppingCart, Shield, Zap, Smartphone, Bell, Layout } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Static Website Crafting",
      description: "Fast, elegant, and responsive websites designed for high performance and clear communication.",
      icon: <Globe size={40} />,
      color: "#8b5cf6"
    },
    {
      title: "Dynamic Ecosystems",
      description: "Robust web applications with powerful database integration and real-time data management.",
      icon: <Server size={40} />,
      color: "#22d3ee"
    },
    {
      title: "E-Commerce with Payments",
      description: "Full-scale online stores featuring secure payment gateway integration and automated order processing.",
      icon: <ShoppingCart size={40} />,
      color: "#ec4899"
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android, built with modern cross-platform technologies.",
      icon: <Smartphone size={40} />,
      color: "#fbbf24"
    },
    {
      title: "Email Notifications",
      description: "Automated email notification systems to keep your users informed and engaged 24/7.",
      icon: <Bell size={40} />,
      color: "#10b981"
    },
    {
      title: "Secure Web Solutions",
      description: "Highly secure digital architecture designed to protect your data and ensure constant uptime.",
      icon: <Shield size={40} />,
      color: "#ef4444"
    }
  ];

  return (
    <div style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '6rem' }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Capabilities</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Turning your digital ideas into high-performance realities.</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, borderColor: service.color }}
            style={{
              padding: '3rem 2rem',
              backgroundColor: '#1e293b',
              borderRadius: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ 
              color: service.color, 
              marginBottom: '1.5rem',
              display: 'inline-block',
              padding: '1rem',
              backgroundColor: `${service.color}10`,
              borderRadius: '1rem'
            }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1.05rem' }}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
