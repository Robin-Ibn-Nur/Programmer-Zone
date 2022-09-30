import React from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
const Toast = () => {
    // console.log('button');
    const button = () => {
        // console.log('click')
        // toast();
    }
    return (
        <div>
            <h1>welcome to my world</h1>
            <button onClick={button}>welcome</button>
        </div>
    );
};

export default Toast;