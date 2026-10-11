import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const projects = [
    {
      title: "PolyGuard AI",
      subtitle: "Real-Time Semantic & Code Similarity Analyzer",
      video: "https://www.youtube.com/embed/LRslO_kg6EE?autoplay=1&mute=1&loop=1&playlist=LRslO_kg6EE&controls=0&showinfo=0&rel=0",
      github: "https://github.com/UmedAli123/PolyGuard-AI",
      tech: ["React.js", "FastAPI", "Sentence-Transformers", "AST", "RoBERTa"],
      overview: "PolyGuard AI is a plagiarism and authorship-risk analysis platform designed to compare writing and source code beyond simple keyword matching. It combines semantic embeddings, language-aware text comparison, AST-based code analysis, and AI-generated content signals into a single risk dashboard.",
      role: "I designed the frontend experience, built the analysis workflow, connected the backend APIs, and shaped the scoring presentation so users could understand why a submission was flagged.",
      impact: "The system supports multilingual similarity checks across 50+ languages and gives reviewers a structured way to inspect semantic overlap, logic cloning, and AI-content probability.",
      points: [
        "Implemented cross-lingual semantic plagiarism detection across 50+ languages.",
        "Engineered an AST-based engine to detect logic cloning in Python, JS, and C++.",
        "Integrated AI-generated content detection to identify LLM-produced text.",
        "Designed a premium glassmorphic dashboard with real-time risk assessment."
      ]
    },
    {
      title: "MediIntel AI",
      subtitle: "Intelligent Medical Diagnosis & Explainable AI",
      video: "https://www.youtube.com/embed/tyWshUeNt7o?autoplay=1&mute=1&loop=1&playlist=tyWshUeNt7o&controls=0&showinfo=0&rel=0",
      github: "https://github.com/UmedAli123/MediIntel_AI",
      tech: ["React.js", "Flask", "SpaCy", "SHAP", "Scikit-learn"],
      overview: "MediIntel AI is a clinical decision-support prototype that turns patient symptoms and structured inputs into model-assisted diagnostic insights. It emphasizes explainability so predictions are not presented as black boxes.",
      role: "I worked on the NLP pipeline, dashboard design, model integration, and explainability layer that surfaces important features behind predictions.",
      impact: "The project demonstrates how AI can support triage-style workflows with symptom extraction, transparent model reasoning, and clean patient-facing analytics.",
      points: [
        "Developed a smart NLP pipeline using SpaCy for automated symptom extraction.",
        "Integrated SHAP-based Explainable AI to provide clinical transparency.",
        "Built an interactive health analytics dashboard for tracking patient data."
      ]
    },
    {
      title: "GlucoPredict AI",
      subtitle: "Intelligent Diabetes Prediction System",
      video: "https://www.youtube.com/embed/SUOLDRC4hBc?autoplay=1&mute=1&loop=1&playlist=SUOLDRC4hBc&controls=0&showinfo=0&rel=0",
      github: "https://github.com/UmedAli123/GlucoPredict_AI",
      tech: ["Python", "Machine Learning", "React", "FastAPI"],
      overview: "GlucoPredict AI is a diabetes risk prediction application that combines patient health indicators, preprocessing, trained ML models, and a dashboard for interpreting risk levels.",
      role: "I handled data preparation, model workflow, backend API structure, and the user interface that communicates prediction outputs clearly.",
      impact: "The project shows an end-to-end ML product flow: feature engineering, model inference, API delivery, and a usable monitoring-style dashboard.",
      points: [
        "Predictive analytics pipeline for early detection and risk assessment.",
        "End-to-end data processing, feature engineering, and model deployment.",
        "User-friendly dashboard for continuous monitoring."
      ]
    },
    {
      title: "GradeFlow AI",
      subtitle: "Automated Evaluation Platform",
      video: "https://www.youtube.com/embed/mMMHJHdiKAA?autoplay=1&mute=1&loop=1&playlist=mMMHJHdiKAA&controls=0&showinfo=0&rel=0",
      github: "https://github.com/UmedAli123/GradeFlow-AI",
      tech: ["AI/ML", "Python", "Full-stack"],
      overview: "GradeFlow AI is an automated assessment platform built to reduce repetitive grading work and make rubric-based evaluation more consistent.",
      role: "I contributed to the evaluation logic, user workflow, and full-stack interface for educators and administrators.",
      impact: "The platform demonstrates how AI-assisted evaluation can reduce manual grading effort while keeping scoring criteria visible and reviewable.",
      points: [
        "Streamlined grading processes using advanced machine learning models.",
        "Automated rubric-based assessment reducing manual evaluation time.",
        "Premium UI interface for educators and administrators."
      ]
    },
    {
      title: "SmartStudent AI",
      subtitle: "Student Analytics Platform",
      video: "https://www.youtube.com/embed/FPVdAzL10d0?autoplay=1&mute=1&loop=1&playlist=FPVdAzL10d0&controls=0&showinfo=0&rel=0",
      github: "https://github.com/UmedAli123/SmartStudent-AI",
      tech: ["Generative AI", "Data Analytics", "React"],
      overview: "SmartStudent AI is a student analytics platform focused on identifying performance patterns, surfacing risks, and presenting academic insights through an interactive dashboard.",
      role: "I designed dashboard components, organized analytics views, and connected predictive/student-performance logic into the interface.",
      impact: "The project helps educators quickly identify at-risk students and understand trends through visual summaries rather than raw spreadsheets.",
      points: [
        "Data-driven insights for student performance tracking.",
        "Predictive modeling to identify at-risk students.",
        "Comprehensive dashboard visualizations."
      ]
    },
    {
      title: "AgentForge",
      subtitle: "Multi-Agent Intelligence Platform",
      video: "https://www.youtube.com/embed/78lrgXYAOh0?autoplay=1&mute=1&loop=1&playlist=78lrgXYAOh0&controls=0&showinfo=0&rel=0",
      github: "https://github.com/UmedAli123/AgentForge",
      tech: ["FastAPI", "React", "LangGraph", "Groq/Gemini"],
      overview: "AgentForge is a sophisticated autonomous research engine that utilizes a swarm of specialized AI agents to perform deep, verified, and structured research on any topic. Powered by LangGraph, it orchestrates a complex workflow from planning to report generation in seconds.",
      role: "I developed the multi-agent swarm architecture using LangGraph, integrated dynamic LLM provider switching, and built a premium glassmorphic React frontend for real-time research visualization.",
      impact: "The platform acts as a fully autonomous research team, breaking down complex queries, fetching live web data, verifying facts, and compiling professional, exportable Markdown reports instantly.",
      points: [
        "Engineered a 6-agent LangGraph swarm (Planner, Researcher, Summarizer, Fact-Checker, Critic, Generator).",
        "Implemented an Auto-Fallback System ensuring zero downtime across multiple LLM APIs.",
        "Designed a sleek, dark-mode glassmorphic interface with Framer Motion animations."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="projects-subtitle">
          A curated selection of production-grade AI systems, autonomous agents, and full-stack machine learning applications.
        </p>
        <div className="projects-cta-row">
          <a
            href="https://github.com/UmedAli123"
            target="_blank"
            rel="noreferrer"
            className="projects-github-cta"
          >
            <span>Explore more repositories on GitHub</span>
            <FaExternalLinkAlt aria-hidden="true" className="cta-icon" />
          </a>
        </div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-70px", amount: 0.18 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="project-card glass"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProject(project)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setActiveProject(project);
              }
            }}
          >
            {project.video ? (
              <div className="video-container">
                {project.video.includes('youtube') ? (
                  <iframe 
                    src={project.video} 
                    className="project-video"
                    allow="autoplay; encrypted-media"
                    title={project.title}
                    style={{ pointerEvents: 'none', border: 'none', width: '100%', height: '100%' }}
                  />
                ) : (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="project-video"
                  />
                )}
              </div>
            ) : (
              <div className="video-placeholder">
                <span>No Video Available</span>
              </div>
            )}
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="subtitle">{project.subtitle}</span>
              
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                GitHub repository <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {activeProject && (
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveProject(null)}
        >
          <motion.article
            className="project-modal glass"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details">
              <FaTimes aria-hidden="true" />
            </button>

            <div className="modal-project-media">
              {activeProject.video ? (
                <div className="modal-video-wrap">
                  {activeProject.video.includes('youtube') ? (
                    <iframe 
                      src={activeProject.video} 
                      className="modal-video"
                      allow="autoplay; encrypted-media"
                      title={activeProject.title}
                      style={{ border: 'none', width: '100%', height: '100%' }}
                    />
                  ) : (
                    <video src={activeProject.video} autoPlay loop muted playsInline className="modal-video" />
                  )}
                </div>
              ) : (
                <div className="modal-video-placeholder">Computer Vision Final Year Project</div>
              )}
            </div>

            <div className="modal-content project-description-card">
              <span className="card-kicker">Project Deep Dive</span>
              <h3>{activeProject.title}</h3>
              <p className="modal-subtitle">{activeProject.subtitle}</p>

              <div className="modal-tech-stack">
                {activeProject.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="modal-detail-grid">
                <div>
                  <h4>Project / Demo</h4>
                  <p>{activeProject.overview}</p>
                </div>
                <div>
                  <h4>Problem It Solves</h4>
                  <p>{activeProject.impact}</p>
                </div>
                <div>
                  <h4>Technologies Used</h4>
                  <p>{activeProject.tech.join(', ')}</p>
                </div>
                <div>
                  <h4>AI/ML Features</h4>
                  <p>{activeProject.points.join(' ')}</p>
                </div>
                <div>
                  <h4>Practical Use Case</h4>
                  <p>{activeProject.role}</p>
                </div>
              </div>

              <h4>Key Features</h4>
              <ul className="modal-points">
                {activeProject.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="btn primary-btn modal-cta" href="https://mail.google.com/mail/?view=cm&fs=1&to=keerioumaidali@gmail.com&su=Similar%20AI%20Project%20Inquiry" target="_blank" rel="noreferrer">
                Contact for Similar Project
              </a>
            </div>
          </motion.article>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
