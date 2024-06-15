import React from 'react';
import Card from './Card'
import './Card.css'
// import './TimelineCard.css'

const TimelineCard = ({
  title,
  date,
  description,
  responsibilities,
}) => {
  return (
    <Card title={title.toUpperCase()} date={date} isTimeline={true}>
      <p className="card-detail">{description}</p>
      { responsibilities && (
        <ul className="responsibility">
          {responsibilities.map((responsibility, index) => (
            <li key={`${responsibility[0]}-${index}`}>{responsibility}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default TimelineCard;
