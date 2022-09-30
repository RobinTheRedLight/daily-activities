import React from 'react';
import './ActivityCalculation.css'
const ActivityCalculation = () => {
    return (
        <div className='Calculation-body'>
            <h2>Name : <span>Robin Mitra</span></h2>
            <div className="details">
                <div className='single-details'>
                    <h3>24</h3>
                    <p>Age</p>
                </div>
                <div className='single-details'>
                    <h3>JS.</h3>
                    <p>Dev</p>
                </div>
                <div className='single-details'>
                    <h3>Web</h3>
                    <p>Role</p>
                </div>
            </div>
            <h3>Add a Break</h3>
            <div className='time-container'>
                <button className='time'>10m</button>
                <button className='time'>20m</button>
                <button className='time'>30m</button>
                <button className='time'>40m</button>
            </div>
        </div>
    );
};

export default ActivityCalculation;