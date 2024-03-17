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

    const handleClick = (event) => {
        if (event.target.id === 'close') {
            setVisible(false);
        }
        else {
            setVisible(true);
            setType(event.target.alt);
        }
    }

    // TODO: Window Crashes Occasionally because 'type' variable is undefined. Fix this.
       // It seems to be when you switch too quickly

    useEffect(() => {
        setWindow(<Window isVisible={visible} type={type} func={handleClick}/>);
    }, [visible, type]);

    return (
        <>
            <div>
                <NavBar type={'colored'} background='FFFFFF'/>
            </div>
            <div className='center'>
                {window}
            </div>
            <div style={{position: 'absolute', marginTop: '-38vh', marginLeft: '2vw'}}>
                <AppFolder icon='src/assets/cf.png' text='Home' window='home' func={handleClick}/>
                <AppFolder icon='src/assets/Work Icon New.png' text='Projects' window='projects' func={handleClick}/>
                <AppFolder icon='src/assets/About Icon New.png' text='About' window='about' func={handleClick}/>
            </div>
            {/*<div className='center'>*/}
            {/*    <Footer/>*/}
            {/*</div>*/}
        </>
    )
}