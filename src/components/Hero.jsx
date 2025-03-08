import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import profileImage from "../assets/p.png";

const Hero = () => {
  const [zoomEffect, setZoomEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setZoomEffect(true);
        } else {
          setZoomEffect(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-container classic-bg" id="home">
      <div className={"hero-content fade-in " + (zoomEffect ? "zoom-out" : "zoom-in")}>
        <h1 className="classic-title">Welcome, I'm <span className="highlight">Maneeswaran S</span></h1>
        <p className="classic-subtitle">Frontend Developer | ReactJS Enthusiast | Tech Innovator</p>
        <a href="#projects" className="btn btn-classic slide-in">Explore My Work</a>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Maneeswaran S" className={"full-image rounded-bottom " + (zoomEffect ? "zoom-in" : "zoom-out")} />
      </div>
    </section>
  );
};

export default Hero;

  
  