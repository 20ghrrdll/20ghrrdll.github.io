import React from 'react';
import './Card.css'

const Card = ({
  title,
  date,
  isTimeline = false,
  children
}) => {
  return (
    <div className={`card ${isTimeline ? "timeline-card" : ""}`}>
        <div className={`card-body ${isTimeline ? "timeline-card" : ""}`}>
          <h2 className={`card-title ${isTimeline ? "timeline-card" : ""}`}>{title}</h2>
          <h4> {`(${date})`}</h4>
          {children}
        </div>
      </div>
  );
};

export default Card;
