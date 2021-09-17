import React from 'react';
import PropTypes from 'prop-types';

const HideBtn = props => {
  return (
    <button onClick={props.toggleFunc}>
        {props.showGames ? 'Hide ' : 'Show '}
        the Number of Games
     </button>
  );
};

HideBtn.propTypes = {
  showGames: PropTypes.bool.isRequired,
};

export default HideBtn;
