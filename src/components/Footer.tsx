import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '4rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>CodeCraft</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            Elevating digital experiences through innovative code and heart-touching design.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Our Services</a></li>
            <li><a href="/portfolio" style={{ color: '#94a3b8', textDecoration: 'none' }}>Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
            <Mail size={18} />
            <span>codecraft1678@gmail.com</span>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Social</h4>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Github size={20} color="#94a3b8" />
            <Linkedin size={20} color="#94a3b8" />
            <Twitter size={20} color="#94a3b8" />
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        color: '#64748b',
        fontSize: '0.875rem'
      }}>
        &copy; {new Date().getFullYear()} CodeCraft. Created with Passion.
      </div>
    </footer>
  );
};

export default Footer;
