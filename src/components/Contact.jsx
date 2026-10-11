import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaUser, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '9864420c-816d-466a-9309-76c6a9a0322a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Lead: ${formData.name} via Umaid Portfolio`,
          from_name: 'Umaid Ali Portfolio Lead',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-kicker">Start a conversation</span>
        <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
        <p>
          Have an AI/ML project, automation idea, dashboard, chatbot, or computer vision solution in mind? Send me a message and I will reply directly to your inbox.
        </p>
      </motion.div>

      <motion.div
        className="contact-panel glass"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="contact-copy">
          <div className="contact-icon"><FaEnvelope /></div>
          <h3>Let&apos;s build something intelligent.</h3>
          <p>
            Feel free to send a message using this form, or reach out directly through WhatsApp or Email. Messages sent here are delivered instantly to my primary inbox.
          </p>

          <div className="contact-direct-actions">
            <a
              href="https://wa.me/923163271941?text=Hi%20Umaid,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project/opportunity."
              target="_blank"
              rel="noreferrer"
              className="direct-action-btn whatsapp-btn"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=keerioumaidali@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="direct-action-btn email-btn"
            >
              <FaEnvelope /> Open in Gmail
            </a>
          </div>

          <div className="contact-meta">
            <span><FaEnvelope /> keerioumaidali@gmail.com</span>
            <span><FaUser /> Available for full-time, freelance & contract AI roles</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, idea, or opportunity..."
              rows="6"
              required
            />
          </label>

          <button
            type="submit"
            className="btn primary-btn contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane aria-hidden="true" />
          </button>

          {status === 'success' && (
            <p className="form-status success">✓ Thank you! Your message has been sent directly to Umaid.</p>
          )}

          {status === 'error' && (
            <p className="form-status error">Something went wrong. Please try again or reach out on WhatsApp/Gmail above.</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
