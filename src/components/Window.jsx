import PropTypes from "prop-types";
import '/src/index.css';

/**
 * Represents a window of this website. Each window corresponds with an app folder on the Home screen.
 * @param isClassic {boolean} true if this is a classic window
 * @param isVisible {boolean} true if this window is currently visible
 * @param titleText {string} the title text of this Window
 * @param bodyText {string} the body text of this window
 * @param expandLink {string} the link this window's expand button refers to
 * @returns {JSX.Element} of a Window with a title, body text, and link to its appropriate page
 */
function Window({ isClassic, isVisible, titleText, bodyText, expandLink }) {

    Window.propTypes = {
        isClassic: PropTypes.bool.isRequired,
        isVisible: PropTypes.string.isRequired,
        titleText: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired,
        expandLink: PropTypes.string.isRequired,
    }

    return (
    <div className='window'>

        <div className='window-heading' style={{marginBottom: '0'}}>
            <h2 className='center' style={{color: '#000000'}}>Projects</h2>
            <button style={{float: 'right'}}>X</button>
        </div>

        <div className='main-content' style={{height: '60vh', marginTop: '0'}}>
            <h3>lmao no</h3>
        </div>

    </div>
    );
}

export default Window;