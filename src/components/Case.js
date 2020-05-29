import React, { Component } from 'react';
import './Case.css';

class Case extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            number: props.number,
            escalated: props.escalated
        };
    }

    isEscalated = () => {
        return this.state.escalated ? 'Escalated!' : 'Not Escalated';
    }

    toggleEscalation = () =>  {
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id,
                isEscalated: !this.state.escalated
            })
        };
        fetch('/case', requestOptions)
            .then(res => window.location.reload())
    }

    render() {
        return (
            <div className="case">
                <div>{this.state.number}</div>
                <div>{this.isEscalated()}</div>
                <div>
                <button
                    onClick={() => this.toggleEscalation()}>
                    Toggle Escalation
                </button>
                </div>
            </div>
        )
    }
}

export default Case;