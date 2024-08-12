import PropTypes from "prop-types";
import "/src/index.css";
import text from "../utilities/windowtext.json";

/**
 * Represents a window of this website. Each window corresponds with an app folder on the Home screen.
 *
 * @param mode {string} The type of window this is
 * @param isVisible {boolean} true if this window is currently visible
 * @param func {function} The callback function to the parent Component
 *
 * @returns {JSX.Element} A Window with a title, body text, and link to its appropriate page
 */
function Window({ mode, isVisible, func }) {
  Window.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  };

  /**
   * Sets the visibility of the window to hidden when the Close button is clicked.
   */
  const handleClick = (event) => {
    func(event);
  };

  const windowText = text[mode];
  const windowTitle =
    (window.innerWidth <= 600 || window.outerWidth <= 600) ? windowText.alt : windowText.title;
  const image = text[mode].image;

  return (
    <div
      className="window"
      style={
        isVisible
          ? { visibility: "visible", filter: "drop-shadow(1 1 1rem black)" }
          : { visibility: "hidden", display: "none" }
      }
    >
      <div className="window-heading">
        <h2 className="window-heading-text">{windowTitle}</h2>
        <div className="window-heading-icons">
          <a
            href={
              mode !== "Home"
                ? mode.includes("project-")
                  ? `projects/${mode.toLowerCase()}`
                  : mode.toLowerCase()
                : "/"
            }
            className="window-link"
          >
            <div className="icon-button">
              <img
                src="../assets/menu_icons/expand_icon.png"
                alt="Expand"
                className="icon-image"
              />
            </div>
          </a>
          <div className="icon-button">
            <img
              src="../assets/menu_icons/close_icon.png"
              alt="Close"
              className="icon-image"
              id="close"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="main-content" style={{ height: "60vh", marginTop: "0" }}>
        <h3 className="window-main-text">{windowText.body}</h3>
        {image && (
          <img
            src={image}
            alt={`${windowTitle}-image`}
            className="window-img"
          />
        )}
      </div>
    </div>
  );
}

export default Window;
