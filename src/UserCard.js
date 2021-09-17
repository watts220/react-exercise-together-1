import React from 'react';
import PropTypes from 'prop-types';

const UserCard = props => {
  return (
    <li className="user">
      <p>Username: {props.user.username}</p>
      {props.showGames ? <p>{props.user.username} played {props.user.numGamesPlayed} games.</p> : <p>{props.user.username} played \* games.</p>}
    </li>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  showGames: PropTypes.bool.isRequired,
};

export default UserCard;
