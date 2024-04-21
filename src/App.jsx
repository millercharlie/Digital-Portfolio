import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

/**
 * The App Component of this portfolio. This acts as the entry point for the user.
 * @returns {JSX.Element} The Component to be rendered first
 */
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='about' element={<About mode='light'/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
