import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import './Card.css'
import './BlogEntryCard.css'

const BlogEntryCard = ({id, title, date, description, tags}) => {
  const titleLink = `/blog/post/${id}`
  return (
    <div className="blog-entry-card">
      <div className="card-body">
        <Link to={titleLink} className="card-link">
          <h2 className={`card-title`}>{title}</h2> 
        </Link>
        <h4> {date}</h4>
        <p>{description}</p>
      <div className= "tag-container">
        {tags.map(tag => <Tag tagName={tag} key={`${id}+${tag}`}/>)}
      </div>
      </div>
    </div>
  );
}

export default BlogEntryCard;