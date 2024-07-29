import CULogo from "../assets/navbar_icons/cu.png";
import GULogo from "../assets/navbar_icons/gu.png";
import CFLogo from "../assets/navbar_icons/cf.png";
import GFLogo from "../assets/navbar_icons/gf.png";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Represents a navigation bar to be displayed on all pages.
 *
 * @param background {string} Background color of this navigation bar
 * @param fun {function} Callback function to handle various styling in different Components
 * @param icon {string} String with an icon to be rendered
 * @param textColor {string} Color of the navigation bar's text
 *
 * @returns {JSX.Element} Navigation Bar.
 */
function NavBar({ background, fun, icon, textColor }) {
  const [visibility, setVisibility] = useState(window.innerWidth > 600);
  const [dropdown, setDropdown] = useState(false);

  /**
   * Handles the style of the text and logo image.
   * @returns {{logo: {}, textColor: string}}
   */
  const handleStyles = () => {
    let styles = {};
    if (window.colorMode === "one") {
      styles = {
        logo: {
          unfilled: CULogo,
          filled: CFLogo,
        },
      };
    } else {
      styles = {
        logo: {
          unfilled: GULogo,
          filled: GFLogo,
        },
      };
    }
    return styles;
  };

    /**
     * Handles user selection of the dropdown menu.
     */
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

    /**
     * Opens my resume when the user clicks on the "Resume" button in the navigation bar.
     */
  const openPDF = () => {
      const pdf = 'src/assets/resume.pdf'
      window.open(pdf, "_blank");
      console.log('called')
  }

    /**
     * Dynamically updates the website for mobile devices
     */
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      setVisibility(false);
    } else {
      setVisibility(true);
      setDropdown(false);
    }
  });

  NavBar.propTypes = {
    background: PropTypes.string,
    fun: PropTypes.func.isRequired,
    icon: PropTypes.string,
    textColor: PropTypes.string,
  };

  return (
    <nav
      className="nav-bar"
      style={
        visibility
          ? background === ""
            ? { backgroundColor: "rgba(255, 255, 255, 0)" }
            : { backgroundColor: background }
          : { backgroundColor: "rgba(0, 0, 0, 0)" }
      }
    >
      <div className="nav-left">
        <a href="/">
          <img
            src={handleStyles().logo.unfilled}
            style={{ maxWidth: "70px" }}
            className="nav-image"
            alt={"nav-image-" + window.colorMode}
          />
          <img
            src={handleStyles().logo.filled}
            className={"nav-image-hover"}
            alt={"nav-image-hover"}
          />
        </a>
        <div
          style={
            visibility
              ? { visibility: "visible", display: "inline-flex" }
              : { visibility: "hidden", display: "none" }
          }
        >
          <a href="projects">
            <h4 style={{ color: textColor || "rgba(0, 0, 0, 0.70)" }}>
              Projects
            </h4>
          </a>
          <a href="about">
            <h4 style={{ color: textColor || "rgba(0, 0, 0, 0.70)" }}>About</h4>
          </a>
          <a href="contact">
            <h4 style={{ color: textColor || "rgba(0, 0, 0, 0.70)" }}>
              Contact
            </h4>
          </a>
          <a>
            <h4
              style={{
                color: textColor || "rgba(0, 0, 0, 0.70)",
                cursor: "pointer",
              }}
              onClick={openPDF}
            >
              Resume
            </h4>
          </a>
        </div>
        <div>
          <img
            src="src/assets/navbar_icons/hamburger-right.svg"
            alt="hamburger-right"
            className="nav-darktoggle hamburger"
            onClick={handleDropdown}
            style={
              visibility
                ? { visibility: "hidden", display: "none" }
                : { visibility: "visible", display: "inline-flex" }
            }
          />
        </div>
      </div>
      {dropdown && (
        <div className="dropdown-menu-container">
          <div className="dropdown-menu">
            <a href="projects">
              <h4 style={{ color: textColor || "rgba(0, 0, 0, 0.70)" }}>
                Projects
              </h4>
            </a>
            <a href="about">
              <h4 style={{ color: textColor || "rgba(0, 0, 0, 0.70)" }}>
                About
              </h4>
            </a>
            <a href="contact">
              <h4 style={{ color: textColor || "rgba(0, 0, 0, 0.70)" }}>
                Contact
              </h4>
            </a>
            <a>
              <h4
                style={{
                  color: textColor || "rgba(0, 0, 0, 0.70)",
                  cursor: "pointer",
                }}
                onClick={openPDF}
              >
                Resume
              </h4>
            </a>
          </div>
        </div>
      )}
      {icon && (
        <button onClick={fun} className="nav-right">
          <img src={icon} alt={"Colorway Toggle"} className="nav-darktoggle" />
        </button>
      )}
    </nav>
  );
}

export default NavBar;
