import React from 'react';
import ActivityCalculation from '../ActivityCalculation/ActivityCalculation';
import ActivityCard from '../ActivityCard/ActivityCard';
import Header from '../Header/Header';
import './Activities.css'

const Activities = () => {
    return (
        <div className="total-activity">
            <div className='left-sec'>
                <Header></Header>
                <div className="daily-act">
                    <ActivityCard></ActivityCard>
                </div>
            </div>
            <div className="activity-count">
                <ActivityCalculation></ActivityCalculation>
            </div>
        </div>
    );
};

export default Activities;