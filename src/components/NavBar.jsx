import CULogo from '../assets/cu.png';
import GULogo from '../assets/gu.png';
import PropTypes from "prop-types";

// should "Color Mode" be a toggle/icon?
function NavBar({type, background}) {

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
        <nav className='title-colors nav-bar' style={ background === '' ? {backgroundColor: 'rgba(256, 256, 256, 0.80)'}
            : {backgroundColor: ('#' + background)}}>
            {/*<a href="./App.jsx">*/}
            {/*    <div className='nav-image-colored'/>*/}
            {/*</a>*/}
            <a href="/"><img src={handleLogo()} style={{maxWidth: '70px'}} className='nav-image'/></a>
            <a href='projects'>Projects</a>
            <a href='about'>About</a>
            <a href='contact'>Contact</a>
            <a>Color Mode</a>
        </nav>
    </div>);
}

NavBar.propTypes = {
    type: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
}

export default NavBar;