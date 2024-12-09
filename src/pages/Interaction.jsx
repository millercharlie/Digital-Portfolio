import NavBar from "../components/NavBar.jsx";
import sitemap from "../assets/interaction/App Sitemap.png";
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
import storyboard from "../assets/interaction/Storyboard.png";
import uiExploration from "../assets/interaction/UI Exploration.png";
import usabilityTesting from "../assets/interaction/Usability Testing.png";
import workflows from "../assets/interaction/Workflows.png";

export default function Interaction() {
  const images = [
    readingLog,
    hunches,
    persona,
    storyboard,
    workflows,
    featureList,
    sitemap,
    digitalPrototype,
    usabilityTesting,
    moodboard,
    uiExploration,
    highFi,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
  ];
  const text = [
    "Reading Log",
    "Hunch Sketches",
    "Persona",
    "Storyboard",
    "Workflows",
    "Feature List",
    "Site Map/How Might We",
    "Digital Wireframes",
    "Usability Testing",
    "Moodboard",
    "UI Exploration",
    "High-Fidelity Prototype",
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
  ]

  return (
    <div style={{ backgroundColor: "#FFFBF5"}}>
      <NavBar fun={() => {}} textColor="59473E" />
      <div  style={{margin: "auto", width: "60%"}}>
        {images.map((image, index) => {
          return (
            <div key={`div-${index}`} style={{color: "#958177"}}>
              <h3>{text[index]}</h3>
              <img
                src={image}
                alt={`image-${index}`}
                style={{maxWidth: "60vw"}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
