import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Server, ShoppingCart, Cpu, Zap, Shield, Bell, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '10rem 2rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            zIndex: -1
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
            zIndex: -1
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}
        >
          We Build <span className="gradient-text">Scalable Digital Solutions</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}
        >
          Specializing in dynamic websites, e-commerce with payment integration, and modern mobile applications.
          High-performance code that drives your business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/contact" style={{
            background: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
            color: 'white',
            padding: '1.25rem 2.5rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 20px 25px -5px rgba(139, 92, 246, 0.3)'
          }}>
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <Zap color="#8b5cf6" style={{ marginBottom: '1rem' }} />
            <h4 style={{ margin: 0 }}>Lightning Fast</h4>
          </div>
          <div>
            <Shield color="#22d3ee" style={{ marginBottom: '1rem' }} />
            <h4 style={{ margin: 0 }}>Secure by Design</h4>
          </div>
          <div>
            <Cpu color="#ec4899" style={{ marginBottom: '1rem' }} />
            <h4 style={{ margin: 0 }}>Modern Tech</h4>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem' }}>Our Core <span className="gradient-text">Expertise</span></h2>
          <p style={{ color: '#94a3b8' }}>Comprehensive solutions for the modern web.</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { icon: <ShoppingCart />, title: "E-Commerce", desc: "Online stores with seamless payment integration." },
            { icon: <Server />, title: "Dynamic Web", desc: "Powerful web applications with real-time database features." },
            { icon: <Smartphone />, title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android." }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              style={{
                padding: '3rem 2rem',
                backgroundColor: '#1e293b',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(139, 92, 246, 0.1)', 
                borderRadius: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#8b5cf6'
              }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1200px', margin: '0 auto 4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', margin: 0 }}>Premium <span className="gradient-text">Deliverables</span></h2>
            <p style={{ color: '#94a3b8' }}>High-end solutions built for scale and reliability.</p>
          </div>
          <Link to="/portfolio" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: '600' }}>Explore All Projects →</Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ borderRadius: '2rem', overflow: 'hidden', backgroundColor: '#1e293b' }}>
            <div style={{ height: '300px', background: 'linear-gradient(45deg, #1e293b, #334155)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingCart size={80} color="rgba(255,255,255,0.1)" />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3>E-Commerce with Payments</h3>
              <p style={{ color: '#94a3b8' }}>Secure, high-converting stores with integrated payment gateways and email alerts.</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} style={{ borderRadius: '2rem', overflow: 'hidden', backgroundColor: '#1e293b' }}>
            <div style={{ height: '300px', background: 'linear-gradient(45deg, #0f172a, #1e293b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={80} color="rgba(255,255,255,0.1)" />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3>Notification Systems</h3>
              <p style={{ color: '#94a3b8' }}>Real-time email and push notification integrations for dynamic user engagement.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '5rem 2rem',
            borderRadius: '3rem',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Let's Create <span className="gradient-text">Together</span></h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '3rem' }}>
            Transform your vision into a robust digital reality today.
          </p>
          <Link to="/contact" style={{
            background: 'white',
            color: '#0f172a',
            padding: '1.25rem 3rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.1rem'
          }}>
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
