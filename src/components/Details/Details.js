import React from 'react';
import './Details.css'

const Details = ({ item, timeAddToProfile }) => {
    const { name, time, img, text, ratings } = item;

    return (
        <div className='details-card'>
            <img src={img} alt="" />
            <div>
                <h4>Course Name:{name}</h4>
                <small>About Us: {text}</small>
                <p>Duration:{time}<sub>s</sub> </p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => timeAddToProfile(item)}>Add to List</button>
        </div>
    );
};

export default Details;