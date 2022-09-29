import React from 'react';
import './Details.css'

const Details = ({ item }) => {
    console.log(item)
    const { name, time, img } = {}
    return (
        <div className='details-card'>
            <img src={img} alt="" />
            <h3>Course Name:{name}</h3>
            <p>Duration:{time}</p>
            <button>Add to List</button>
        </div>
    );
};

export default Details;