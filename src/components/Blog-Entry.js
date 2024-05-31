import React from 'react';
import Card from './Card'
import './Card.css'

const BlogEntry = ({title, date, description, tags}) => {

  return (
      <Card title={title} date={date}>
        <p>{description}</p>
      </Card>
  );
}

export default BlogEntry;