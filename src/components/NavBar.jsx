import CULogo from '../assets/cu.png';
import GULogo from '../assets/gu.png';
import CFLogo from '../assets/cf.png';
import GFLogo from '../assets/cf.png';
import PropTypes from "prop-types";

// should "Color Mode" be a toggle/icon?
function NavBar({type, background}) {

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
                'textColor': 'rgba(0, 0, 0, 0.80)'
            };
        }
        else {
            styles = {
                'logo': {
                    "unfilled": GULogo,
                    "filled": GFLogo
                },
                'textColor': '#000000'
            };
        }
        return styles;
    }

    return (
    <div>
        <nav className='title-colors nav-bar' style={background === '' ? {backgroundColor: 'rgba(256, 256, 256, 0.80)'}
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
            <a href='projects'><h4>Projects</h4></a>
            <a href='about'><h4>About</h4></a>
            <a href='contact'><h4>Contact</h4></a>
            <a><h4>Resume</h4></a>
            <a style={{float: "right"}}><h4>Color Mode</h4></a>
        </nav>
    </div>);
}

NavBar.propTypes = {
    type: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
}

export default NavBar;