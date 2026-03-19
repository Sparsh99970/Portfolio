import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Trophy, Star, Award, Certificate } from './Icons'

function Achievements() {
  const ref = useScrollAnimation()
  const achievements = [
    {
      id: 1,
      title: "400+ DSA Problems Solved",
      description: "Solved over 400 Data Structures and Algorithms problems across platforms like LeetCode and GeeksforGeeks, strengthening problem-solving and algorithmic thinking skills",
      Icon: Trophy
    },
    {
      id: 2,
      title: "98% ML Model Accuracy",
      description: "Achieved 98% training accuracy and 96% testing accuracy in the Fake Social Media Account Detector using optimized Random Forest algorithms with hyperparameter tuning",
      Icon: Star
    },
    {
      id: 3,
      title: "Advanced Data Structures Expertise",
      description: "Mastered complex data structures including Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs through intensive training and competitive problem-solving",
      Icon: Award
    }
  ]

  const softSkills = [
    {
      id: 1,
      skill: "Problem Solving",
      description: "Strong analytical mindset to break down complex problems and develop efficient solutions"
    },
    {
      id: 2,
      skill: "Collaboration",
      description: "Effective teamwork and communication in group projects and peer-based problem-solving"
    },
    {
      id: 3,
      skill: "Adaptability",
      description: "Quick learner who adapts to new technologies and frameworks with ease"
    }
  ]

  const technicalActivities = [
    {
      id: 1,
      activity: "Competitive Programming",
      description: "Active participant on LeetCode and GeeksforGeeks; solved 400+ DSA problems"
    },
    {
      id: 2,
      activity: "Open Source Contributions",
      description: "Contributing to GitHub repositories and maintaining clean, well-documented code"
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "Data Structure and Algorithms",
      provider: "Cipher School",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1APaFBT7xDuvf2A6LvDEExgThu-9sDnhO/view?usp=sharing"
    },
    {
      id: 2,
      title: "Master Generative AI & Generative AI tools Basics",
      provider: "Coursera",
      date: "2025",
      link: "https://drive.google.com/file/d/1UD_OUjPayPpjwYCD3WQLWlPJBV9Qy7Br/view?usp=sharing"
    },
    {
      id: 3,
      title: "C Programming Specialization",
      provider: "Infosys",
      date: "2024",
      link: "https://drive.google.com/file/d/1mFN3-0n3_n_kYno88leobddNK9AMLfGP/view?usp=sharing"
    }
  ]

  return (
    <section id="achievements" className="achievements parallax-section" data-parallax-speed="0.1" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle">Recognition and credentials that demonstrate my expertise</p>
        </div>
        
        <div className="achievements-wrapper">
          <div className="achievements-section">
            <div className="subsection-header">
              <Award />
              <h3 className="subsection-title">Key Achievements</h3>
            </div>
            <div className="achievements-list">
              {achievements.map((item) => (
                <div key={item.id} className="achievement-item fade-in">
                  <div className="achievement-icon-wrapper">
                    <item.Icon />
                  </div>
                  <div className="achievement-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills-section">
            <div className="subsection-header">
              <Star />
              <h3 className="subsection-title">Soft Skills</h3>
            </div>
            <div className="soft-skills-list">
              {softSkills.map((item) => (
                <div key={item.id} className="soft-skill-item fade-in">
                  <h4>{item.skill}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="technical-activities-section">
            <div className="subsection-header">
              <Trophy />
              <h3 className="subsection-title">Technical Extracurriculars</h3>
            </div>
            <div className="activities-list">
              {technicalActivities.map((item) => (
                <div key={item.id} className="activity-item fade-in">
                  <h4>{item.activity}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <div className="subsection-header">
              <Certificate />
              <h3 className="subsection-title">Certifications</h3>
            </div>
            <div className="certifications-list">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-item fade-in">
                  <div className="certification-number">{cert.id}</div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="cert-provider">{cert.provider}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link-btn"
                    >
                      View Certification
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
