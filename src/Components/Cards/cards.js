import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Cards.css';

const Cards = (props) => {
    const {name, img, age, founder, netWorth, residence} = props.card;
    const icon = <FontAwesomeIcon icon={faUserPlus} />
    const sicon = <FontAwesomeIcon icon={faEnvelope} />
    //console.log(props);
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
                <button 
                onClick={() => props.handleBtn(props.card)} 
                className='btn-add'>
                Add {icon}</button>
                <br />
                <button className='social'>{sicon} </button>
            </div>
        </div>
    );
};

export default Cards;