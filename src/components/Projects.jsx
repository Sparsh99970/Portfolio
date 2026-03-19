import { useScrollAnimation } from '../hooks/useScrollAnimation'
import WheelWingsImg from '../assets/WheelWings.png'
import SkyBotImg from '../assets/SkyBot.png'
import MovieManiaImg from '../assets/FAke.png'
import CipherCert from '../assets/Cipher.png'

function Projects() {
  const ref = useScrollAnimation()
  const trainingRef = useScrollAnimation()
  
  const handleCertificateClick = (certImage) => {
    window.open(certImage, '_blank')
  }
  
  const projects = [
    {
      id: 1,
      title: "Fake Social Media Account Detector",
      description: "ML classification system achieving 98% training and 96% testing accuracy to accurately identify and flag fake social media accounts using advanced feature engineering and model optimization.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      skillsDemonstrated: ["Machine Learning", "Data Analysis", "Feature Engineering", "Model Optimization"],
      date: "Oct 2025",
      link: "https://github.com/Sparsh99970",
      category: "Machine Learning",
      image: MovieManiaImg,
      features: ["98% Training Accuracy", "96% Testing Accuracy", "Multi-Algorithm Comparison", "Advanced Feature Scaling"]
    },
    {
      id: 2,
      title: "Tour Managing Website",
      description: "Full-stack platform enabling users to explore destinations, manage bookings, and view itineraries with intuitive dashboards and responsive design for seamless user experience.",
      technologies: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
      skillsDemonstrated: ["Frontend Development", "UI/UX Design", "Responsive Design", "State Management"],
      date: "Oct 2024",
      link: "https://travel-planner123.netlify.app/",
      category: "Full Stack",
      image: WheelWingsImg,
      features: ["Dynamic UI Components", "Destination Explorer", "Booking Management", "Interactive Dashboards"]
    },
  ]

  const trainingSessions = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      provider: "Cipher School",
      duration: "Jun 2024 - Jul 2025",
      description: "Completed an intensive training program focused on Data Structures and Algorithms with extensive practice on coding problems.",
      highlights: [
        "Mastered Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs",
        "Solved 300+ coding problems on platforms like LeetCode and GeeksforGeeks",
        "Strengthened analytical and problem-solving skills through coding challenges"
      ],
      certificate: CipherCert
    }
  ]

  return (
    <>
      <section id="projects" className="projects parallax-section" data-parallax-speed="0.2" ref={ref}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Innovative solutions crafted with passion and cutting-edge technologies</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card fade-in">
                <div className="project-showcase">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="skills-demonstrated">
                    <h4>Skills Demonstrated:</h4>
                    <div className="skills-demo-tags">
                      {project.skillsDemonstrated.map((skill, index) => (
                        <span key={index} className="skill-demo-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-features">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-tech">
                    <h4>Tools Used:</h4>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="training parallax-section" data-parallax-speed="0.2" ref={trainingRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Training</h2>
            <p className="section-subtitle">Specialized programs designed to enhance technical expertise</p>
          </div>
          <div className="training-container">
            {trainingSessions.map((training) => (
              <div key={training.id} className="training-card fade-in">
                <div className="training-header">
                  <h3 className="training-title">{training.title}</h3>
                  <span className="training-provider">{training.provider}</span>
                </div>
                
                <span className="training-duration">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {training.duration}
                </span>
                
                <p className="training-description">{training.description}</p>
                
                <div className="training-highlights">
                  <h4>Key Learnings:</h4>
                  <ul>
                    {training.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                {training.certificate && (
                  <div className="training-certificate">
                    <p className="certificate-label">Certificate of Completion</p>
                    <img 
                      src={training.certificate} 
                      alt={`${training.title} Certificate`}
                      className="certificate-image"
                      onClick={() => handleCertificateClick(training.certificate)}
                      style={{ cursor: 'pointer' }}
                      title="Click to view full certificate"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
