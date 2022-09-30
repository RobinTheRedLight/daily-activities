import React from 'react';
import './ActivityCard.css'
const ActivityCard = ({ item, ShowTime }) => {
    const { id, name, time, img } = item
    return (
        <div className="activityCard">
            <div className="card">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p className="price">Time:{time}m</p>
                <p><button onClick={() => ShowTime({ item })}>Add to Activity</button></p>
            </div>
        </div>
    );
};

export default ActivityCard;