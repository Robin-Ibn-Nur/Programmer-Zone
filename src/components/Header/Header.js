import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/r">R</a>
                <a href="/o">o</a>
                <a href="/b">B</a>
                <a href="/i">i</a>
                <a href="/n">N</a>
            </div>
        </nav>
    );
};

export default Header;