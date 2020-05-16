import React from 'react';
import {NavLink} from 'react-router-dom'

import './header.style.scss';

const Header = () => {
    return (
        <header className="header-container">
            <div className="title-container">
                <h1 className="title">Design for Student</h1>
                <span className="sub-title">Keep it as a daily hobby</span>
            </div>
            <nav className="main-menu">
                <NavLink to="/welcome" activeClassName="selected">Welcome</NavLink>
                <NavLink to="/blog" activeClassName="selected">Blog</NavLink>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
                <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
            </nav>
        </header>
    )
};

export default Header;

