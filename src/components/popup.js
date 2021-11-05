import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({
  name, demoUrl, imageUrl, description, technologies, repoLink, handleClose,
}) => (
  <div className="popupWrapper fixed">
    <div className="popup">
      {/* eslint-disable-next-line */}
      <div onClick={() => handleClose()}>
        X
      </div>
      <div>
        <img src={imageUrl} alt={`${name}`} />

        This is my project
        name:
        {name}
        demoUrl:
        {' '}
        {demoUrl}
        description:
        {' '}
        {description}
        technologies:
        {' '}
        {technologies}
        repoLink:
        {repoLink}
      </div>

    </div>
  </div>

);

Popup.propTypes = {
  name: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoLink: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Popup;
