import { FaBrain } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="footer-statement-card">
        <FaBrain aria-hidden="true" />
        <span>Commitment to Excellence</span>
        <p>“I aim to be a sincere, reliable, and active contributor to every company or team I work with. I value clear communication, ownership, timely delivery, and continuous learning. My focus is to understand business needs deeply and turn them into practical AI-powered solutions that support long-term growth.”</p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Umaid Ali. All rights reserved.</span>
        <span>Built for AI, ML, GenAI, and data-driven opportunities.</span>
      </div>
    </footer>
  );
};

export default Footer;
