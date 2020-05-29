import React from 'react';
import Case from './Case';
import './CaseList.css';

function CaseList(props) {
    return (
        <div className="container">
            {props.cases.map(c => <Case key={c.Id} id={c.Id} number={c.CaseNumber} escalated={c.IsEscalated}/>)}
        </div>
    )
}

export default CaseList;