import NavBar from "../components/NavBar.jsx";
import { useRef, useState } from "react";
import Window from "../components/Window.jsx";

export default function Projects() {
  const totalVisibility = { one: false, two: false, three: false };
  const [windowVisibility, setWindowVisibility] = useState(totalVisibility);
  const [windowMode, setWindowMode] = useState("empty");

  const trains = [
    "../assets/project_assets/trains/bullet_train.png",
    "../assets/project_assets/trains/commuter_rail.png",
    "../assets/project_assets/trains/avelia_liberty.png",
    "../assets/project_assets/trains/cahsr.png"
  ];
  const randomizedTrain = useRef(trains[~~(Math.random() * trains.length)]);

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

    scrollSection.style.transform = `translate3d(${-percentage}vh, 0, 0)`;
  }

  const handleClick = (event) => {
    if (event.target.alt === "project-one-station") {
      setWindowMode("project-one");
    } else if (event.target.alt === "project-two-station") {
      setWindowMode("project-two");
    } else if (event.target.alt === "project-three-station") {
      setWindowMode("design-portfolio");
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
                  ? { maxHeight: "8vh" }
                  : { maxHeight: "6vh" }
              }
            />
            <div className="scroll-section">
              <div className="swipe-down">
                <h3 className="h3-projects">Swipe/Scroll</h3>
                <img
                  src="../assets/project_assets/down_arrow.png"
                  alt="down-arrow"
                  className="down-arrow"
                />
              </div>
              <div className="stations">
                <div className="station-group-one">
                  <h3 className="h3-projects" style={{ textAlign: "center" }}>
                    Click on this Station!
                  </h3>
                  <img
                    src="../assets/project_assets/stations/project_one_station.png"
                    className="project-one-station"
                    alt="project-one-station"
                    onClick={handleClick}
                  />
                </div>
                <div className="station-group-two">
                  <img
                    src="../assets/project_assets/stations/project_two_station.png"
                    className="project-two-station"
                    alt="project-two-station"
                    onClick={handleClick}
                  />
                </div>
                <div className="station-group-three">
                  <img
                    src="../assets/project_assets/stations/project_three_station.png"
                    className="project-three-station"
                    alt="project-three-station"
                    onClick={handleClick}
                  />
                </div>
              </div>
              <img
                src="../assets/project_assets/train_path.png"
                alt="pillars"
                className="pillars"
              />
              <div className="trees">
                <img
                  src="../assets/project_assets/foreground_trees.png"
                  alt="foreground-trees"
                  className="foreground-trees"
                />
                <img
                  src="../assets/project_assets/background_trees.png"
                  alt="background-trees"
                  className="background-trees"
                />
              </div>
              <img
                src="../assets/project_assets/decorations/railroad_crossing.png"
                alt="railroad-crossing"
                className="railroad-crossing"
              />
              <img
                src="../assets/project_assets/decorations/swiss_clock.svg"
                alt="swiss-clock"
                className="swiss-clock"
              />
              <div className="mountains">
                <img
                  src="../assets/project_assets/decorations/mountains.png"
                  alt="mountain-image"
                  className="mountain-image"
                />
              </div>
              <div id="windows">
                <div className="projects-window project-one-window">
                  <Window
                    mode={windowMode}
                    func={handleClick}
                    isVisible={windowVisibility.one}
                  />
                </div>
                <div className="projects-window project-two-window">
                  <Window
                    mode={windowMode}
                    func={handleClick}
                    isVisible={windowVisibility.two}
                  />
                </div>
                <div className="projects-window project-three-window">
                  <Window
                    mode={windowMode}
                    func={handleClick}
                    isVisible={windowVisibility.three}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
