import React, { useState } from 'react';
import ActivityCalculation from '../ActivityCalculation/ActivityCalculation';
import ActivityCard from '../ActivityCard/ActivityCard';
import Header from '../Header/Header';
import './Activities.css'

const Activities = () => {
    const [items, setItem] = useState([]);
    const [calVal, setCalVal] = useState([]);
    const [brkVal, setBrkVal] = useState([]);
    useState(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, 0);

    const ShowTime = val => {
        const newItem = [...calVal, val];
        setCalVal(newItem);
    }
    const BreakTime = val => {
        setBrkVal(val);
    }
    return (
        <div className="total-activity">
            <div className='left-sec'>
                <Header></Header>
                <div className="daily-act">
                    {
                        items.map(item =>
                            <ActivityCard item={item} ShowTime={ShowTime} key={item.id}></ActivityCard>
                        )
                    }
                </div>
            </div>
            <div className="activity-count">
                <ActivityCalculation calVal={calVal} BreakTime={BreakTime} brkVal={brkVal}></ActivityCalculation>
            </div>
        </div>
    );
};

export default Activities;