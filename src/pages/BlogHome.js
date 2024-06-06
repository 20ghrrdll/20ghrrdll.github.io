import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogEntryCard from '../components/BlogEntryCard'


const BlogHome = () => {
  const {postSummaries, tag} = useLoaderData()
  return (
    <div>
      <div className='heading'>
        { tag ? <h2>{`Posts on "${tag}"`}</h2> : <h2>Blog</h2>}
      </div>
      <BlogList postSummaries={postSummaries}/>
    </div>
  );
}

const BlogList = ({postSummaries}) => {
  return (
    <div>
      {
        postSummaries.map((summary, idx) => {
          return (
          <React.Fragment key={`${summary.id}-${idx}`}>
            <BlogEntryCard {...summary}/>
          </React.Fragment>
            )
        })
      }
    </div>
  )
}

export default BlogHome;