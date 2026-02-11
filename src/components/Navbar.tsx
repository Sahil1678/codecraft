import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 4rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Code2 size={32} color="#8b5cf6" />
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1.5rem', 
          fontWeight: '700',
          letterSpacing: '-1px'
        }}>
          CodeCraft
        </Link>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', margin: 0, padding: 0 }}>
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <li key={item}>
            <Link 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              style={{ 
                color: '#cbd5e1', 
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8b5cf6')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
