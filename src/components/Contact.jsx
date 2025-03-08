import React from "react";
import "../styles/Contact.css";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-info">Feel free to reach out for collaboration or inquiries!</p>
      
      <div className="contact-phone">
        <FaPhone /> +91 9345899976
      </div>
      
      <div className="contact-email">
        <FaEnvelope /> manees444waran@gmail.com
      </div>
      
      <div className="contact-social">
        <a href="https://www.linkedin.com/in/maneeswaran-s-522aaa24a/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin /> LinkedIn
        </a>
        <br />
        <a href="https://github.com/Manees4" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub /> GitHub
        </a>
      </div>
      
      <div className="contact-emoji">📞💬</div>
    </section>
  );
};

export default Contact;