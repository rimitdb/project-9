import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Icon from '../../Assets/Image/img.png';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className='logo-container'>
                    <img src={Icon} alt='' />
                </div>
                <div className='link-container'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/reviews">Reviews</Link>
                    <Link className='link' to="/dashboard">Dashboard</Link>
                    <Link className='link' to="/blog">Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;