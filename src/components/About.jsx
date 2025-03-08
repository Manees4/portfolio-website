import React, { useEffect, useState } from "react";
import "../styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-container");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-wrapper" id="about">
      <div className={`about-container ${isVisible ? "visible" : ""}`}>
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi, I'm <strong>Maneeswaran S</strong>, a passionate <strong>ReactJS Developer</strong> with a strong foundation in front-end technologies. 
          I specialize in creating dynamic, user-friendly web applications. My goal is to continuously learn and build impactful solutions.
        </p>
        
        <div className="about-section">
          <h3>🎓 Education</h3>
          <p>BE in Computer Science Engineering - Jeppiaar Engineering College</p>
        </div>
        
        <div className="about-section">
          <h3>💡 Skills</h3>
          <ul>
            <li>ReactJS, JavaScript, HTML, CSS</li>
            <li>Redux, Firebase, API Integration</li>
            <li>Bootstrap, Tailwind CSS</li>
            <li>Python, SQL</li>
          </ul>
        </div>
        
        <div className="about-section">
          <h3>💼 Experience</h3>
          <p>Intern at <strong>Code Casa</strong> (3 months) - Gained hands-on experience in web development.</p>
        </div>
        
        <div className="about-section">
          <h3>📜 Certifications</h3>
          <ul>
            <li>ReactJS & Frontend Development (Namasthe javascript)</li>
            <li>Web designing and development  (ErrorsMakeClever Academy)</li>
            <li>Python fullstack (Accord Info Matrix Institution)</li>
            <li>ChatGpt (Guvi)</li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


