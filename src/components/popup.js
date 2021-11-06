import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetail from './projectDetail';

const Popup = ({
  name, demoUrl, imageUrl, description, technologies, repoLink, handleClose,
}) => (
  <section className="popupWrapper fixed">
    <article className="popup">
      {/* eslint-disable-next-line */}
      <div onClick={() => handleClose()}>
        X
      </div>
      <div className="popupImageWrapper">
        <div className="popupImageContainer">
          <img src={imageUrl} alt={`${name}`} />
        </div>
      </div>
      <div>
        <ProjectDetail label="name" description={name} />
        <ProjectDetail label="description" description={description} />
        <ProjectDetail label="technologies" description={technologies} />
        <div><a href={repoLink}>repoLink</a></div>
        <div><a href={demoUrl}>demoUrl</a></div>
      </div>

    </article>
  </section>

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
