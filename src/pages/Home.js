import React from 'react';
import mePhoto from '../imgs/CircleHomePhoto.png';
import Footer from '../components/Footer';
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="greeting">
        <img src={mePhoto} alt="Carah Alexander"/>
      </div>
      <div className="intro-container">
        <h1>Hi! I'm Carah</h1>
        <p>I'm a software engineer that's passionate about user experience! I like to build things that make life a little easier.</p>
        <p> B.S. and M.S from Stanford University in Computer Science. Currently working on the Styling Systems team at Squarespace.</p>
        <p>If I'm not writing code, I'm hopefully writing, running, or horseback riding.</p>
        <p> Want to drop me a line? Find me below!</p>
        <div className="link-container">
          <a className="social-link" href="https://www.linkedin.com/in/carahalexander/">LinkedIn</a>
          <a className="social-link" href="https://github.com/20ghrrdll">Github</a>
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default Home;