import PropTypes from "prop-types";
import '/src/index.css';

/**
 * Represents a window of this website. Each window corresponds with an app folder on the Home screen.
 * @param isClassic {boolean} true if this is a classic window
 * @param isVisible {boolean} true if this window is currently visible
 * @param type {string} the type of window this is
 * @param expandLink {string} the link this window's expand button refers to
 * @param func {function} the callback function to the parent Component
 * @returns {JSX.Element} of a Window with a title, body text, and link to its appropriate page
 */
function Window({ isClassic, isVisible, type, expandLink, func }) {

    /**
     * Sets the text of this window.
     */
    const setText = () => {
        let text = {title: '', body: ''};
        switch (type) {
            case 'Projects':
                text.title = 'Projects';
                text.body = 'lmao no';
                break;
            case 'About':
                text.title = 'About';
                text.body = 'aboot (for the canadians)'
                break;
        }
        return text;
    }

    let text = setText();

    Window.propTypes = {
        isClassic: PropTypes.bool.isRequired,
        isVisible: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        expandLink: PropTypes.string.isRequired,
        func: PropTypes.func.isRequired
    }

    /**
     * Sets the visibility of the window to hidden when the Close button is clicked.
     */
    const handleClick = (event) => {
        func(event)
    }

    return (
    <div className='window' style={isVisible ? {visibility: 'visible'} : {visibility: 'hidden'}}>
        <div className='window-heading'>
            <div>
                <button className='icon-button' id='close' style={{float: 'right'}} onClick={handleClick}>X</button>
                <button className='icon-button' style={{float: 'right'}} onClick={handleClick}>
                    <img src='src/assets/Expand Arrows.svg' alt='Expand'/>
                </button>
            </div>
            <h2 className='window-heading-text'>{text.title}</h2>
        </div>

        <div className='main-content' style={{height: '60vh', marginTop: '0'}}>
            <h3 className='window-heading-text'>{text.body}</h3>
        </div>

    </div>
    );
}

export default Window;