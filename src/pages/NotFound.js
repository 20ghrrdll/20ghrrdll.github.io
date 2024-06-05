import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <React.Fragment>
      <h2>Oops! That page wasn't found!</h2>
      <h4> Return to <Link to="/">Home</Link></h4>
    </React.Fragment>
  )
}

export default NotFound