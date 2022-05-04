import React, { Component } from 'react';
import './App.css';
import LeadList from './components/LeadList';

class App extends Component {
  state = { leads: [] }

  componentDidMount() {
    this.getLeads();
  }

  getLeads = () => {
    fetch('/leads')
      .then(res => { if (res.headers.get('X-Redirect')) { window.location = res.headers.get('X-Redirect') } else { return res.json(); }})
      .then(leads => { if (leads) { this.setState({ leads }) }});
  }

  render() {
    const { leads } = this.state;

    return (
      <div className="App">
        {leads.length ? (
          <div>
            <LeadList
              leads={leads}
            />
          </div>
        ) : (
          <div>
            <h1>No leads found :-(</h1>
          </div>
        )}
        <button
          onClick={this.getLeads}>
          Refresh
        </button>
      </div>
    )
  }
}

export default App;
