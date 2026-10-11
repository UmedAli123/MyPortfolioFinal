import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Go to top">
          <span>UA</span>
          <strong>Umaid Ali</strong>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#services">Services</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-socials" aria-label="Social links">
          <a href="https://www.linkedin.com/in/umaid-ali-keerio/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/UmedAli123" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=keerioumaidali@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><FaEnvelope /></a>
          <a href="https://wa.me/923163271941" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </header>
      <Hero />
      <About />
      <Experience />
      <Certificates />
      <Projects />
      <Testimonials />
      <Services />
      <Contact />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
