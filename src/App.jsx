import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contact />
      <About/>
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;

