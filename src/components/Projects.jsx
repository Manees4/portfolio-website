import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "NetflixGPT",
    description: "A Netflix clone integrated with OpenAI for smart recommendations.",
    image: "https://th.bing.com/th?id=OIP.rgS4Z14yK6FWD_HueAUEKAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=15&dpr=1.3&pid=3.1&rm=2",
  },
  {
    title: "Crop Prediction System",
    description: "Machine learning-based crop recommendation system.",
    image: "https://th.bing.com/th?id=OIP.po6TgsmPWB1M-8a7Psd8uAHaHW&w=251&h=248&c=8&rs=1&qlt=30&o=6&cb=15&dpr=1.3&pid=3.1&rm=2",
  },
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce site with user authentication.",
    image: "https://th.bing.com/th?id=OIP.BVSJbqJ3TrTBIgPgf7F5GgHaFw&w=283&h=220&c=8&rs=1&qlt=30&o=6&cb=15&dpr=1.3&pid=3.1&rm=2",
  },
  {
    title: "Airbnb Clone",
    description: "An Airbnb-inspired platform for renting properties.",
    image: "https://th.bing.com/th?id=OIP.I8-tPbTg2QSHQkwzzxekaQHaFj&w=288&h=216&c=8&rs=1&qlt=30&o=6&cb=15&dpr=1.3&pid=3.1&rm=2",
  },
  {
   title: "YouTube API Project",
      description: "Fetching and displaying videos using YouTube API.",
      image: "https://th.bing.com/th?id=OIP.gXDAsM3eyXW3wlU8IMGrfgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=15&dpr=1.3&pid=3.1&rm=2",
  },
];

const Projects = () => {
  return (
    <section className="projects-wrapper classic-bg" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


