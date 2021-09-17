import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UsersList from './UsersList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    showGames: true,
    users: [],
  };
  
  addItem = user => {
    user.numGamesPlayed = 0;
    this.setState(oldState => ({
      users: [...oldState.users, user],
    }));
    console.log(this.state.users);
  };
  
  toggleGames = () => {
    this.setState(oldState => ({
      showGames: !oldState.showGames,
    }));
  };
  
  noItemsFound = () => {
    return this.state.users.length === 0;
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<UserForm addUserHandler={this.addItem} users={this.state.users} />
		<UsersList users={this.state.users} noItems={this.noItemsFound()} showGames={this.state.showGames} toggleGames={this.toggleGames} />
      </div>
    );
  }
}

export default App;
