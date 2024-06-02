import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css'

const Card = ({
  title,
  titleLink,
  date,
  isTimeline = false,
  children
}) => {

  console.log({titleLink})
  return (
    <div className={`card ${isTimeline ? "timeline-card" : ""}`}>
        <div className={`card-body ${isTimeline ? "timeline-card" : ""}`}>
         { titleLink ?
            (
              <NavLink to={titleLink}>
                <h2 className={`card-title ${isTimeline ? "timeline-card" : ""}`}>{title}</h2> 
              </NavLink>
            ) : <h2 className={`card-title ${isTimeline ? "timeline-card" : ""}`}>{title}</h2>
          }
          <h4> {date}</h4>
          {children}
        </div>
      </div>
  );
};

export default Card;
