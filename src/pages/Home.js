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
      <div className="intro-container">
        <p>I'm a front-end developer that's passionate about user experience! I like to build things that make people smile. Want to drop me a line? Find me below!</p>
        <div className="link-container">
          <a href="https://www.linkedin.com/in/carahalexander/">LinkedIn</a>
          <a href="https://github.com/20ghrrdll">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Home;