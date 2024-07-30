import { useEffect, useState } from "react";
import Window from "../components/Window.jsx";
import NavBar from "../components/NavBar.jsx";
import AppFolder from "../components/AppFolder.jsx";
import classicIcon from "../assets/navbar_icons/classic_icon.svg";
import modernIcon from "../assets/navbar_icons/modern2_icon.svg";
import ClassicWindow from "../components/ClassicWindow.jsx";

/**
 * Represents the Home page of this website. The Home page is meant to look like a desktop, with options of toggling
 *   the classic mode and modern mode.
 * @returns {JSX.Element} Home page of this website
 */
export default function Home() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("empty");
  const [windowContent, setWindowContent] = useState(<></>);
  const [toggle, setToggle] = useState(
    window.colorMode === "one" ? classicIcon : modernIcon,
  );

  const handleClick = (event) => {
    if (event.target.id === "close") {
      setVisible(false);
    } else {
      setVisible(true);
      setMode(event.target.alt.toLowerCase());
    }
  };

  /**
   * Switches the global variable and changes the toggle icon.
   */
  const handleToggle = () => {
    window.colorMode = window.colorMode === "one" ? "two" : "one";
    setToggle(window.colorMode === "one" ? classicIcon : modernIcon);
    localStorage.setItem("mode", window.colorMode.toString());
    setWindowContent(
      window.colorMode === "one" ? (
        <Window isVisible={visible} mode={mode} func={handleClick} />
      ) : (
        <ClassicWindow isVisible={visible} mode={mode} func={handleClick} />
      ),
    );
  };

  const getIcon = (app) => {
    if (window.colorMode === "one") {
      return `../assets/app_icons/${app}_icon_new.png`;
    } else {
      return `../assets/app_icons/${app}_icon_classic.png`;
    }
  };

  // TODO: Window Crashes Occasionally because 'type' variable is undefined. Fix this.
  // It seems to be when you switch too quickly

  useEffect(() => {
    setWindowContent(
      window.colorMode === "one" ? (
        <Window isVisible={visible} mode={mode} func={handleClick} />
      ) : (
        <ClassicWindow isVisible={visible} mode={mode} func={handleClick} />
      ),
    );
  }, [visible, mode]);

  return (
    <div className={"home-" + window.colorMode}>
      <div>
        <NavBar
          background="rgba(255, 255, 255, 0.85)"
          icon={toggle}
          fun={handleToggle}
          textColor="#000000"
        />
      </div>
      <h1
        className="h1-home"
        style={
          window.colorMode === "one" ? {mixBlendMode: "difference", color: "#9CBAA9"} : {color: "white"}
        }
      >
        Hi! I&apos;m Charlie Miller.
      </h1>
      <h1
        className="h1-home-2"
        style={
          window.colorMode === "one" ? {mixBlendMode: "difference", color: "#9CBAA9"} : {color: "white"}
        }
      >
        Welcome to my website.
      </h1>
      <h3
        className="h3-home"
        style={
          window.colorMode === "one"
            ? {mixBlendMode: "difference", color: "#9CBAA9"}
            : {color: "white"}
        }
      >
        To begin, you can click on an App Icon in the bottom-left corner. This will open
        up a window.
        <br/>
        <br/>
        To enter the page in fullscreen view, click the 🔳 in the window&apos;s
        menu bar.
        <br/>
        <br/>
        Click the icon in the top-right corner of your screen for a surprise!
      </h3>
      <div className="app-folder-container">
        <AppFolder
          icon={getIcon("work")}
          text="Projects"
          window="projects"
          func={handleClick}
        />
        <AppFolder
          icon={getIcon("about")}
          text="About"
          window="about"
          func={handleClick}
        />
        <AppFolder
          icon={getIcon("contact")}
          text="Contact"
          window="contact"
          func={handleClick}
        />
      </div>
      <div className="home-window">{windowContent}</div>
    </div>
  );
}
