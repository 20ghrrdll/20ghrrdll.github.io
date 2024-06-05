import React from 'react';
import Footer from '../components/Footer';
import "./Projects.css"

const Projects = () => {
  return (
    <>
    <div className="projects">
      <div className="heading">
        <h2>Projects</h2>
      </div>
      <div className='content'>
        <h4>Coming soon! If you want to see my work in progress, check out my</h4>
        <a className="social-link" href="https://github.com/20ghrrdll">Github</a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Projects