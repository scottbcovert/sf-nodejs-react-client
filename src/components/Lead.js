import React, { Component } from 'react';
import './Lead.css';

class Lead extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            firstname: props.firstname,
            lastname: props.lastname,
            status: props.status
        };
    }

    isQualified = () => {
        return this.state.status === 'Qualified' ? 'Qualified!' : 'Not Qualified';
    }

    toggleQualification = () =>  {
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id,
                status: 'Qualified'
            })
        };
        fetch('/lead', requestOptions)
            .then(res => window.location.reload())
    }

    render() {
        return (
            <div className="lead">
                <div>{this.state.firstname + ' ' + this.state.lastname}</div>
                <div>{this.isQualified()}</div>
                <div>
                <button
                    onClick={() => this.toggleQualification()}>
                    Toggle Qualification
                </button>
                </div>
            </div>
        )
    }
}

export default Lead;