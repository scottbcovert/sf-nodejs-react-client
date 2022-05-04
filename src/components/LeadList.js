import React from 'react';
import Lead from './Lead';
import './LeadList.css';

function LeadList(props) {
    return (
        <div className="container">
            {props.leads.map(c => <Lead key={c.Id} id={c.Id} firstname={c.FirstName} lastname={c.LastName} status={c.Status}/>)}
        </div>
    )
}

export default LeadList;