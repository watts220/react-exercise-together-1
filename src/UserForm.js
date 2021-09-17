import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WarningMsg from './WarningMsg';

class UserForm extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    userExists: false,
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      userExists: false,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  }

  contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    const userExists = this.state.userExists;
    return firstName === '' || lastName === '' || username === '' || userExists === true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const userExists = this.contactExists(this.state.user.username);

    if (!userExists) {
      this.props.addUserHandler(this.state.user);
      this.setState(() => ({
        user: {
          firstName: '',
          lastName: '',
          username: '',
        },
        userExists: false,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState.user,
        userExists: true
      }));
    }
  }

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input 
              type="text" 
              name="firstName" 
              placeholder="Enter First Name" 
              value={this.state.user.firstName} 
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last name:
            <input 
              type="text" 
              name="lastName" 
              placeholder="Enter Last Name" 
              value={this.state.user.lastName} 
              onChange={this.handleChange}
            />
          </label>
          <label>
            Username:
            <input 
              type="text" 
              name="username" 
              placeholder="Enter Username" 
              value={this.state.user.username} 
              onChange={this.handleChange}
            />
          </label>
          <button 
            type="submit" 
            disabled={this.isDisabled()}
            value="Add"
          >Add</button>
        </form>
		<WarningMsg showMsg={this.state.userExists} />
      </div>
    );
  }
}

UserForm.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default UserForm;