import React from "react";
import ReactMarkdown from "react-markdown"
import {useLoaderData, useNavigate} from "react-router-dom"
import "./BlogEntry.css"

const BlogEntry = () => {
  const navigate = useNavigate();
  const {text} = useLoaderData()
  
  return (
    <React.Fragment>
      <button className="back-button" onClick={() => navigate(-1)}>{"< Back"}</button>
      <div className="post-content">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </React.Fragment>
  )
}

export default BlogEntry