import React from "react";
import ReactMarkdown from "react-markdown"
import {useLoaderData} from "react-router-dom"

const BlogEntry = () => {
  const {text} = useLoaderData()
  console.log({text})
  return (
    <div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default BlogEntry