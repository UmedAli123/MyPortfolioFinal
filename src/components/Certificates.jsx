import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const certificates = [
  {
    title: 'Applied AI Foundations',
    issuer: 'OpenAI',
    date: 'Issued Sep 2026',
    focus: 'Foundational enterprise AI architectures, OpenAI API integration, fine-tuning, context management, and safety protocols.',
    credentialUrl: 'https://oaiacademy.credential.net/892c1c6b-94f6-4842-9977-206157f1e049',
  },
  {
    title: 'Introduction to Subagents & Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Issued Sep 2026',
    focus: 'Autonomous agentic systems, subagent delegation, context window optimization, tool-use orchestration, and Claude workflows.',
    credentialUrl: 'https://verify.skilljar.com/c/36ps5ginfdiw',
  },
  {
    title: 'NCA-GENL: NVIDIA-Certified Generative AI & LLMs Specialization',
    issuer: 'NVIDIA / Udemy',
    date: 'Issued May 2026',
    focus: 'Transformer architectures, prompt engineering, NeMo framework, TensorRT optimization, and Triton Inference Server deployment.',
    credentialUrl: 'https://www.linkedin.com/in/umaid-ali-keerio/overlay/Certifications/416854957/treasury/?profileId=ACoAADx4AzoBfa3aU1pHAAwfMZLiVimTd3mbpP0',
  },
  {
    title: 'Artificial Intelligence and Career Empowerment',
    issuer: 'University of Maryland (Smith School of Business)',
    date: 'Issued Sep 2026',
    focus: 'Enterprise AI adoption, shift from predictive to generative models, Responsible AI, governance, and business value delivery.',
    credentialUrl: 'https://www.linkedin.com/in/umaid-ali-keerio/overlay/Certifications/1474366874/treasury/?profileId=ACoAADx4AzoBfa3aU1pHAAwfMZLiVimTd3mbpP0',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    date: 'Issued Sep 2026',
    focus: 'Fundamental generative AI principles, large language models, attention mechanisms, and Google Cloud AI integrations.',
    credentialUrl: 'https://www.skills.google/public_profiles/9fe49df2-5801-477c-a911-864326c212bd/badges/28309258',
  },
  {
    title: 'Generative AI Application Developer Certificate (Top Performer)',
    issuer: 'NCEAC-HEC & ULEFUSA',
    date: 'Issued May 2026',
    focus: 'Hands-on Generative AI, LLMs, RAG systems, Autonomous AI Agents, and modern production AI application development.',
    credentialUrl: 'https://www.linkedin.com/in/umaid-ali-keerio/overlay/Certifications/136047497/treasury/?profileId=ACoAADx4AzoBfa3aU1pHAAwfMZLiVimTd3mbpP0',
  },
  {
    title: 'Introduction to Model Context Protocol (MCP)',
    issuer: 'Anthropic',
    date: 'Issued May 2026',
    focus: 'Connecting LLMs with tools, data sources, server integrations, and extending Claude agents with Model Context Protocol standards.',
    credentialUrl: 'https://verify.skilljar.com/c/bswcfg8wsq8f',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'freeCodeCamp',
    date: 'Issued Sep 2026',
    focus: 'Deep learning with TensorFlow, neural networks, supervised/unsupervised learning, image classification, and predictive models.',
    credentialUrl: 'https://freecodecamp.org/certification/fcca5e86801-7853-45e7-b9f7-013c40bf1ff6/machine-learning-with-python-v7',
  },
  {
    title: 'Fine Tune BERT for Text Classification with TensorFlow',
    issuer: 'Coursera',
    date: 'Issued Jul 2023',
    focus: 'Transformer-based NLP, BERT fine-tuning, tokenization pipelines, classification heads, and evaluation metrics.',
    credentialUrl: 'https://coursera.org/verify/BLVLLA5DU7LF',
  },
  {
    title: 'Technology & Data Analytics Job Simulation',
    issuer: 'Deloitte / Forage',
    date: 'Issued Jun – Jul 2026',
    focus: 'Real-world technology consulting, client problem solving, analytics dashboards, and production software engineering practices.',
    credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a402291d5fe765bac4bea48_1782589516317_completion_certificate.pdf',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <motion.div
        className="certificates-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="card-kicker">Learning Proof</span>
        <h2 className="section-title">Licenses & <span className="gradient-text">Certificates</span></h2>
        <p>
          These certifications support my practical work in machine learning, deep learning, NLP, model training, and applied AI development.
        </p>
      </motion.div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            className="certificate-card glass"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.62, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
          >
            <span className="certificate-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{certificate.title}</h3>
            <div className="certificate-meta">
              <strong>{certificate.issuer}</strong>
              {certificate.date && <span className="certificate-date badge">{certificate.date}</span>}
            </div>
            <p>{certificate.focus}</p>
            <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">
              See credential <FaExternalLinkAlt aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
