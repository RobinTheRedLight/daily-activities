import React from 'react';
import './ActivityCard.css'
const ActivityCard = ({ item }) => {
    const { id, name, time, img } = item
    return (
        <div className="activityCard">
            <div className="card">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p className="price">Time:{time}</p>
                <p><button>Add to Activity</button></p>
            </div>
        </div>
    );
};

export default ActivityCard;