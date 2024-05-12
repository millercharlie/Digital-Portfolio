import {useEffect, useState} from 'react';
import Window from '../components/Window.jsx';
import NavBar from '../components/NavBar.jsx';
import AppFolder from '../components/AppFolder.jsx';

/**
 * Represents the Home page of this website. The Home page is meant to look like a desktop, with options of toggling
 *   the classic mode and modern mode.
 * @returns {JSX.Element} Home page of this website
 */
export default function Home() {
    const [visible, setVisible] = useState(false);
    const [mode, setMode] = useState('empty');
    const [windowContent, setWindowContent] = useState(<></>);
    const [toggle, setToggle] = useState('src/assets/moon-icon.png')

    const handleClick = (event) => {
        if (event.target.id === 'close') {
            setVisible(false);
        }
        else {
            setVisible(true);
            setMode(event.target.alt.toLowerCase());
        }
    }

    /**
     * Switches the global variable and changes the toggle icon
     */
    const handleToggle = () => {
        if (window.colorMode === 'one') {
            window.colorMode = 'two';
            setToggle('src/assets/sun-icon.png');
        }
        else {
            window.colorMode = 'one';
            setToggle('src/assets/moon-icon.png')
        }
    }

    // TODO: Window Crashes Occasionally because 'type' variable is undefined. Fix this.
       // It seems to be when you switch too quickly

    useEffect(() => {
        setWindowContent(<Window isVisible={visible} mode={mode} func={handleClick}/>);
    }, [visible, mode]);

    return (
        <div className='home-one'>
            <div>
                <NavBar background='#FFFFFF'
                        icon={toggle}
                        fun={handleToggle}
                        textColor='#000000'
                />
            </div>
            <div className='center'>
                {windowContent}
            </div>
            <div style={{position: 'absolute', marginTop: '-38vh', marginLeft: '2vw'}}>
                <AppFolder icon='src/assets/work-icon-new.png' text='Projects' window='projects' func={handleClick}/>
                <AppFolder icon='src/assets/about-icon-new.png' text='About' window='about' func={handleClick}/>
                <AppFolder icon='src/assets/sun-icon.png' text='Contact' window='contact' func={handleClick}/>
            </div>
        </div>
    );
}