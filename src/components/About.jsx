import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="about parallax-section" data-parallax-speed="0.12" ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text-section">
            <p className="about-text">
             I’m Sparsh Sharma, a Computer Science student at Lovely Professional University with a strong passion for software development and problem-solving.
            </p>
            <p className="about-text">
             I have a solid command over programming and Data Structures & Algorithms, having solved 550+ problems, which helps me write efficient, optimized, and reliable code. I enjoy tackling complex challenges and building scalable solutions with a strong focus on performance and clean design.
            </p>
            <p className="about-text">
             My experience with languages like Python and modern development tools has strengthened my ability to develop robust applications and understand system-level thinking.
            </p>
            <p className="about-text"> 
              I am continuously improving my skills to become a proficient Software Development Engineer, capable of designing high-performance systems and contributing to impactful, real-world software solutions.
            </p>
            <div className="about-location">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Phagwara, Punjab, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
