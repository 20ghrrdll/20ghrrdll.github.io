import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
import "./ProjectCard.css"

const ProjectCard = ({ title, dates, imgSrc, imgDescription, projectDescription, seeMoreLink}) => {
  return (
    <div className="project-card">
      <div>
        <img src={imgSrc} alt={imgDescription}/>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h4>{dates}</h4>
        <p>{projectDescription}</p>
        <Link to={seeMoreLink} className="see-more-link"><h5 className="see-more">See more...</h5></Link>
      </div>
    </div>
  )
}

export default ProjectCard