import React from 'react';
import CULogo from '../assets/cu.png';
import GULogo from '../assets/gu.png';
import PropTypes from "prop-types";

// should "Color Mode" be a toggle/icon?
function NavBar({type}) {

    function handleLogo() {
        if (type === 'colored') {
            return CULogo;
        }
        else {
            return GULogo;
        }
    }

    return (
    <div>
        <nav className='extra-padding title-colors nav-bar'>
            {/*<a href="./App.jsx">*/}
            {/*    <div className='nav-image-colored'/>*/}
            {/*</a>*/}
            <a href="./App.jsx"><img src={handleLogo()} style={{maxWidth: '70px'}} className='nav-image'/></a>
            <a href='./App.jsx'>Projects</a>
            <a href='./App.jsx'>About</a>
            <a href='./App.jsx'>Contact</a>
            <a href='./App.jsx'>Color Mode</a>
        </nav>
    </div>);
}

NavBar.propTypes = {
    type: PropTypes.string.isRequired
}

export default NavBar;