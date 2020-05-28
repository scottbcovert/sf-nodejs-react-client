import React from 'react';
import Case from './Case';
import './CaseList.css';

function CaseList(props) {
    return (
        <div class="container">
            {props.cases.map(c => <Case key={c.id} number={c.number} />)}
        </div>
    )
}

export default CaseList;