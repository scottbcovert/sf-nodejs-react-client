import React, { Component } from 'react';
import './App.css';
import CaseList from './components/CaseList';

class App extends Component {
  state = { cases: [] }

  componentDidMount() {
    this.getCases();
  }

  getCases = () => {
    fetch('/cases', { mode: 'cors'})
      .then(res => res.json())
      .then(cases => this.setState({ cases }));
  }

  render() {
    const { cases } = this.state;

    return (
      <div className="App">
        {cases.length ? (
          <div>
            <CaseList
              cases={cases}
            />
          </div>
        ) : (
          <div>
            <h1>No cases found :-(</h1>
          </div>
        )}
        <button
          onClick={this.getCases}>
          Refresh
        </button>
      </div>
    )
  }
}

export default App;
