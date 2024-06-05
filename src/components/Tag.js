import React from "react";
import { NavLink } from "react-router-dom";
import "./Tag.css"

const Tag = ({tagName}) => {
  return (
    <NavLink to={`/blog/${tagName}`} className="tag-link">
      <h5 className="tag">
        {tagName}
      </h5>
    </NavLink>
  )
}

export default Tag