import React from 'react';
import './Case.css';

function Case(props) {
    return (
        <div className="case">
            <span>{props.number}</span>
        </div>
    )
}

export default Case;