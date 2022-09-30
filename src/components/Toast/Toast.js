import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    // console.log('button');
    const button = () => {
        toast('log in successfull', { position: toast.POSITION.TOP_CENTER });
    }
    return (
        <div>
            <h1>welcome to my world</h1>
            <button onClick={button}>welcome</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Toast;