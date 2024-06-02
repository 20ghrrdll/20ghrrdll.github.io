import React, {useState} from 'react';
import BlogEntryCard from '../components/Blog-Entry-Card'
import { postSummaries } from '../blog-metadata/post-summaries';
import { useParams } from 'react-router';
import Footer from '../components/Footer';

const NUM_POSTS_PER_PAGE = 5

const BlogHome = () => {
  const {initialPage} = useParams()

   const [pageNum, setPageNum] = useState(parseInt(initialPage))
  return (
    <div>
      <div className='heading'>
        <h2>Blog</h2>
      </div>
      <BlogList pageNum={pageNum}/>
      <Footer className="footer"/>
    </div>
  );
}

const BlogList = ({pageNum}) => {
  const indexStart = (pageNum - 1) * NUM_POSTS_PER_PAGE
  const indexEnd = pageNum * NUM_POSTS_PER_PAGE

  const blogSummariesOnPage = postSummaries.slice(indexStart, indexEnd)
  return (
    <div>
      {
        blogSummariesOnPage.map((summary, idx) => {
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