import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar(props) {
    return (
        <section className='navbar'>
            <h1 className='ghost-pavilion-home'><Link to='/'>Ghost Pavilion</Link></h1>
                <nav>
                    <ul className='navlinks'>
                        <li className='nav-li'><Link to='/watch'>Watch</Link></li>
                        <li className='nav-li'><Link to='/listen'>Listen</Link></li>
                        <li className='nav-li'><Link to='/shows'>Shows</Link></li>
                        <li className='nav-li'><Link to='/signup'>Sign Up</Link></li>
                    </ul>
                </nav>
        </section>
    );
}

export default NavBar;