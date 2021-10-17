import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Project = ({ name }) => {
  const [toggleOn, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggleOn);
  }
  return (
    <article onClick ={() => handleClick()}>
      <img>
      </img>
      This is my project
      name:{name}
      { toggleOn && <div>
      Its Working man</div> }
    </article>

  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired
}