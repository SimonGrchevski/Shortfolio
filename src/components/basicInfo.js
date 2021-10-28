import React from 'react';
import PropTypes from 'prop-types';

const BasicInfo = ({ name, handleClick }) => (
  // eslint-disable-next-line
  <article onClick={(e) => handleClick(e)}>
    This is my project
    name:
    {name}
  </article>
);

export default BasicInfo;

BasicInfo.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
