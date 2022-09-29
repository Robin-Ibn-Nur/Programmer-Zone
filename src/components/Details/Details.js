import React from 'react';
import './Details.css'

const Details = ({ item, timeAddToProfile }) => {
    // console.log(item)
    const { name, time, img } = item;
    
    return (
        <div className='details-card'>
            <img src={img} alt="" />
            <h3>Course Name:{name}</h3>
            <p>Duration:{time}</p>
            <button onClick={() => timeAddToProfile()}>Add to List</button>
        </div>
    );
};

export default Details;