import React from 'react';
import mePhoto from '../imgs/CircleHomePhoto.png';
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="greeting">
        <img src={mePhoto} alt="Carah Alexander"/>
        <h1>Hi! I'm Carah</h1>
      </div>
      <p>Here's some stuff about me!</p>
      <div className="link-container">
        <a href="https://www.linkedin.com/in/carahalexander/">LinkedIn</a>
        <a href="https://github.com/20ghrrdll">Github</a>
      </div>
    </div>
  );
}

export default Home;