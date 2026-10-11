import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import './Hero.css';

const easing = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

const neuralNodes = [
  { left: '14%', top: '24%', delay: '0s' },
  { left: '28%', top: '66%', delay: '0.5s' },
  { left: '50%', top: '16%', delay: '0.9s' },
  { left: '68%', top: '72%', delay: '1.3s' },
  { left: '84%', top: '35%', delay: '1.7s' },
];

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-light-field" />
      <div className="hero-scanline" />
      <div className="hero-content">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="hero-text"
        >
          <motion.span variants={item} className="eyebrow">Machine Learning, GenAI & AI Automation Engineer</motion.span>
          <motion.h1 variants={item}>Umaid Ali</motion.h1>
          <motion.h2 variants={item}>AI/ML Engineer building intelligent, deployment-ready software solutions.</motion.h2>
          <motion.p variants={item}>
            I work across machine learning, deep learning, computer vision, NLP, Generative AI, and data-driven application development. My focus is building practical AI systems that combine strong model workflows with clean frontend experiences, reliable backend APIs, and deployment-ready architecture for real users, clients, and teams.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a className="btn primary-btn" href="#projects">
              View Projects <FaArrowRight aria-hidden="true" />
            </a>
            <a className="btn secondary-btn" href="/assets/Umed_Ali_Keerio_AIML_CV.pdf" target="_blank" rel="noreferrer">
              Download CV <FaDownload aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: easing }}
          className="hero-visual"
        >
          <div className="neural-stage">
            <div className="neural-ring ring-one" />
            <div className="neural-ring ring-two" />
            <div className="neural-ring ring-three" />
            <div className="neural-grid">
              {neuralNodes.map((node, index) => (
                <span
                  key={index}
                  className="neural-node"
                  style={{ left: node.left, top: node.top, animationDelay: node.delay }}
                />
              ))}
            </div>
          </div>

          <div className="profile-terminal">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="profile-img-wrapper">
              <img src={profileImg} alt="Umaid Ali" className="profile-img" />
              <div className="image-scanner" />
            </div>
          </div>
          <div className="code-stream" aria-hidden="true">
            <span>train.model()</span>
            <span>analyze.vision()</span>
            <span>deploy.ai_app()</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
