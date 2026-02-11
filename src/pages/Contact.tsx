import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Using FormSubmit.co - Zero config, no keys needed!
      const response = await fetch("https://formsubmit.co/ajax/codecraft1678@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Message: formData.details,
            _subject: "New Project Inquiry from CodeCraft"
        })
      });

      if (response.ok) {
        alert('Our team will contact you soon.');
        setFormData({ name: '', email: '', details: '' });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '6rem' }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Let's Build <span className="gradient-text">Magic</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Ready to start your next digital revolution? We're just a message away.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '5rem'
      }}>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderRadius: '1rem', color: '#8b5cf6' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Email Us</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>codecraft1678@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={20} color="#8b5cf6" />
              Why Choose CodeCraft?
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
              We don't just write code; we craft experiences. Expect premium quality, 
              expert design, and technical excellence in every pixel.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          style={{ 
            backgroundColor: '#1e293b', 
            padding: '3rem', 
            borderRadius: '2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', color: '#cbd5e1' }}>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#0f172a',
                borderRadius: '1rem',
                border: '1px solid #334155',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', color: '#cbd5e1' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#0f172a',
                borderRadius: '1rem',
                border: '1px solid #334155',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', color: '#cbd5e1' }}>Project Vision</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your dream project (Website, App, E-Commerce, etc.)..."
              required
              rows={5}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#0f172a',
                borderRadius: '1rem',
                border: '1px solid #334155',
                color: 'white',
                fontSize: '1rem',
                resize: 'none'
              }}
            />
          </div>
          <motion.button
            whileHover={{ scale: isSending ? 1 : 1.02 }}
            whileTap={{ scale: isSending ? 1 : 0.98 }}
            disabled={isSending}
            type="submit"
            style={{
              width: '100%',
              background: isSending ? '#475569' : 'linear-gradient(to right, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '1.25rem',
              borderRadius: '1rem',
              border: 'none',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: isSending ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: isSending ? 'none' : '0 10px 15px -3px rgba(139, 92, 246, 0.4)'
            }}
          >
            {isSending ? 'Sending...' : 'Launch Message'} <Send size={20} />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
