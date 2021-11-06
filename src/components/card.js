import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, imageUrl, handleClick }) => {
  const styles = { backgroundImage: `url(${imageUrl})` };
  return (

    // eslint-disable-next-line
    <article className = "card" onClick={(e) => handleClick(e)}>

      <div style={styles} className="cardImage" />
      <div className="cardLabel flex justify-center items-center">
        {name}
      </div>

    </article>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
