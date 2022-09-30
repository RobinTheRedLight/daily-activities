import React, { useState } from 'react';
import './ActivityCalculation.css'
const ActivityCalculation = ({ calVal, BreakTime, brkVal }) => {
    let timeCal = 0;
    for (const timeVal of calVal) {
        timeCal = timeVal.item.time + timeCal;
    }
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
                <button onClick={() => BreakTime(10)} className='btn-time'>10m</button>
                <button onClick={() => BreakTime(20)} className='btn-time'>20m</button>
                <button onClick={() => BreakTime(30)} className='btn-time'>30m</button>
                <button onClick={() => BreakTime(40)} className='btn-time'>40m</button>
            </div>
            <h3>Activity Details</h3>
            <div className="Ex-time">
                <div className="Nam">
                    <h4>Exercise Time</h4>
                </div>
                <div className="tim">
                    <h4>{timeCal}m</h4>
                </div>
            </div>
            <div className="Ex-time">
                <div className="Nam">
                    <h4>Break Time</h4>
                </div>
                <div className="tim">
                    <h4>{brkVal}m</h4>
                </div>
            </div>

            <button className='btn-act'>
                <h3>Activity Completed</h3>
            </button>

        </div>
    );
};

export default ActivityCalculation;