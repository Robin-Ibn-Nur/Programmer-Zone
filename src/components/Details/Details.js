import React from 'react';
import './Details.css'

const Details = ({ item, timeAddToProfile }) => {
    const { name, time, img, text } = item;

    return (
        <div className='details-card'>
            <img src={img} alt="" />
            <h3>Course Name:{name}</h3>
            <small>About Us: {text}</small>
            <p>Duration:{time}<sub>s</sub> </p>
            <button onClick={() => timeAddToProfile(item)}>Add to List</button>
        </div>
    );
};

export default Details;