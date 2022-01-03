import React from 'react';
import mePhoto from '../imgs/CircleHomePhoto.png';
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="greeting">
        <img src={mePhoto} alt="Carah Alexander"/>
      </div>
      <div className="intro-container">
        <h1>Hi! I'm Carah</h1>
        <p>I'm a front-end developer that's passionate about user experience! I like to build things that make life a little easier.</p>
        <p>If I'm not writing code, I'm hopefully baking, writing, or horseback riding.</p>
        <p> Want to drop me a line? Find me below!</p>
        <div className="link-container">
          <a className="social-link" href="https://www.linkedin.com/in/carahalexander/">LinkedIn</a>
          <a className="social-link" href="https://github.com/20ghrrdll">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Home;