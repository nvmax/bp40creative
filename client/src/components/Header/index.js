import React from 'react';
import './style.css'
//import image files from images folder
import logo from '../../images/bp40CreativeNoURL.png'


function Header() {
    
        return (
            <header className='home-grid home-style'>
             {/* add logo image  */}
            <img src={logo} alt="logo" className='logo-image'/>
        </header>
        );
    }


export default Header;