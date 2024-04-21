import PropTypes from "prop-types";
import '/src/index.css';

/**
 * Represents a window of this website. Each window corresponds with an app folder on the Home screen.
 * @param isVisible {boolean} true if this window is currently visible
 * @param type {string} the type of window this is
 * @param expandLink {string} the link this window's expand button refers to
 * @param func {function} the callback function to the parent Component
 * @returns {JSX.Element} of a Window with a title, body text, and link to its appropriate page
 */
function Window({ isVisible, type, /*expandLink*/ func }) {

    /**
     * Sets the text of this window.
     */
    const setText = () => {
        let text = {title: '', body: ''};
        switch (type) {
            case 'Projects':
                text.title = 'Projects';
                text.body = 'Welcome to the projects window! I am passionate about many things, and enjoy leveraging'
                    + ' my knowledge of both computer science and design to create projects that are functional,'
                    + ' beautiful, and serve a particular purpose. I have decided to showcase three of my recent'
                    + ' projects in this portfolio, which each have icons below. The first is my congress.gov website'
                    + ' redesign concept. The second is my ___, and finally the third is ___.'
                    + ' When you click on one of the icons, it will take you directly to your chosen project\'s'
                    + ' respective section in the "Projects" page. If you\'d prefer the full experience of the projects'
                    + ' page, click the square icon in the menu bar of this window!'
                break;
            case 'About':
                text.title = 'About';
                text.body = 'aboot (for the canadians)'
                break;
            case 'Contact':
                text.title = 'Contact';
                text.body = 'aint no way'
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
        func(event);
    };

    return (
        <div className='window' style={isVisible ? {visibility: 'visible', filter: 'drop-shadow(1, 1, 1, 4)'}
            : {visibility: 'hidden'}}>
            <div className='window-heading'>
                <h2 className='window-heading-text'>{text.title}</h2>
                <div className='window-heading-icons'>
                    <div className='icon-button'>
                        <img src='src/assets/menu_icons/minimize-icon.png' alt='Minimize'
                             className='icon-image-minimize'/>
                    </div>
                    <a href={type !== "Home" ? type.toLowerCase() : "/"} className='window-link'>
                        <div className='icon-button'>
                            <img src='src/assets/menu_icons/expand-icon.png' alt='Expand' className='icon-image'/>
                        </div>
                    </a>
                    <div className='icon-button'>
                        <img src='src/assets/menu_icons/close-icon.png' alt='Close' className='icon-image' id='close'
                             onClick={handleClick}/>
                    </div>
                </div>
            </div>
            <div className='main-content' style={{height: '60vh', marginTop: '0'}}>
                <h3 className='window-main-text'>{text.body}</h3>
            </div>
        </div>
    );
}

export default Window;