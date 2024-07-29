import NavBar from "../components/NavBar.jsx";
import text from "../utilities/projecttext.json";
import PropTypes from "prop-types";

export default function ProjectShowcase({ project }) {

  const titleText = text[project.toString()].title;
  const descriptionText = text[project.toString()].description;
  const imageSrc = text[project.toString()].img.src;
  const imageAlt = text[project.toString()].img.alt;

  const highlights = text[project.toString()].highlights;
  const tools = text[project.toString()].tools;

  ProjectShowcase.propTypes = {
    project: PropTypes.string.isRequired
  };

  return (
    <>
      <div>
        <NavBar fun={() => {}} />
      </div>
      <div className="">
        <div className="ps-heading">
          <h1 className="ps-title">
            <strong>{titleText}</strong>
          </h1>
          <hr className="ps-hr"/>
          <h2 className="ps-subheading">A Background</h2>
          <p className="ps-description">{descriptionText}</p>
        </div>
        <div className="ps-content">
          <div>
            <h2 className="ps-subheading">Key Highlights</h2>
            {highlights.map(highlight => {
              return <p className="ps-points" key={`${highlight} element`}>{`★ ${highlight}`}</p>;
            })}
            <br/>
            <h2 className="ps-subheading">Tools and Languages</h2>
            {tools.map(tool => {
              if (tool === "HTML") {
                return (
                  <p className="ps-points" key={`${tool} element`}>
                    {`➤ ${tool}`}
                    <img src="src/assets/tool_icons/html.svg" alt="html_icon" className="tool-icon"/>
                  </p>
                );
              }
              else if (tool === "CSS") {
                return (
                  <p className="ps-points" key={`${tool} element`}>
                    {`➤ ${tool}`}
                    <img src="src/assets/tool_icons/css.svg" alt="css_icon" className="tool-icon"/>
                  </p>
                );
              }
              else if (tool === "JavaScript") {
                return (
                  <p className="ps-points" key={`${tool} element`}>
                    {`➤ ${tool}`}
                    {" "}
                    <img src="src/assets/tool_icons/javascript.svg" alt="javascript_icon" className="tool-icon"/>
                  </p>
                );
              }
              else if (tool === "Electron") {
                return (
                  <p className="ps-points" key={`${tool} element`}>
                    {`➤ ${tool}`}
                    {" "}
                    <img src="src/assets/tool_icons/electron.svg" alt="electron_icon" className="tool-icon"/>
                  </p>
                );
              }
              return <p className="ps-points" key={`${tool} element`}>{`➤ ${tool}`}</p>;
            })}
            <br/>
          </div>
          <div>
            <div className="image-carousel">
              {/* FUTURE */}
              {/* CLICKABLE */}
              <img
                className="ps-img"
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}