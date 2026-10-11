import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaCheckCircle, FaComments, FaEnvelope, FaEye, FaLaptopCode, FaProjectDiagram, FaRobot } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'AI-Powered Web Applications',
    text: 'Full-stack web apps that connect polished interfaces with AI models, APIs, dashboards, and real user workflows.',
  },
  {
    icon: <FaBrain />,
    title: 'ML Prediction Systems',
    text: 'Machine learning systems for classification, prediction, risk scoring, recommendation, and decision support.',
  },
  {
    icon: <FaEye />,
    title: 'Computer Vision Solutions',
    text: 'Image classification, detection, visual inspection, disease recognition, and OpenCV/TensorFlow-powered pipelines.',
  },
  {
    icon: <FaComments />,
    title: 'NLP & Text Classification',
    text: 'Text classification, semantic similarity, document analysis, BERT fine-tuning, and NLP-powered data extraction.',
  },
  {
    icon: <FaComments />,
    title: 'GenAI Chatbots & RAG Assistants',
    text: 'Custom LLM assistants, retrieval pipelines, document Q&A systems, AI agents, and domain-specific chatbots.',
  },
  {
    icon: <FaRobot />,
    title: 'AI Automation Workflows',
    text: 'Automation systems that connect AI APIs, webhooks, backend logic, and business workflows into repeatable tools.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data Dashboards & Analytics',
    text: 'Readable analytics platforms that turn model outputs, trends, and operational data into clear decisions.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'End-to-End AI Products',
    text: 'Deployment-ready AI applications with frontend, backend, model integration, documentation, and handoff support.',
  },
];

const process = [
  { label: 'Understand the Problem', detail: 'Clarify the business goal, users, available data, constraints, success metrics, and the AI opportunity worth building.' },
  { label: 'Design the AI Workflow', detail: 'Map the model pipeline, data flow, frontend screens, backend APIs, automation steps, and deployment approach.' },
  { label: 'Build & Integrate Models', detail: 'Train or integrate ML, CV, NLP, or GenAI models and connect them with production-minded app architecture.' },
  { label: 'Test & Improve', detail: 'Evaluate outputs, improve model behavior, tune UX states, handle edge cases, and make the system more reliable.' },
  { label: 'Deploy & Handoff', detail: 'Prepare the final product with deployment support, documentation, maintainable code, and a clear delivery handoff.' },
];

const workTogetherHref = 'https://mail.google.com/mail/?view=cm&fs=1&to=keerioumaidali@gmail.com&su=AI%20Project%20Inquiry&body=Hi%20Umaid%2C%0A%0AI%20would%20like%20to%20discuss%20an%20AI%2FML%20project%20with%20you.%0A%0AProject%20idea%3A%0ABudget%2Ftimeline%3A%0ABest%20way%20to%20contact%20me%3A%0A';

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Services = () => {
  const [openStep, setOpenStep] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-orb services-orb-one" />
      <div className="services-orb services-orb-two" />

      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-kicker">Available for selected AI builds</span>
        <h2 className="section-title">Let&apos;s Build <span className="gradient-text">Intelligent Solutions</span></h2>
        <p>
          I help clients, companies, and teams build deployment-ready AI products that connect machine learning models, backend APIs, frontend interfaces, automation workflows, and clear user experiences.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            className="service-card glass"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="collab-panel glass"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="collab-copy">
          <span className="section-kicker">Professional Collaboration Workflow</span>
          <h3>How I collaborate with clients and teams to build AI products</h3>
          <p>I work with a structured process that starts with the real problem, then moves into AI workflow design, model integration, testing, deployment, and clear handoff. The goal is not only to build a model, but to ship a useful AI product that people can actually use.</p>
          <div className="collab-highlights">
            <span><FaCheckCircle /> Clear technical planning</span>
            <span><FaCheckCircle /> Frontend, backend, and model integration</span>
            <span><FaCheckCircle /> Deployment-ready delivery</span>
          </div>
          <a className="btn primary-btn" href={workTogetherHref}>
            Let&apos;s Work Together <FaEnvelope aria-hidden="true" />
          </a>
        </div>

        <div className="process-accordion">
          {process.map((step, index) => (
            <motion.div
              key={step.label}
              className="process-accordion-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <details open={openStep === index}>
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenStep(openStep === index ? null : index);
                  }}
                >
                  {step.label}
                </summary>
                <p>{step.detail}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
