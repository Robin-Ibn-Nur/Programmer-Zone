import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Profile.css'

const Profile = () => {
    const secondBtn = () => {
        
    }
    return (
        <div className='profile'>
            <h3> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> RoBiN</h3>
            <div className='about'>
                <h4>Weight: 51<sub>kg</sub></h4>
                <h5>Height: 5.5</h5>
                <h5>Age: 25</h5>
            </div>
            <h4 className='text'>Add A Break</h4>
            <div className='button'>
                <button onClick={()=>secondBtn()}>10<sub>s</sub></button>
                <button onClick={()=>secondBtn()}>20<sub>s</sub></button>
                <button onClick={()=>secondBtn()}>30<sub>s</sub></button>
                <button onClick={()=>secondBtn()}>40<sub>s</sub></button>
                <button onClick={()=>secondBtn()}>50<sub>s</sub></button>
            </div>
            <h4 className='text'>Exercise Details</h4>
            <h5 className='input-field'>Exercise time: </h5>
            <h5 className='input-field'>Break time: {secondBtn} </h5>
            <button className='toast'>Activity Completed</button>
        </div>
    );
};

export default Profile;