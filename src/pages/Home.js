import React from 'react';
import mePhoto from '../imgs/CircleHomePhoto.png';

const Home = () => {
  return (
    <div className="home-container">
      <img src={mePhoto} alt="Carah Alexander" width="100%"/>
      <p>Here's some stuff about me!</p>
      <div className="link-container">
        <a href="https://www.linkedin.com/in/carahalexander/">LinkedIn</a>
        <a href="https://github.com/20ghrrdll">Github</a>
      </div>
    </div>
  );
}

export default Home;