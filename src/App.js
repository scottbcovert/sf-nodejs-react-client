import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    authenticated: false,
    domain: ''
  }

  componentDidMount() {
    this.getTokens();
  }

  getTokens = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      // Pass URL parameters along to express server
      const response = await fetch('/tokens?' + urlParams);
      if (response.headers.get('X-Redirect')) {
        return window.location = response.headers.get('X-Redirect');
      }
      const state = await response.json();
      this.setState(state);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    const {
      authenticated,
      domain
    } = this.state;

    return (
      <div className="App">
        {authenticated ? (
          <div>
            <h1>Successfully authenticated with {domain}! You can now close this browser tab.</h1>
          </div>
        ) : (
          <div>
            <h1>Authenticating with Salesforce...</h1>
          </div>
        )}
      </div>
    )
  }
}

export default App;
