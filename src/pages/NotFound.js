import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h2>Oops! That page wasn't found! Return to 
      <Link to="/" className="icon">Home</Link>
    </h2>
  )
}

export default NotFound