import React from 'react';
import './ActivityCard.css'
const ActivityCard = () => {
    return (
        <div className="activityCard">
            <div className="card">
                <img src="1.jpg" alt="" />
                <h1>Tailored Jeans</h1>
                <p className="price">$19.99</p>
                <p><button>Add to Cart</button></p>
            </div>
        </div>
    );
};

export default ActivityCard;