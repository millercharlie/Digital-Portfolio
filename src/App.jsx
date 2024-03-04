import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Window from './components/Window'
import './App.css'
import AppFolder from "./components/AppFolder.jsx";

/**
 * The App Component of this portfolio. This acts as the entry point for the user.
 * @returns {JSX.Element} the App to be rendered first
 */
function App() {
    return (
        <>
            <div>
                <NavBar/>
            </div>
            <div className='center'>
                <Window/>
            </div>
            <div style={{position: 'absolute', marginTop: '-35vh'}}>
                <AppFolder icon='src/assets/cf.png' text='Home' window='home'/>
                <AppFolder icon='src/assets/Work Icon New.png' text='Projects' window='projects'/>
                <AppFolder icon='src/assets/About Icon New.png' text='About' window='about'/>
            </div>
            <div className='center'>
                <Footer/>
            </div>
        </>
    )
}

export default App;
