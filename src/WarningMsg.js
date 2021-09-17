import React from 'react';
import PropTypes from 'prop-types';

const WarningMsg = (props) => {
    return (
      <p className="error">
      	{props.showMsg ? (
          "You cannot add a user that already exists."
        ) : (
          ''
        )}
		</p>
    );
}

WarningMsg.propTypes = {
  showMsg: PropTypes.bool.isRequired,
};

export default WarningMsg;