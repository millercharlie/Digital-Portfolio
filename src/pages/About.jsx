import NavBar from "../components/NavBar.jsx";
import git from "../utilities/gitcommits.json";
import { useEffect, useState } from "react";
import sunIcon from "../assets/navbar_icons/sun_icon.svg";
import brewIcon from "../assets/navbar_icons/brew_icon.png";

/**
 * Represents the About page of this website. This page is meant to look like a Git repository with branches
 *   representing each piece of personal information.
 *
 * @returns {JSX.Element} About page
 */
export default function About() {
  const [colorway, setColorway] = useState(window.colorMode || "one");
  const [toggle, setToggle] = useState(
    window.colorMode === "two" ? sunIcon : brewIcon,
  );
  const [popup, setPopup] = useState(<></>);

  /**
   * Creates an unordered list of random bytes (0 or 1) that float down the screen.
   * @returns {string[]} array of bytes
   */
  const randomBytes = () => {
    let bytes = [];
    for (let i = 0; i < 300; i++) {
      bytes.push(Math.round(Math.random()));
    }
    return bytes;
  };

  // TODO: Add support for multiple screen sizes

  // TEMPORARY!
  console.error = () => {return "Ignore! React is being a bit silly and goofy"};

  /**
   * Sets the animation and colorway for all bytes in the unordered list.
   * @returns {{color: string, animationDelay: string, fontSize: number, opacity: number, animation: string}}
   */
  const handleStyle = () => {
    return {
      color: getColors("byte"),
      cursor: "default",
      fontSize: Math.floor(Math.random() * 25) + 8,
      opacity: Math.floor(Math.random() * 55) + 10,
      animation:
        "background-bytes " +
        Math.floor(Math.random() * 50 + 15) +
        "s forwards infinite",
      animationDelay: "-" + Math.floor(Math.random() * 40) + "s",
    };
  };

  // Each circle is 60px apart, with each branch going out by 50px in each direction

  /**
   * Gets the correct color from the color mode and the type, which is one of:
   * - text
   * - primary
   * - secondary
   * - tertiary
   * - quaternary
   * - stroke
   * @param type {string} The type of color to return
   * @returns {string} Hex color to render
   */
  const getColors = (type) => {
    switch (colorway) {
      case "one":
        switch (type) {
          case "text":
            return "#000000";
          case "primary":
            return "#F65555";
          case "secondary":
            return "#7DD6D1";
          case "tertiary":
            return "#BA61FF";
          case "quaternary":
            return "#96E765";
          case "stroke":
            return "#FFFFFF";
          case "nav":
            return "#646cff";
          case "byte":
            return "#000000";
        }
        break;
      case "two":
        switch (type) {
          case "text":
            return "#2AFE14";
          case "primary":
            return "#970001";
          case "secondary":
            return "#5B32F2";
          case "tertiary":
            return "#A6A6A6";
          case "quaternary":
            return "#2AFE14";
          case "stroke":
            return "#000000";
          case "nav":
            return "#FFFFFF";
          case "byte":
            return "rgba(42, 254, 20, 0.50)";
        }
        break;
    }
  };

  const colorModeSwitch = () => {
    let newColorway = colorway === "one" ? "two" : "one";
    setColorway(newColorway);
    window.colorMode = newColorway;
    setToggle(newColorway === "two" ? sunIcon : brewIcon);
    localStorage.setItem("mode", newColorway);
  };

  const createPopup = (event, text) => {
    console.log(`(${event.pageX}, ${event.pageY})`);
    const offsetX = event.pageX;
    const offsetY = event.pageY;

    const newPopup = (
      <p
        className="popup"
        style={{ position: "absolute", top: offsetY, left: offsetX }}
        onClick={() => {
          setPopup(<></>);
        }}
      >
        {text}
      </p>
    );
    setPopup(newPopup);
  };

  useEffect(() => {
    // Update cookie when colorway changes
    document.cookie = `mode=${colorway};`;
  }, [colorway]);

  return (
    <div className={"about-" + colorway}>
      <NavBar
        background={getColors("background")}
        fun={colorModeSwitch}
        icon={toggle}
        textColor={getColors("nav")}
      />
      {window.innerWidth <= 600 && (
        <svg width="100%" height="70px" className="rect">
          <rect
            x={0}
            y={0}
            width="100%"
            height="70px"
            fill={window.colorMode === "one" ? "white" : "black"}
          />
        </svg>
      )}
      {popup}
      <div className="background-container">
        <ul className="bytes-ul">
          {randomBytes().map((byte, index) => {
            return (
              <li key={"item " + index} style={handleStyle()}>
                {byte}
              </li>
            );
          })}
        </ul>
      </div>
      <svg
        height="1600px"
        width={window.innerWidth <= "600px" ? "600px" : "100%"}
        className="git-repo"
      >
        {git.map((commit, index) => {
          switch (commit.type) {
            case "line":
              return (
                <path
                  d={commit.d}
                  fill="none"
                  stroke={getColors(commit.color)}
                  strokeWidth="3"
                  className={commit.color}
                  key={`line-${index}`}
                />
              );
            case "circle":
              return (
                <circle
                  cx={commit.x}
                  cy={commit.y}
                  r="8px"
                  fill={getColors(commit.color)}
                  stroke={getColors("stroke")}
                  strokeWidth="3"
                  key={`circle-${index}`}
                />
              );
            case "text":
              if (commit.expand) {
                return (
                  <text
                    x={commit.x}
                    y={commit.y}
                    fontSize="14"
                    fill={getColors("text")}
                    key={`text-${index}`}
                    textDecoration="underline"
                    onClick={(event) => createPopup(event, commit.popup)}
                    style={{ cursor: "pointer" }}
                    id={`text-${index}`}
                  >
                    {commit.text}
                  </text>
                );
              }
              return (
                <text
                  x={commit.x}
                  y={commit.y}
                  fontSize="14"
                  fill={getColors("text")}
                  key={`text-${index}`}
                >
                  {commit.text}
                </text>
              );
          }
        })}
      </svg>
    </div>
  );
}
