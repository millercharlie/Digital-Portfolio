import NavBar from "../components/NavBar.jsx";

export default function DesignPortfolio() {
  return (
    <div className="dp-container">
      <NavBar
        fun={() => {
        }}
        textColor={window.innerWidth <= 600 ? "#0B2747" : "#FFFFFF"}
      />
      {/*<p>Design Portfolio under construction</p>*/}
      <img src="../assets/design_portfolio/jupiter.png" alt="jupiter-image" className="jupiter-img"/>
      <img src="../assets/design_portfolio/death_star.png" alt="death-star-image" className="death-star-img"/>
      <div className="dp-img-container">
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/boston_metro.png"
            alt="mbta-map-in-la-style"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>Boston Subway Map in LA Metro Style</h3>
            <p className="dp">
              I redesigned the subway map of Boston using the design language of
              the LA Metro map.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/metrorail_ad.png"
            alt="la-metro-ad"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>LA Metro Siemens P2000 Car Ad</h3>
            <p className="dp">
              This represents a fictional advertisement I created for the LA
              Metro Siemens P2000 rolling stock.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/lucid-type.gif"
            alt="lucid-type-project"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>Typography I Booklet</h3>
            <p className="dp">
              This project for my Typography I course included creating a
              booklet about two type designers. The style of this is based on
              Macintosh System 1.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/ussr_propaganda.png"
            alt="ussr-propaganda-concept"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>USSR Propaganda Poster</h3>
            <p className="dp">
              This fictional propaganda poster was created for a Design
              Perspectives course research paper, in which I wrote about the
              design language of propaganda from the Soviet Union.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/shape_and_line.png"
            alt="shape-and-line"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>Shapes and Lines Project</h3>
            <p className="dp">
              This piece was created for my Color and Composition course. I
              created abstract art using various shapes and lines to make a
              unique image.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/sus_landing.png"
            alt="students-under-stress-landing-page"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>Students Under Stress</h3>
            <p className="dp">
              In this project, I created a website along with a few friends in
              an engineering course. The aim of the site was to help students
              navigate through the college application process.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/design_portfolio/images/linkedin_banners.png"
            alt="mbta-map-in-la-style"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>LinkedIn Banners</h3>
            <p className="dp">
              I&apos;ve created multiple banners for my LinkedIn profile as my
              design language has changed.
            </p>
          </div>
        </div>
        <div className="img-with-overlay">
          <svg width="100%" height="100%" className="dp-rect">
            <rect width="100%" height="100%" fill="#0B2747"/>
          </svg>
          <img
            src="../assets/navbar_icons/cu.png"
            alt="my-logo"
            className="dp-img"
          />
          <div className="img-overlay">
            <h3>My Logo</h3>
            <p className="dp">
              This logo depicts my initials (CM) in an abstract and minimal
              style using my favorite color pair.
            </p>
          </div>
        </div>
        {window.innerWidth > 600 && (
          <div className="img-with-overlay">
            <svg width="100%" height="100%" className="dp-rect">
              <rect width="100%" height="100%" fill="#0B2747"/>
            </svg>
            <img
              src="../assets/design_portfolio/images/boston_metro.png"
              alt="mbta-map-in-la-style"
              className="dp-img"
            />
            <div className="img-overlay">
              <h3>LA Metro Siemens P2000 Car Ad</h3>
              <p className="dp">bruh moment!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}