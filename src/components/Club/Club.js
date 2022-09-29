import { library } from '@fortawesome/fontawesome-svg-core';
import { fa0, faCarriageBaby, faCoffee, faHeartPulse, faHryvniaSign, faLandMineOn, faPersonDressBurst, faPersonRays, faPersonRunning, faPlus, faPortrait, faSignature, faSignIn, faSpinner, faTruckArrowRight, faWonSign, faYen, faYenSign } from '@fortawesome/free-solid-svg-icons';
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
            <div className='text'>
                <p className='title-name'>
                    <h1><FontAwesomeIcon className='font-awesome' icon={faYen}></FontAwesomeIcon>
                        Yes-Club</h1>
                </p>
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