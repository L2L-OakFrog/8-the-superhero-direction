import React from 'react';
import "./Summery.css";

const Summery = (props) => {
    const {summary} = props;
    let sum = 0;
    let lists = [];
    for(const card of summary)
    {
        sum = sum + card.netWorth;
        lists = [...lists, card.name];
    }
    return (
        <div>
            <h2>Summary</h2>
            <h3>Team Members: {summary.length}</h3>
            <p>Total: ${sum} Billion</p>
            <li>{lists}</li>
        </div>
    );
};

export default Summery;