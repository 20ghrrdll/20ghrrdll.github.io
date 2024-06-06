import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({
  title,
  titleLink,
  date,
  isTimeline = false,
  children
}) => {

  return (
    <div className={`card ${isTimeline ? "timeline-card" : ""}`}>
        <div className={`card-body ${isTimeline ? "timeline-card" : ""}`}>
         { titleLink ?
            (
              <Link to={titleLink} className="card-link">
                <h2 className={`card-title ${isTimeline ? "timeline-card" : ""}`}>{title}</h2> 
              </Link>
            ) : <h2 className={`card-title ${isTimeline ? "timeline-card" : ""}`}>{title}</h2>
          }
          <h4> {date}</h4>
          {children}
        </div>
      </div>
  );
};

export default Card;
