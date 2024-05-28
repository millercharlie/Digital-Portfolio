import PropTypes from 'prop-types';
import '/src/index.css';
import text from '../utilities/windowtext.json';

/**
* Represents a window of this website. Each window corresponds with an app folder on the Home screen.
*
* @param mode {string} The type of window this is
* @param isVisible {boolean} true if this window is currently visible
* @param func {function} The callback function to the parent Component
*
* @returns {JSX.Element} A Window with a title, body text, and link to its appropriate page
*/
function ClassicWindow({ mode, isVisible, func }) {

    ClassicWindow.propTypes = {
        isVisible: PropTypes.bool.isRequired,
        mode: PropTypes.string.isRequired,
        func: PropTypes.func.isRequired,
    }

    /**
    * Sets the visibility of the window to hidden when the Close button is clicked.
    */
    const handleClick = (event) => {
        func(event);
    };

    const windowText = text[mode];
    console.log(mode);
    console.log(windowText);

    return (
        <div className='window-classic' style={isVisible ? {visibility: 'visible', filter: 'drop-shadow(1, 1, 1, 4)'}
            : {visibility: 'hidden', display: 'none'}}>
            <div className='window-heading-classic'>
                <h2 className='window-heading-text-classic'>{windowText.title}</h2>
                <div>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
                <div className='window-heading-icons'>
                    <a href={mode !== 'Home' ? mode.toLowerCase() : '/'} className='window-link'>
                        <div className='icon-button'>
                            <img src='src/assets/menu_icons/expand-icon-classic.png' alt='Expand' className='icon-image'/>
                        </div>
                    </a>
                    <div className='icon-button'>
                        <img src='src/assets/menu_icons/close-icon-classic.png' alt='Close' className='icon-image' id='close'
                            onClick={handleClick}/>
                    </div>
                </div>
            </div>
            <div className='main-content-classic' style={{height: '60vh', marginTop: '0'}}>
                <h3 className='window-main-text'>{windowText.body}</h3>
            </div>
        </div>
    );
}

export default ClassicWindow;
