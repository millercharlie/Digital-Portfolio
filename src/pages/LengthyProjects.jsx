import NavBar from "../components/NavBar.jsx";
import content from "../utilities/lengthyprojects.json";
import PropTypes from "prop-types";

export default function LengthyProjects({ project }) {
  const title = content[project - 1].title;
  const image = content[project - 1].image;
  const contents = content[project - 1].content;

  LengthyProjects.propTypes = {
    project: PropTypes.object.isRequired,
  };

  return (
    <div className="background">
      <NavBar fun={() => {}} textColor="59473E" />
      <div
        style={{
          alignItems: "center",
          marginLeft: "20%",
          marginRight: "20%",
          whiteSpace: "pre-line",
        }}
      >
        <div id="title" style={{ textAlign: "center" }}>
          <h2 className="ps-title">{title}</h2>
        </div>
        <img
          src={image.src}
          alt={image.alt}
          style={{ width: "100%", borderRadius: "15px" }}
        />
        <div style={{ color: "#59473E" }}>
          {contents.map((content, index) => {
            if (typeof content === "object") {
              if (content.image) {
                return (
                  <div style={{ marginLeft: "7.5%" }} key={index}>
                    <img
                      src={content.image.src}
                      alt={content.image.alt}
                      key={content.image.alt}
                      style={{ width: "85%", borderRadius: "15px" }}
                    />
                    <p
                      key={content.image.alt}
                      style={{
                        fontSize: "14px",
                        color: "#656565",
                        fontFamily: "ubuntu, sans-serif",
                        marginTop: "0px",
                      }}
                    >
                      {content.image.alt}
                    </p>
                  </div>
                );
              } else if (content.sub_subheader) {
                return (
                  <h3 key={content.sub_subheader} style={{ marginTop: "20px" }}>
                    {content.sub_subheader}
                  </h3>
                );
              } else {
                return (
                  <h2 key={content.subheader} style={{ marginTop: "20px" }}>
                    {content.subheader}
                  </h2>
                );
              }
            } else {
              return (
                <p key={content} style={{ fontFamily: "avenir, sans-serif" }}>
                  {content}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
