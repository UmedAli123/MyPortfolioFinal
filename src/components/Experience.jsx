import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    role: "AI & Agentic Systems Engineer",
    company: "Devzz Tech Solutions",
    type: "Full-time",
    location: "Islamabad, Pakistan",
    date: "Feb 2025 – Mar 2026",
    isLatest: true,
    points: [
      "Designed and developed AI-powered applications using Python, Large Language Models (LLMs), and modern AI frameworks.",
      "Built autonomous AI agents capable of task automation, reasoning, and workflow orchestration.",
      "Developed Retrieval-Augmented Generation (RAG) systems using vector databases for accurate, context-aware responses.",
      "Integrated LLMs through APIs, including OpenAI, Anthropic, and other leading AI platforms.",
      "Engineered scalable backend services and REST APIs using FastAPI and Python.",
      "Applied advanced prompt engineering and context management techniques to improve AI performance.",
      "Connected AI capabilities with web applications and enterprise systems through secure API integrations.",
      "Optimized AI pipelines for performance, scalability, and production deployment.",
      "Collaborated with cross-functional teams to design, implement, and deploy AI-driven solutions.",
      "Researched and adopted emerging AI technologies to build reliable, production-ready intelligent systems."
    ]
  },
  {
    role: "AI Developer",
    company: "Pixel TechnoSol",
    type: "Freelance",
    location: "Islamabad, Pakistan",
    date: "Oct 2023 – Aug 2024",
    isLatest: false,
    points: [
      "Developed end-to-end Machine Learning and Deep Learning solutions, from data preprocessing to model deployment.",
      "Built AI applications in Natural Language Processing (NLP), Computer Vision, and Generative AI.",
      "Designed and deployed LLM-powered chatbots, AI assistants, and Retrieval-Augmented Generation (RAG) applications.",
      "Integrated AI models into web applications using Python, FastAPI, Flask, and REST APIs.",
      "Implemented data preprocessing, feature engineering, model training, evaluation, and optimization pipelines.",
      "Developed AI automation workflows to improve operational efficiency and user experience.",
      "Worked with vector databases and embeddings to enable semantic search and intelligent information retrieval.",
      "Delivered customized AI solutions tailored to client requirements across multiple industries.",
      "Continuously explored and implemented the latest AI frameworks, tools, and best practices."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Technocolabs Softwares",
    type: "Internship",
    location: "Remote",
    date: "Nov 2022 – Feb 2023",
    isLatest: false,
    points: [
      "Assisted in developing Machine Learning solutions using Python and industry-standard ML libraries.",
      "Performed data preprocessing, cleaning, feature engineering, and exploratory data analysis (EDA).",
      "Trained, evaluated, and optimized machine learning models using real-world datasets.",
      "Implemented supervised and unsupervised learning algorithms for predictive analytics tasks.",
      "Evaluated model performance using appropriate metrics and applied techniques to improve accuracy.",
      "Collaborated with the development team to build and validate practical AI/ML solutions.",
      "Gained hands-on experience with tools and libraries including Python, NumPy, Pandas, Scikit-learn, Matplotlib, and Jupyter Notebook.",
      "Strengthened understanding of the end-to-end Machine Learning lifecycle, from data preparation to model evaluation and deployment concepts."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-pill">
            <span className="pill-dot" />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A proven track record of engineering production-grade AI agents, RAG architectures, and enterprise intelligent systems.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`timeline-card-wrapper ${exp.isLatest ? 'is-latest' : ''}`}
            >
              <div className="timeline-node">
                <div className="node-ring">
                  <div className="node-core" />
                </div>
              </div>

              <div className="timeline-card glass">
                <div className="card-top-accent" />
                
                <header className="card-header">
                  <div className="role-meta">
                    <div className="role-title-row">
                      <h3 className="role-title">{exp.role}</h3>
                      {exp.isLatest && (
                        <span className="status-badge">
                          <span className="status-pulse" />
                          Most Recent
                        </span>
                      )}
                    </div>
                    <div className="company-row">
                      <span className="company-name">
                        <FaBriefcase className="meta-icon" />
                        {exp.company}
                      </span>
                      <span className="meta-separator">•</span>
                      <span className="job-type">{exp.type}</span>
                      <span className="meta-separator">•</span>
                      <span className="job-location">
                        <FaMapMarkerAlt className="meta-icon" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="date-badge">
                    <FaCalendarAlt className="date-icon" />
                    <span>{exp.date}</span>
                  </div>
                </header>

                <div className="card-divider" />

                <ul className="achievements-list">
                  {exp.points.map((point, i) => (
                    <li key={i} className="achievement-item">
                      <FaCheckCircle className="check-bullet" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
