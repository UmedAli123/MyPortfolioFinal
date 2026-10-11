import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    "Python", "C++", "JavaScript", "SQL", "React.js", "FastAPI", "Flask",
    "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Hugging Face",
    "LangChain", "LlamaIndex", "RAG", "LLMs", "Docker", "Git"
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="about-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        className="section-title"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      <div className="about-content">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px", amount: 0.25 }}
          className="about-card glass"
        >
          <span className="card-kicker">Foundation</span>
          <h3>Education</h3>
          <div className="education-item">
            <h4>BS Software Engineering</h4>
            <span className="institution">Virtual University of Pakistan</span>
            <span className="date">Mar 2022 – Jun 2026</span>
            <p>
              Software Engineering graduate focused on building reliable, user-facing AI applications. My academic foundation covers software design, database systems, computer networks, artificial intelligence, object-oriented programming, data structures, algorithms, and full-cycle project development.
            </p>
            <p>
              During the degree, I worked on practical systems that connected machine learning models with usable interfaces, including classification workflows, dashboards, authentication flows, database-backed applications, and deployment-ready prototypes.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px", amount: 0.25 }}
          transition={{ delay: 0.12 }}
          className="about-card glass"
        >
          <span className="card-kicker">Capabilities</span>
          <h3>Technical Skills</h3>
          <p className="skills-intro">
            I work across the AI product stack: data preprocessing, model experimentation, backend APIs, frontend dashboards, and GenAI/RAG integrations.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="skill-badge"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
