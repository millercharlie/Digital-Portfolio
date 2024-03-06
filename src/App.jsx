import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Window from './components/Window'
import './App.css'
import AppFolder from "./components/AppFolder.jsx";
import {useEffect, useState} from "react";

/**
 * The App Component of this portfolio. This acts as the entry point for the user.
 * @returns {JSX.Element} the App to be rendered first
 */
function App() {
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

    useEffect(() => {
        setWindow(<Window isVisible={visible} type={type} func={handleClick}/>);
    }, [visible, type]);

    return (
        <>
            <div>
                <NavBar/>
            </div>
            <div className='center'>
                {window}
            </div>
            <div style={{position: 'absolute', marginTop: '-38vh', marginLeft: '2vw'}}>
                <AppFolder icon='src/assets/cf.png' text='Home' window='home' func={handleClick}/>
                <AppFolder icon='src/assets/Work Icon New.png' text='Projects' window='projects' func={handleClick}/>
                <AppFolder icon='src/assets/About Icon New.png' text='About' window='about' func={handleClick}/>
            </div>
            <div className='center'>
                <Footer/>
            </div>
        </>
    )
}

export default App;
