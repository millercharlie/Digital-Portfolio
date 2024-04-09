import CULogo from '../assets/cu.png';
import GULogo from '../assets/gu.png';
import CFLogo from '../assets/cf.png';
import GFLogo from '../assets/cf.png';
import SunIcon from '../assets/Sun Icon.png';
import PropTypes from "prop-types";

// should "Color Mode" be a toggle/icon?
function NavBar({ type, background, text, fun, icons }) {

    /**
     * Handles the style of the text and logo image
     * @returns {{logo: {}, textColor: string}}
     */
    const handleStyles = () => {
        let styles = {};
        if (type === 'colored') {
            styles = {
                'logo': {
                    "unfilled": CULogo,
                    "filled": CFLogo
                },
                'textColor': text
            };
        }
        else {
            styles = {
                'logo': {
                    "unfilled": GULogo,
                    "filled": GFLogo
                },
                'textColor': text
            };
        }
        return styles;
    }

    return (
        <div nav-bar>
            <nav className='title-colors' style={background === '' ? {backgroundColor: 'rgba(256, 256, 256, 0)'}
                : {backgroundColor: ('#' + background)}}>
                {/*<a href="./App.jsx">*/}
                {/*    <div className='nav-image-colored'/>*/}
                {/*</a>*/}
                <a href="/">
                    <img src={handleStyles().logo.unfilled} style={{maxWidth: '70px'}} className='nav-image'
                         alt={'nav-image-' + type}/>
                    <img src={handleStyles().logo.filled} className={'nav-image-hover-' + type}
                         alt={'nav-image-hover-' + type}/>
                </a>
                <a href='projects'><h4 style={{color: handleStyles().textColor}}>Projects</h4></a>
                <a href='about'><h4 style={{color: handleStyles().textColor}}>About</h4></a>
                <a href='contact'><h4 style={{color: handleStyles().textColor}}>Contact</h4></a>
                <a><h4 style={{color: handleStyles().textColor}}>Resume</h4></a>
            </nav>
            <button onClick={fun}>
                <img src={SunIcon} alt={'Image'} onClick={fun} className='nav-darktoggle'/>
            </button>
        </div>);
}

NavBar.propTypes = {
    type: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    fun: PropTypes.func.isRequired
}

export default NavBar;