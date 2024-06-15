import React from 'react';
import mePhoto from '../imgs/CircleHomePhoto.png';
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="greeting">
        <h1>HI, I'M CARAH.</h1>
      </div>
      <div className="intro-container">
        <div>
          <p>I like to build things that make life a little easier.</p>
          <p> Previously @ <strong>Figma</strong> and <strong>Squarespace</strong>. Currently working on something new. M.S. and B.S from <strong>Stanford University</strong> in Computer Science.</p>
          <p>If I'm not writing code, I'm hopefully on a horse, writing, or getting tangled in yarn.</p>
          <p> Think we could work together? Drop me a line!</p>
        </div>
        <div className="link-container">
          <a className="social-link" href="https://www.linkedin.com/in/carahalexander/">LinkedIn</a>
          <a className="social-link" href="https://github.com/20ghrrdll">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Home;