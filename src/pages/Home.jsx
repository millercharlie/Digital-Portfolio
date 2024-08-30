import { useEffect, useState } from "react";
import Window from "../components/Window.jsx";
import NavBar from "../components/NavBar.jsx";
import AppFolder from "../components/AppFolder.jsx";
import classicIcon from "../assets/navbar_icons/classic_icon.svg";
import modernIcon1 from "../assets/navbar_icons/modern1_icon.svg";
import modernIcon2 from "../assets/navbar_icons/modern2_icon.svg";
import modernIcon3 from "../assets/navbar_icons/modern3_icon.svg";
import modernIcon4 from "../assets/navbar_icons/modern4_icon.svg";
import modernIcon5 from "../assets/navbar_icons/modern5_icon.svg";
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
  const [easterEgg, setEasterEgg] = useState(false);

  const allIcons = [modernIcon1, modernIcon2, modernIcon3, modernIcon4, modernIcon5];
  const modernIcon = allIcons[~~(Math.random() * allIcons.length)];

  const [toggle, setToggle] = useState(
    window.colorMode === "one" ? classicIcon : modernIcon,
  );

  let clickCount = 0;

  const handleClick = (event) => {
    if (event.target.id === "close") {
      setVisible(false);
    } else {
      setVisible(true);
      setMode(event.target.alt.toLowerCase());
    }
  };

  document.addEventListener("click", (event) => {
    clickCount++;
    if (clickCount >= 5) {
      setEasterEgg(true);
      setTimeout(() => {
        setEasterEgg(false);
      }, 16000)
    }
    setTimeout(() => {
      clickCount = 0;
    }, 5000)
  });

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
      <svg width="100%" height="110px" className={easterEgg ? "easter-egg" : undefined} style={easterEgg ? {visibility: "visible"} : {display: "none"}}>
        <path d={`M0 100 H 100 V 88 L 107 83 107 92 112 92 112 86 118 86 118 95 124 95 124 93 130 93 130 97 135 97 139 93 143 97 148 97 148 81 154 81 154 76 160 76 160 86 166 86 166 72 175 72 175 92 190 92 190 84 180 84 180 76 190 76 190 68 180 68 180 60 190 60 190 52 207 52 207 60 197 60 197 68 207 68 207 76 197 76 197 84 207 84 207 92 197 92 197 100 215 100 215 90 218 90 218 78 225 78 230 75 230 87 235 87 235 65 239 61 245 61 249 65 249 95 253 95 253 98 260 98 260 89 266 89 266 86 276 86 276 81 281 81 281 92 288 92 288 100 295 100 295 93 Q 295 88, 300 88 L 300 88 300 85 Q 300 80, 305 80 L 330 80 Q 335 80, 335, 85 L 335 88 Q 340 88, 340 93 L 340 100 352 100 352 60 Q 342 63, 342 59 Q 328 59, 337 52 Q 333 40, 346 44 Q 348 36, 356 40 Q 364 33, 366 43 Q 375 43, 370 50 Q 379 59, 365 59 Q 362 63, 358 60 L 358 100 458 100`} fill="none" stroke={window.colorMode === "one" ? "#791f52" : "white"} strokeWidth="3" />
      </svg>
    </div>
  );
}
