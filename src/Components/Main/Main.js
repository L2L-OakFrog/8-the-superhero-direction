import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import './Main.css';

const Main = () => {
    const [cards, setCards] = useState([]); // cards state
    const [summery, setSummery] = useState([]); // summery state
    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])
    // Button
    const handlebtn = (members) =>{
        const newSummery = [...summery, members];
        setSummery(newSummery);
    }
    return (
        <div className='main-container'>
        <div className='cards-container'>
            {
                cards.map(card => <Cards 
                    key = {card.id}
                    card = {card}
                    handlebtn = {handlebtn}
                    ></Cards>)
            }
        </div>
        <div className='value-container'>
            <h3>Team Members: {summery.length}</h3>
        </div>
    </div>
    );
};

export default Main;