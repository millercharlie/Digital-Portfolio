import CULogo from '../assets/cu.png';
import GULogo from '../assets/gu.png';
import CFLogo from '../assets/cf.png';
import GFLogo from '../assets/cf.png';
import PropTypes from 'prop-types';

/**
 * Represents a navigation bar to be displayed on all pages.
 *
 * @param mode {string} Color mode of this navigation bar
 * @param background {string} Background color of this navigation bar
 * @param fun {function} Callback function to handle various styling in different Components
 * @param icon {string[]} Array with two elements - first one being the dark mode toggle with the second being the light mode toggle
 *
 * @returns {JSX.Element} Navigation Bar.
 */
function NavBar({ mode, background, fun, icon, textColor }) {

    /**
     * Handles the style of the text and logo image.
     * @returns {{logo: {}, textColor: string}}
     */
    const handleStyles = () => {
        let styles = {};
        if (mode === 'colored') {
            styles = {
                'logo': {
                    "unfilled": CULogo,
                    "filled": CFLogo
                },
            };
        }
        else {
            styles = {
                'logo': {
                    "unfilled": GULogo,
                    "filled": GFLogo
                },
            };
        }
        return styles;
    }

    NavBar.propTypes = {
        mode: PropTypes.string.isRequired,
        background: PropTypes.string,
        fun: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
        textColor: PropTypes.string
    }

    return (
        <div className='nav-bar'>
            <nav className='title-colors' style={background === '' ? {backgroundColor: 'rgba(256, 256, 256, 0)'}
                : {backgroundColor: ('#' + background)}}>
                <a href="/">
                    <img src={handleStyles().logo.unfilled} style={{maxWidth: '70px'}} className='nav-image'
                         alt={'nav-image-' + mode}/>
                    <img src={handleStyles().logo.filled} className={'nav-image-hover-' + mode}
                         alt={'nav-image-hover-' + mode}/>
                </a>
                <a href='projects'>
                    <h4 style={{color: textColor || 'rgba(0, 0, 0, 0.70)'}}>Projects</h4>
                </a>
                <a href='about'>
                    <h4 style={{color: textColor || 'rgba(0, 0, 0, 0.70)'}}>About</h4>
                </a>
                <a href='contact'>
                    <h4 style={{color: textColor || 'rgba(0, 0, 0, 0.70)'}}>Contact</h4>
                </a>
                <a>
                    <h4 style={{color: textColor || 'rgba(0, 0, 0, 0.70)', cursor: 'pointer'}}>Resume</h4>
                </a>
                <button onClick={fun} className='nav-right'>
                    <img src={icon} alt={'Colorway Toggle'} className='nav-darktoggle'/>
                </button>
            </nav>
        </div>);
}

export default NavBar;