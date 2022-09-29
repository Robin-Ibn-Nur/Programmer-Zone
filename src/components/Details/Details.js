import React from 'react';
import './Details.css'

const Details = ({ item, timeAddToProfile }) => {
    const { name, time, img } = item;
    
    return (
        <div className='details-card'>
            <img src={img} alt="" />
            <h3>Course Name:{name}</h3>
            <p>Duration:{time}<sub>s</sub> </p>
            <button onClick={()=>timeAddToProfile(item)}>Add to List</button>
        </div>
    );
};

export default Details;