import { FaAws, FaCode } from 'react-icons/fa';
import {
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiGooglecolab,
  SiHuggingface,
  SiJupyter,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from 'react-icons/si';
import './TechStack.css';

const tools = [
  { name: 'Python', icon: <SiPython /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  { name: 'Hugging Face', icon: <SiHuggingface /> },
  { name: 'LangChain', icon: <SiLangchain /> },
  { name: 'Streamlit', icon: <SiStreamlit /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Jupyter Notebook', icon: <SiJupyter /> },
  { name: 'Google Colab', icon: <SiGooglecolab /> },
  { name: 'VS Code', icon: <FaCode /> },
];

const TechStack = () => {
  const repeatedTools = [...tools, ...tools];

  return (
    <section className="tech-stack-section" aria-label="AI development stack">
      <div className="tech-stack-header">
        <span className="section-kicker">AI Development Stack</span>
        <h2 className="section-title">Tools & Technologies <span className="gradient-text">I Work With</span></h2>
      </div>

      <div className="logo-slider">
        <div className="logo-track">
          {repeatedTools.map((tool, index) => (
            <div className="tool-logo-card" key={`${tool.name}-${index}`}>
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
