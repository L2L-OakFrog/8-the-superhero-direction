import React from 'react';
import "./Summery.css";

const Summery = (props) => {
    const {summary} = props; //Destructuring
    let sum = 0;
    let lists = [];
    for(const card of summary)
    {
        sum = sum + card.netWorth;
        //lists = [...lists, card.name];
        lists = lists +" "+ card.name;
    }
    return (
        <div className='summary'>
            <h3>Summary</h3>
            <h4>Team Members: {summary.length}</h4>
            <p><strong>Total:</strong> ${sum} Billion</p>
            <p><strong>People in the List:</strong><br />
                <i>{lists}</i>
            </p>
        </div>
    );
};

export default Summery;