import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectShowcase from "./pages/ProjectShowcase.jsx";

/**
 * The App Component of this portfolio. This acts as the entry point for the user.
 * @returns {JSX.Element} The Component to be rendered first
 */
function App() {
  // Initialize a global variable called "colorMode". Can be "one", "two", or "three".
  // TODO: Make this a cookie and saved in local storage to avoid a reset on render
  window.colorMode = localStorage.getItem("mode");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project-one" element={<ProjectShowcase project={1} />} />
        <Route path="project-two" element={<ProjectShowcase project={2} />} />
        <Route path="project-three" element={<ProjectShowcase project={3} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
