import React, { useState } from 'react';
import ActivityCalculation from '../ActivityCalculation/ActivityCalculation';
import ActivityCard from '../ActivityCard/ActivityCard';
import Header from '../Header/Header';
import './Activities.css'

const Activities = () => {
    const [items, setItem] = useState([]);
    useState(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, 0);
    return (
        <div className="total-activity">
            <div className='left-sec'>
                <Header></Header>
                <div className="daily-act">
                    {
                        items.map(item =>
                            <ActivityCard item={item} key={item.id}></ActivityCard>
                        )
                    }
                </div>
            </div>
            <div className="activity-count">
                <ActivityCalculation></ActivityCalculation>
            </div>
        </div>
    );
};

export default Activities;