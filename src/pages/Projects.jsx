import NavBar from "../components/NavBar.jsx";
import react from "../assets/navbar_icons/react.svg";
import { useRef, useState } from "react";
import Window from "../components/Window.jsx";

export default function Projects() {
  const totalVisibility = { one: false, two: false, three: false };
  const [windowVisibility, setWindowVisibility] = useState(totalVisibility);
  const [windowMode, setWindowMode] = useState("empty");

  localStorage.setItem("mode", "one");

  const trains = [
    "src/assets/project_assets/trains/bullet_train.png",
    "src/assets/project_assets/trains/commuter_rail.png",
    "src/assets/project_assets/trains/avelia_liberty.png",
  ];
  const randomizedTrain = useRef(trains[~~(Math.random() * 3)]);

  /**
   * Handles randomization of background
   */
  const randomizeSetting = () => {
    // later
  };

  window.addEventListener("scroll", () => {
    const stickySections = [...document.querySelectorAll(".sticky-content")];
    for (let index = 0; index < stickySections.length; index++) {
      transform(stickySections[index]);
    }
  });

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector(".scroll-section");
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage;

    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  const handleClick = (event) => {
    if (event.target.alt === "project-one-station") {
      setWindowMode("project-one");
    } else if (event.target.alt === "project-two-station") {
      setWindowMode("project-two");
    } else if (event.target.alt === "project-three-station") {
      setWindowMode("project-three");
    }

    if (event.target.id === "close") {
      if (event.target.alt.includes("one")) {
        totalVisibility.one = false;
      } else if (event.target.alt.includes("two")) {
        totalVisibility.two = false;
      } else {
        totalVisibility.three = false;
      }
    } else {
      if (event.target.alt.includes("one")) {
        totalVisibility.one = true;
      } else if (event.target.alt.includes("two")) {
        totalVisibility.two = true;
      } else {
        totalVisibility.three = true;
      }
    }
    setWindowVisibility(totalVisibility);
  };

  return (
    <div className="no-overscroll" style={{ backgroundColor: "#C3F1FF" }}>
      {/*<h2>Projects Page Under Construction</h2>*/}
      <div className="sticky-parent">
        <div className="sticky-content">
          <NavBar background="#FFFFFF" fun={randomizeSetting} />
          <div className="background-scene">
            <img
              src={randomizedTrain.current}
              className="bullet-train"
              alt="train"
              style={
                randomizedTrain.current.includes("commuter_rail")
                  ? { maxHeight: "80px" }
                  : { maxHeight: "60px" }
              }
            />
            <div className="scroll-section">
              <div className="swipe-down">
                <h3 className="h3-projects">Swipe/Scroll</h3>
                <img
                  src="src/assets/project_assets/down-arrow.png"
                  alt="down-arrow"
                  className="down-arrow"
                />
              </div>
              <div className="stations">
                <div className="station-group-one">
                  <h3 className="h3-projects" style={{ textAlign: "center" }}>
                    Click on this Station!
                  </h3>
                  <div className="projects-window">
                    <Window
                      mode={windowMode}
                      func={handleClick}
                      isVisible={windowVisibility.one}
                    />
                  </div>
                  <img
                    src="src/assets/project_assets/project-one-station.png"
                    className="project-one-station"
                    alt="project-one-station"
                    onClick={handleClick}
                  />
                </div>
                <div className="station-group-two">
                  <div className="projects-window">
                    <Window
                      mode={windowMode}
                      func={handleClick}
                      isVisible={windowVisibility.two}
                    />
                  </div>
                  <img
                    src="src/assets/project_assets/project-two-station.png"
                    className="project-two-station"
                    alt="project-two-station"
                    onClick={handleClick}
                  />
                </div>
              </div>
              <img
                src="src/assets/project_assets/columns.svg"
                alt="pillars"
                className="pillars"
              />
              <div className="trees">
                <img
                  src="src/assets/project_assets/foreground-trees.png"
                  alt="foreground-trees"
                  className="foreground-trees"
                />
                <img
                  src="src/assets/project_assets/background-trees.png"
                  alt="background-trees"
                  className="background-trees"
                />
              </div>
              <div className="mountains">
                <img
                  src="src/assets/project_assets/mountains.png"
                  alt="mountain-image"
                  className="mountain-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
