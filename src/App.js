import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('/users')
      .then(res => { if (res.headers.get('X-Redirect')) { window.location = res.headers.get('X-Redirect') } else { return res.json(); }})
      .then(users => { if (users) { this.setState({ users }) }});
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        {users.length ? (
          <div>
            <UserList
              users={users}
            />
          </div>
        ) : (
          <div>
            <h1>No users found :-(</h1>
          </div>
        )}
        <button
          onClick={this.getUsers}>
          Refresh
        </button>
      </div>
    )
  }
}

export default App;
