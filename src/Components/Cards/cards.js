import React from 'react';
import './Cards.css';

const Cards = (props) => {
    console.log(props.card);
    const {name, img, age, founder, netWorth, residence} = props.card;
    return (
        <div className='card-caontainer'>
            <div className='cover'>
                <img src={img} alt={props.name} />
            </div>
            <div className='info'>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Founder:</strong> {founder}</p>
                <p><strong>Net Worth:</strong> ${netWorth} Billion</p>
                <p><strong>Residence:</strong> {residence}</p>
                <button onClick={() => props.handlebtn(props.product)} className='btn-add'>Add</button>
            </div>
        </div>
    );
};

export default Cards;