import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Project = ({ name, demoUrl, imageUrl, description, technologies, repoLink }) => {
  const [toggleOn, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggleOn);
  }
  return (
    <article onClick ={() => handleClick()}>
      <img src ={imageUrl}>
      </img>
      This is my project
      name:{name}
      demoUrl: {demoUrl}
      imageUrl:{imageUrl}
      description: {description}
      technologies: {technologies}
      repoLink:{repoLink}
      { toggleOn && <div>
      Its Working man</div> }
    </article>

  )
}

// name={pro.name}
// demoUrl = {pro.demoUrl}
// imageUrl = {pro.imageUrl}
// description = {pro.description}
// technologies = {pro.technologies}
// repoLink = {pro.repoLink}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoLink: PropTypes.string.isRequired
}