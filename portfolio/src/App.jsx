import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;