import NavBar from '../components/NavBar.jsx';
import jupiter from '../assets/design_portfolio/jupiter.png';
import deathStar from '../assets/design_portfolio/death_star.png';
import bostonMetro from '../assets/design_portfolio/images/boston_metro.png';
import metrorail from '../assets/design_portfolio/images/metrorail_ad.png';
import ussrPropagandaImg from '../assets/design_portfolio/images/ussr_propaganda.png';
import shapeAndLine from '../assets/design_portfolio/images/shape_and_line.png';
import lucidType from '../assets/design_portfolio/images/lucid-type.gif';
import susLanding from '../assets/design_portfolio/images/sus_landing.png';
import rockwell from '../assets/design_portfolio/images/rockwell_anatomy.png';
import linkedin from '../assets/design_portfolio/images/linkedin_banners.png';
import cu from '../assets/navbar_icons/cu.png';
import { Link } from 'react-router-dom';

export default function DesignPortfolio() {
  return (
    <div className='dp-container'>
      <NavBar
        fun={() => {}}
        textColor={window.innerWidth <= 600 ? '#0B2747' : '#FFFFFF'}
      />
      {/*<p>Design Portfolio under construction</p>*/}
      <img src={jupiter} alt='jupiter-image' className='jupiter-img' />
      <img src={deathStar} alt='death-star-image' className='death-star-img' />
      <div className='dp-img-container'>
        <Link to='/projects/transit' className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img
            src={bostonMetro}
            alt='mbta-map-in-la-style'
            className='dp-img'
          />
          <div className='img-overlay'>
            <h3>Transit Maps and Diagrams</h3>
            <p className='dp'>
              I have designed quite a few transit maps and diagrams. These are
              all housed here!
            </p>
          </div>
        </Link>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img src={metrorail} alt='la-metro-ad' className='dp-img' />
          <div className='img-overlay'>
            <h3>LA Metro Siemens P2000 Car Ad</h3>
            <p className='dp'>
              This represents a fictional advertisement I created for the LA
              Metro Siemens P2000 rolling stock.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img src={lucidType} alt='lucid-type-project' className='dp-img' />
          <div className='img-overlay'>
            <h3>Typography I Booklet</h3>
            <p className='dp'>
              This project for my Typography I course included creating a
              booklet about two type designers. The style of this is based on
              Macintosh System 1.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img
            src={ussrPropagandaImg}
            alt='ussr-propaganda-concept'
            className='dp-img'
          />
          <div className='img-overlay'>
            <h3>USSR Propaganda Poster</h3>
            <p className='dp'>
              This fictional propaganda poster was created for a Design
              Perspectives course research paper, in which I wrote about the
              design language of propaganda from the Soviet Union.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img src={shapeAndLine} alt='shape-and-line' className='dp-img' />
          <div className='img-overlay'>
            <h3>Shapes and Lines Project</h3>
            <p className='dp'>
              This piece was created for my Color and Composition course. I
              created abstract art using various shapes and lines to make a
              unique image.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img
            src={susLanding}
            alt='students-under-stress-landing-page'
            className='dp-img'
          />
          <div className='img-overlay'>
            <h3>Students Under Stress</h3>
            <p className='dp'>
              In this project, I created a website along with a few friends in
              an engineering course. The aim of the site was to help students
              navigate through the college application process.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img src={linkedin} alt='mbta-map-in-la-style' className='dp-img' />
          <div className='img-overlay'>
            <h3>LinkedIn Banners</h3>
            <p className='dp'>
              I&apos;ve created multiple banners for my LinkedIn profile as my
              design language has changed.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img src={cu} alt='my-logo' className='dp-img' />
          <div className='img-overlay'>
            <h3>My Logo</h3>
            <p className='dp'>
              This logo depicts my initials (CM) in an abstract and minimal
              style using my favorite color pair.
            </p>
          </div>
        </div>
        <div className='img-with-overlay'>
          <svg width='100%' height='100%' className='dp-rect'>
            <rect width='100%' height='100%' fill='#0B2747' />
          </svg>
          <img src={rockwell} alt='mbta-map-in-la-style' className='dp-img' />
          <div className='img-overlay'>
            <h3>Rockwell Typeface Anatomy</h3>
            <p className='dp'>
              This project is intended to show the &ldquo;anatomy&rdquo; of the
              Rockwell typeface. Each of its descriptors are listed in this
              image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
