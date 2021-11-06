import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetail = ({ label, description }) => (
  <div className="col flex justify-center text-center">
    <div>{label}</div>
    <div>{description}</div>
  </div>
);

ProjectDetail.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProjectDetail;
