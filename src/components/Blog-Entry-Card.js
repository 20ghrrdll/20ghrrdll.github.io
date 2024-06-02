import React from 'react';
import Card from './Card'
import './Card.css'

const BlogEntryCard = ({id, title, date, description, tags}) => {
  const titleLink = `/blog/post/${id}`
  return (
      <Card title={title} date={date} titleLink={titleLink}>
        <p>{description}</p>
      </Card>
  );
}

export default BlogEntryCard;