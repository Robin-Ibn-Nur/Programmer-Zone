import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Propertise.css';

import React from 'react';

const Propertise = ({ time }) => {
    console.log(time);
    const secondBtn = () => {

    }
    return (
        <div>
            <h1>welcome: {time.length}</h1>
            <div className='profile'>
                <h3> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> RoBiN</h3>
                <div className='about'>

                    <h4>Weight: 51<sub>kg</sub></h4>
                    <h5>Height: 5.5</h5>
                    <h5>Age: 25</h5>

                </div>
                <h4 className='text'>Add A Break</h4>
                <h4> time={time.length}</h4>
                <div className='button'>
                    <button onClick={() => secondBtn()}>10<sub>s</sub></button>
                    <button onClick={() => secondBtn()}>20<sub>s</sub></button>
                    <button onClick={() => secondBtn()}>30<sub>s</sub></button>
                    <button onClick={() => secondBtn()}>40<sub>s</sub></button>
                    <button onClick={() => secondBtn()}>50<sub>s</sub></button>
                </div>
                <h4 className='text'>Exercise Details</h4>
                <h5 className='input-field'>Exercise time: { } </h5>
                <h5 className='input-field'>Break time: </h5>
                <button className='toast'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Propertise;