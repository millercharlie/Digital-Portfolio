import PropTypes from "prop-types";
import '/src/index.css';

/**
 * Represents an App Folder in the home screen
 * @param icon the app icon
 * @param text the app test
 * @param window the window
 */
export default function AppFolder({icon, text, window}) {

    AppFolder.propTypes = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        window: PropTypes.string.isRequired
    }

    return (<div className='app-folder'>
        <a href={window}>
            <img src={icon} alt={text + ' image'} style={{maxWidth: '70%'}}/>
        </a>
        <h3 className='app-folder-text'>{text.toString()}</h3>
    </div>);
}