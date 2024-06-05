import React from 'react';
import Card from './Card'
import Tag from './Tag';
import './Card.css'
import './Blog-Entry-Card.css'

const BlogEntryCard = ({id, title, date, description, tags}) => {
  const titleLink = `/blog/post/${id}`
  return (
      <Card title={title} date={date} titleLink={titleLink}>
        <p>{description}</p>
        <div className= "tags-container">
          {tags.map(tag => <Tag tagName={tag} key={`${id}+${tag}`}/>)}
        </div>
      </Card>
  );
}

export default BlogEntryCard;