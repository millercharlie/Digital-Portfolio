import PropTypes from 'prop-types';
import '/src/index.css';

/**
 * Represents an App Folder in the home screen.
 * @param icon {string} App folder icon path
 * @param text {string} App folder text heading
 * @param func {function} Callback function that handles the onClickListener()
 */
export default function AppFolder({icon, text, func}) {

    /**
     * Handles a button click by employing the given callback function.
     * @param event {event} Event to use in the callback function
     */
    const handleClick = (event) => {
        func(event);
    }

    AppFolder.propTypes = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        func: PropTypes.func.isRequired
    }

    return (
        <div className='app-folder'>
            <button style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} onClick={handleClick}>
                <img src={icon} alt={text} style={{maxWidth: '75%'}}/>
            </button>
            <h3 className='app-folder-text'>{text.toString()}</h3>
        </div>
    );
}