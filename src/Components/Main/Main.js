import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import Summery from '../Summery/Summery';
import './Main.css';

const Main = () => {
    /* State Declare */
    const [cards, setCards] = useState([]); // cards state
    const [summary, setSummary] = useState([]); // summery state
    /* Data Load */
    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])
    /* Button Handler */
    const handleBtn = (card) =>{
        
        const newSummary = [...summary, card];
        setSummary(newSummary);
        
    }
    /* Main Section */
    return (
    <div className='main-container'>
        {/* Cards */}
        <div className='cards-container'>
            {
                cards.map(card => <Cards 
                    key = {card.id}
                    card = {card}
                    handleBtn = {handleBtn}
                    ></Cards>)
            }
        </div>
        <div>
            {/* Summary */}
            <div className='summary-container'>
                <Summery summary={summary}></Summery>
            </div>
        </div>
    </div>
    );
};
export default Main;