import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  // We have 12 images named 1.png to 12.png
  const testimonialImages = Array.from({ length: 12 }, (_, i) => `/assets/Testimonials/${i + 1}.png`);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="card-kicker">Client Feedback</span>
          <h2 className="section-title">What People <span className="gradient-text">Say</span></h2>
          <p className="testimonials-subtitle">
            A glimpse into the feedback and recognition from clients and industry professionals I’ve had the privilege of working with.
          </p>
        </motion.div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {/* We duplicate the images to create an infinite scroll effect */}
          {[...testimonialImages, ...testimonialImages].map((imgSrc, index) => (
            <div 
              key={index} 
              className="testimonial-card glass"
              onClick={() => setActiveImage(imgSrc)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter') setActiveImage(imgSrc); }}
            >
              <img src={imgSrc} alt={`Testimonial ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="testimonial-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="testimonial-modal glass"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActiveImage(null)}>
                <FaTimes />
              </button>
              <img src={activeImage} alt="Expanded testimonial" className="expanded-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
