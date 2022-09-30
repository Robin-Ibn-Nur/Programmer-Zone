import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <ol>
                <li>How does React work</li>
                <div className='paragraph'><p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                    React is a tool for building UI components.</p>
                    <p>React creates a VIRTUAL DOM in memory.
                        Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
                        React only changes what needs to be changed!
                        React finds out what changes have been made, and changes only what needs to be changed.
                        You will learn the various aspects of how React does this in the rest of this tutorial.</p>
                </div>
                <li>Different between props and state</li>
                <div className='paragraph'>
                    <p>Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                    <p>The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>

                </div>
                <li>What can do UseEffect other than Data Load?</li>
                <div className='paragraph'>
                    <p>The useEffect Hook allows you to perform side effects in your components.
                        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                        useEffect accepts two arguments. The second argument is optional.</p>

                </div>
            </ol>
        </div>
    );
};

export default Question;