import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
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
    const timeAddToProfile = () => {
        // console.log(timeAddToProfile)
    }
    return (
        <div className='club-container'>
            <div className='text'>
                <p className='title-name'>
                    <h1><FontAwesomeIcon className='font-awesome' icon={faDumbbell}></FontAwesomeIcon>
                        Yes-Club</h1>
                </p>
                <div className='left-side'>
                    {
                        positives.map(item => <Details
                            item={item}
                            key={item.id}
                            timeAddToProfile={timeAddToProfile}
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