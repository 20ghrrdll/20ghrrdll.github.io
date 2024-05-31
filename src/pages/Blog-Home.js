import React, {useState} from 'react';
import BlogEntry from '../components/Blog-Entry'
import { postSummaries } from '../blog-posts/post-summaries';
import { useParams } from 'react-router';
import Footer from '../components/Footer';


const NUM_POSTS_PER_PAGE = 5

const BlogHome = () => {
  const {initialPage} = useParams()
  console.log({initialPage})

   const [pageNum, setPageNum] = useState(parseInt(initialPage))
  return (
    <div>
      <div>
        <h2>What has Carah been up to?</h2>
      </div>
      <BlogList pageNum={pageNum}/>
      <Footer className="footer"/>
    </div>
  );
}

const BlogList = ({pageNum}) => {
  console.log('rendered the blog list!')

  const indexStart = (pageNum - 1) * NUM_POSTS_PER_PAGE
  const indexEnd = pageNum * NUM_POSTS_PER_PAGE

  const blogSummariesOnPage = postSummaries.slice(indexStart, indexEnd)
   console.log({blogSummariesOnPage, pageNum})
  return (
    <div>
      {
        blogSummariesOnPage.map((summary, idx) => {
          return (
          <React.Fragment key={`${summary.id}-${idx}`}>
            <BlogEntry {...summary}/>
          </React.Fragment>
            )
        })
      }
    </div>
  )
}

export default BlogHome;