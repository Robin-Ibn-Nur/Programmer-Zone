import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import './Club.css'

const Club = () => {
    const [positives, setPositives] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPositives(data))
    }, []);
    return (
        <div className='club-container'>
            <div>
                <h1>Welcome To Yes-Club</h1>
                <div className='left-side'>
                    {
                        positives.map(item => <Details
                            item={item}
                            key={item.id}
                        // handleAddToCart={handleAddToCart}
                        ></Details>)
                    }
                </div>
            </div>
            <div className='right-side'>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Club;