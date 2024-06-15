import React from 'react';
import ProjectCard from '../components/ProjectCard'
import "./Projects.css"

const projectData = [
  {
    title: "Manuscript Mate",
    dates: "April 2024 - present",
    imgSrc: `${process.env.PUBLIC_URL}/img/projects/UpdatedMMLogo.png`,
    imgDescription: "Icon for Manuscript Mate. Two books, holding hands, one with a blue bookmark and the other with a green bookmark.",
    projectDescription: "A project to help folks find books they'll love. Stay tuned for more context!",
    seeMoreLink: "/blog/Manuscript Mate",
  },
]

const Projects = () => {
  return (
    <>
    <div className="projects">
      <div className="heading">
        <h2>PROJECTS</h2>
      </div>
      <div className='content'>
        {projectData.map((datum, idx) => <ProjectCard {...datum} key={`${datum.title}-${idx}`}/>)}
      </div>
    </div>
    </>
  );
};

export default Projects