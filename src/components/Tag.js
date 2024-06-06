import React from "react";
import { Link } from "react-router-dom";
import "./Tag.css"

const Tag = ({tagName}) => {
  return (
    <Link to={`/blog/${tagName}`} className="tag-link">
      <h5 className="tag">
        {tagName}
      </h5>
    </Link>
  )
}

export default Tag