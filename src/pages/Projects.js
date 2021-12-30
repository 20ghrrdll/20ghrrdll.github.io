import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-list">
      <div className="project">
        <div className="project-body">
          <div className="project-image"></div>
          <div className="project-text">
            <h2 className="project-title">On Beat</h2>
            <p className="project-description">A web app that generates Spotify playlists of songs with the same BPM</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects