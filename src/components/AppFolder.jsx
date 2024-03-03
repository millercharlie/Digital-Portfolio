import PropTypes from "prop-types";

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

    return (<div className='app-folder' style={{textAlign: 'center', maxWidth: '10%', marginBottom: '2%'}}>
        <a href={window}>
            <img src={icon} alt={text + ' image'} style={{maxWidth: '70%'}}/>
        </a>
        <h3 style={{color: '#FFFFFF', filter: 'drop-shadow(0 0 4px #777777)', marginTop: '0'}}>{text.toString()}</h3>
    </div>);
}