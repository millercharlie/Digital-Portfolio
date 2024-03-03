import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Window from './components/Window'
import './App.css'
import AppFolder from "./components/AppFolder.jsx";

function App() {
    return (
      <>
          <div>
              <NavBar/>
          </div>
          <div className='center'>
              <Window/>
          </div>
          <div className='center'>
              <Footer/>
          </div>
          <div>
              <AppFolder icon='src/assets/cf.png' text='Home' window='home'/>
          </div>
          <div>
              <AppFolder icon='src/assets/Work Icon New.png' text='Projects' window='projects'/>
          </div>
          <div>
              <AppFolder icon='src/assets/About Icon New.png' text='About' window='about'/>
          </div>
      </>
  )
}

export default App;
