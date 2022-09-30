import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import './Propertise.css';
import Toast from '../Toast/Toast';
import { addToDb } from '../../utilities/fakedb';
const Propertise = ({ time }) => {
    let total = 0;
    time.forEach(element => {
        total += element.time;
        return total;
    });
    const [number, setNumber] = useState([0])
    const secondBtn = (numbers) => {
        const newNumber = parseInt(numbers);
        console.log(newNumber);
        setNumber(newNumber);
        addToDb(numbers);
    }
    return (
        <div>
            <div className='profile'>
                <h3> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> RoBiN</h3>
                <div className='about'>

                    <h4>Weight: 51<sub>kg</sub></h4>
                    <h5>Height: 5.5</h5>
                    <h5>Age: 25</h5>

                </div>
                <h4 className='text'>Add A Break</h4>
                <div className='button'>
                    <button onClick={(e) => secondBtn(e.target.innerText)}>10<sub>s</sub></button>
                    <button onClick={(e) => secondBtn(e.target.innerText)}>20<sub>s</sub></button>
                    <button onClick={(e) => secondBtn(e.target.innerText)}>30<sub>s</sub></button>
                    <button onClick={(e) => secondBtn(e.target.innerText)}>40<sub>s</sub></button>
                    <button onClick={(e) => secondBtn(e.target.innerText)}>50<sub>s</sub></button>
                </div>
                <h4 className='text'>Exercise Details</h4>
                <h5 className='input-field'>Exercise time: {total} Seconds</h5>
                <h5 className='input-field'>Break time: {number} Seconds</h5>
                <Toast></Toast>
                {/* <button className='toast'>Activity Completed</button> */}
            </div>
        </div>
    );
};

export default Propertise;