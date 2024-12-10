import NavBar from "../components/NavBar.jsx";
import interview from "../assets/interaction/Interview.png";
import postIts from "../assets/interaction/Post-It Notes.png";
import sitemap from "../assets/interaction/App Sitemap.png";
import paperPrototypes from "../assets/interaction/Paper Prototypes.png";
import digitalPrototype from "../assets/interaction/Digital Prototypes.png";
import featureList from "../assets/interaction/Feature List.png";
import highFi from "../assets/interaction/High-Fidelity Prototype.png";
import moodboard from "../assets/interaction/Moodboard.png";
import persona from "../assets/interaction/Persona.png";
import hunches from "../assets/interaction/Prototypes.png";
import readingLog from "../assets/interaction/Reading Log – Interaction Design - Sheet1.png";
import slide2 from "../assets/interaction/Reading Redesign Presentation (1).png";
import slide3 from "../assets/interaction/Reading Redesign Presentation (2).png";
import slide4 from "../assets/interaction/Reading Redesign Presentation (3).png";
import slide5 from "../assets/interaction/Reading Redesign Presentation (4).png";
import slide6 from "../assets/interaction/Reading Redesign Presentation (5).png";
import slide7 from "../assets/interaction/Reading Redesign Presentation (6).png";
import slide8 from "../assets/interaction/Reading Redesign Presentation.jpg";
import slide9 from "../assets/interaction/Slide 9.png";
import styleGuide from "../assets/interaction/Style Guide.png";
import storyboard from "../assets/interaction/Storyboard.png";
import uiExploration from "../assets/interaction/UI Exploration.png";
import usabilityTesting from "../assets/interaction/Usability Testing.png";
import workflows from "../assets/interaction/Workflows.png";

export default function Interaction() {
  const images = [
    interview,
    postIts,
    readingLog,
    hunches,
    persona,
    storyboard,
    workflows,
    featureList,
    sitemap,
    paperPrototypes,
    digitalPrototype,
    usabilityTesting,
    moodboard,
    uiExploration,
    styleGuide,
    highFi,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9
  ];
  const text = [
    "Interview",
    "Group Research Post-It Notes",
    "Reading Log",
    "Hunch Sketches",
    "Persona",
    "Storyboard",
    "Workflows",
    "Feature List",
    "Site Map/How Might We",
    "Paper Wireframes",
    "Digital Wireframes",
    "Usability Testing",
    "Moodboard",
    "UI Explorations",
    "Style Guide",
    "High-Fidelity Prototype",
    "Presentation Slide 1",
    "Presentation Slide 2",
    "Presentation Slide 3",
    "Presentation Slide 4",
    "Presentation Slide 5",
    "Presentation Slide 6",
    "Presentation Slide 7",
    "Presentation Slide 8",
    "Presentation Slide 9",
  ];

  return (
    <div style={{ backgroundColor: "#FFFBF5" }}>
      <NavBar fun={() => {}} textColor="59473E" />
      <div style={{ margin: "auto", width: "60%" }}>
        {images.map((image, index) => {
          return (
            <div key={`div-${index}`} style={{ color: "#958177" }}>
              <h3>{text[index]}</h3>
              <img
                src={image}
                alt={`image-${index}`}
                style={{ maxWidth: "60vw" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
