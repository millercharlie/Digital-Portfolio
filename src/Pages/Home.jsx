import {useEffect, useState} from "react";
import Window from "../components/Window.jsx";
import NavBar from "../components/NavBar.jsx";
import AppFolder from "../components/AppFolder.jsx";

/**
 * Represents the Home page of this website. The Home page is meant to look like a desktop, with options of toggling
 *     the classic mode and modern mode.
 * @returns {JSX.Element} Home page of this website
 */
export default function Home() {
    const [visible, setVisible] = useState(true);
    const [type, setType] = useState('');
    const [window, setWindow] = useState(<></>);
    const [toggle, setToggle] = useState('src/assets/moon-icon.png')

    const handleClick = (event) => {
        if (event.target.id === 'close') {
            setVisible(false);
        }
        else {
            setVisible(true);
            setType(event.target.alt);
        }
    }

    // TODO: This method
    const handleToggle = (event) => {
        setToggle('src/assets/sun-icon.png');
    }

    // TODO: Window Crashes Occasionally because 'type' variable is undefined. Fix this.
       // It seems to be when you switch too quickly

    useEffect(() => {
        setWindow(<Window isVisible={visible} type={type} func={handleClick}/>);
    }, [visible, type]);

    return (
        <div className='home-colored'>
            <div>
                <NavBar type={'colored'} background='FFFFFF' text='000000' icon={toggle} fun={handleToggle}/>
            </div>
            <div className='center'>
                {window}
            </div>
            <div style={{position: 'absolute', marginTop: '-38vh', marginLeft: '2vw'}}>
                <AppFolder icon='src/assets/work-icon-new.png' text='Projects' window='projects' func={handleClick}/>
                <AppFolder icon='src/assets/about-icon-new.png' text='About' window='about' func={handleClick}/>
                <AppFolder icon='src/assets/sun-icon.png' text='Contact' window='contact' func={handleClick}/>
            </div>
            {/*<div className='center'>*/}
            {/*    <Footer/>*/}
            {/*</div>*/}
        </div>
    )
}