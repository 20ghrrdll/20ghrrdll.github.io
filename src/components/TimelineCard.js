import React from 'react';
import './TimelineCard.css'

const TimelineCard = ({
  title,
  date,
  description,
  responsibilities,
}) => {
  return (
    <div className="card">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h4> {`(${date})`}</h4>
          <p className="card-detail">{description}</p>
          { responsibilities && (
            <ul className="responsibility">
              {responsibilities.map((responsibility, index) => (
                <li key={`${responsibility[0]}-${index}`}>{responsibility}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
};

export default TimelineCard;
