import React from 'react';
import './project.css'; // Import the CSS file for styling

const Project = ({ imgSrc, topic, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={topic} />
      <h3>{topic}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Project;