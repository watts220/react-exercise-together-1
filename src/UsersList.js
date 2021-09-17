import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import HideBtn from './HideBtn';

const UsersList = (props) => {

    return (
      	<div>
      		<h1>Users</h1>
            {props.noItems ?
              <p>No Users yet!</p>
            :
              <div>
                <HideBtn showGames={props.showGames} toggleFunc={props.toggleGames} />
                <div>
                  <ol className="item-list">
                    {props.users.map((user, index) => <UserCard key={user.username} user={user} showGames={props.showGames} />)}
                  </ol>
                </div>
              </div>
            }
  		</div>
    );
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  noItems: PropTypes.bool.isRequired,
  showGames: PropTypes.bool.isRequired,
  toggleGames: PropTypes.func.isRequired,
};

export default UsersList;