import PropTypes from "prop-types";
import '/src/index.css';

/**
 * Represents an App Folder in the home screen.
 * @param icon {string} the app icon path
 * @param text {string} the app text
 * @param func {function} a function
 */
export default function AppFolder({icon, text, func}) {

    AppFolder.propTypes = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        func: PropTypes.func.isRequired
    }

    const handleClick = (event) => {
        func(event);
    }

    return (<div className='app-folder'>
        {/*<a href={window} onClick={func}>*/}
        {/*    <img src={icon} alt={text + ' image'} style={{maxWidth: '70%'}}/>*/}
        {/*</a>*/}
        <button style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} onClick={handleClick}>
            <img src={icon} alt={text} style={{maxWidth: '75%'}}/>
        </button>
        <h3 className='app-folder-text'>{text.toString()}</h3>
    </div>);
}