import React from 'react';
import "./Summery.css";

const Summery = (props) => {
    //console.log(props.summary);
    const {summary} = props;
    let sum = 0;
    let lists = [];
    for(const card of summary)
    {
        sum = sum + card.netWorth;
        //lists = [...lists, card.name];
        lists = lists +" "+ card.name;
        console.log(lists);
    }
    return (
        <div>
            <h3>Summary</h3>
            <h4>Team Members: {summary.length}</h4>
            <p><strong>Total:</strong> ${sum} Billion</p>
            <p><strong>People in the List:</strong><br />
                {lists}
            </p>
        </div>
    );
};

export default Summery;