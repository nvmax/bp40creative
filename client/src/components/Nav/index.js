import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
    
        return (
            <nav className='nav-grid home-style'>
            <ul className='nav-list-grid nav-list-style font-Poppins'>
                <li><Link className='nav-list-item-styling' to="/signup">Signup</Link></li>
                <li><Link className='nav-list-item-styling' to="/login">Login</Link></li>
 
            </ul>
            
        </nav>
        );
    }


export default Nav;