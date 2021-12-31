import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project-list">
      <div className="project">
        <div className="project-body">
          <div className="project-image"></div>
          <div className="project-text">
            <h4 className="project-title">On Beat</h4>
            <p className="project-description">A web app that generates Spotify playlists of songs with the same BPM</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects