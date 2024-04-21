import CULogo from '../assets/cu.png';
import GULogo from '../assets/gu.png';
import CFLogo from '../assets/cf.png';
import GFLogo from '../assets/cf.png';
import PropTypes from "prop-types";

/**
 * Represents a navigation bar to be displayed on all pages.
 * @param type
 * @param background
 * @param text
 * @param fun
 * @param icon
 * @returns {JSX.Element}
 */
function NavBar({ type, background, text, fun, icon }) {

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
        <div className='nav-bar'>
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
                <a href='projects'><h4 style={{color: '#' + handleStyles().textColor}}>Projects</h4></a>
                <a href='about'><h4 style={{color: '#' + handleStyles().textColor}}>About</h4></a>
                <a href='contact'><h4 style={{color: '#' + handleStyles().textColor}}>Contact</h4></a>
                <a><h4 style={{color: '#' + handleStyles().textColor}}>Resume</h4></a>
                <button onClick={fun} className='nav-right'>
                    <img src={icon} alt={'Colorway Toggle'} className='nav-darktoggle'/>
                </button>
            </nav>
        </div>);
}

NavBar.propTypes = {
    type: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    fun: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;