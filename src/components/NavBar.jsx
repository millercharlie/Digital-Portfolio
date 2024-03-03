import React from 'react';
import CULogo from '/Users/charliethegreat/Desktop/Everything/compSciStuff/Portfolio with React/digital-portfolio-2/src/assets/cu.png';
import CFLogo from '/Users/charliethegreat/Desktop/Everything/compSciStuff/Portfolio with React/digital-portfolio-2/src/assets/cf.png';
import GULogo from '/Users/charliethegreat/Desktop/Everything/compSciStuff/Portfolio with React/digital-portfolio-2/src/assets/gu.png';
import GFLogo from '/Users/charliethegreat/Desktop/Everything/compSciStuff/Portfolio with React/digital-portfolio-2/src/assets/gf.png';

// should "Color Mode" be a toggle/icon?
function NavBar(props) {
    return (
    <div className='nav-bar'>
        <nav className='extra-padding title-colors'>
            <a href="./App.jsx"><img src={handleLogo(props)} style={{maxWidth: '70px'}} className='nav-image'/></a>
            <a href='./App.jsx'>Projects</a>
            <a href='./App.jsx'>About</a>
            <a href='./App.jsx'>Contact</a>
            <a href='./App.jsx'>Color Mode</a>
        </nav>
    </div>);
}

function handleLogo(props) {
    if (props.logo === 'cu') {
        return CULogo;
    }
    else if (props.logo === 'cf') {
        return CFLogo;
    }
    else if (props.logo === 'gu') {
        return GULogo;
    }
    else {
        // should be GFLogo
        return CFLogo;
    }
}

export default NavBar;