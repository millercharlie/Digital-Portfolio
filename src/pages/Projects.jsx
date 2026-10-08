import NavBar from '../components/NavBar.jsx';
import { useRef, useState, useEffect } from 'react';
import Window from '../components/Window.jsx';
import downArrow from '../assets/project_assets/down_arrow.png';
import stationOne from '../assets/project_assets/stations/project_one_station.png';
import stationTwo from '../assets/project_assets/stations/project_two_station.png';
import stationThree from '../assets/project_assets/stations/project_three_station.png';
import trainPath from '../assets/project_assets/train_path.png';
import foregroundTrees from '../assets/project_assets/foreground_trees.png';
import backgroundTrees from '../assets/project_assets/background_trees.png';
import railroadCrossing from '../assets/project_assets/decorations/railroad_crossing.png';
import swissClock from '../assets/project_assets/decorations/swiss_clock.svg';
import mountains from '../assets/project_assets/decorations/mountains.png';

export default function Projects() {
  const totalVisibility = { one: false, two: false, three: false };
  const [windowVisibility, setWindowVisibility] = useState(totalVisibility);
  const [windowMode, setWindowMode] = useState('empty');

  const trains = Object.values(
    import.meta.glob('../assets/project_assets/trains/*.png', {
      eager: true,
      import: 'default',
    })
  );
  const randomizedTrain = useRef(trains[~~(Math.random() * trains.length)]);

  /**
   * Handles randomization of background
   */
  const randomizeSetting = () => {
    // later
  };

  // window.addEventListener("scroll", () => {
  //   const stickySections = [...document.querySelectorAll(".sticky-content")];
  //   for (let index = 0; index < stickySections.length; index++) {
  //     transform(stickySections[index]);
  //   }
  // });

  // function transform(section) {
  //   const offsetTop = section.parentElement.offsetTop;
  //   const scrollSection = section.querySelector(".scroll-section");
  //   let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  //   percentage = percentage < 0 ? 0 : percentage;

  //   scrollSection.style.transform = `translate3d(${-percentage}vh, 0, 0)`;
  // }

  // Claude Addition
  useEffect(() => {
    const measure = () =>
      [...document.querySelectorAll('.sticky-content')].map((section) => ({
        scrollSection: section.querySelector('.scroll-section'),
        top: section.parentElement.offsetTop,
      }));

    let sections = measure();
    let lastWidth = window.innerWidth;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      for (const { scrollSection, top } of sections) {
        const offset = Math.max(0, y - top);
        scrollSection.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        sections = measure();
        update();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleClick = (event) => {
    if (event.target.alt === 'project-one-station') {
      setWindowMode('project-one');
    } else if (event.target.alt === 'project-two-station') {
      setWindowMode('project-two');
    } else if (event.target.alt === 'project-three-station') {
      setWindowMode('design-portfolio');
    }

    if (event.target.id === 'close') {
      if (event.target.alt.includes('one')) {
        totalVisibility.one = false;
      } else if (event.target.alt.includes('two')) {
        totalVisibility.two = false;
      } else {
        totalVisibility.three = false;
      }
    } else {
      if (event.target.alt.includes('one')) {
        totalVisibility.one = true;
      } else if (event.target.alt.includes('two')) {
        totalVisibility.two = true;
      } else {
        totalVisibility.three = true;
      }
    }
    setWindowVisibility(totalVisibility);
  };

  return (
    <div className='no-overscroll' style={{ backgroundColor: '#C3F1FF' }}>
      {/*<h2>Projects Page Under Construction</h2>*/}
      <div className='sticky-parent'>
        <div className='sticky-content'>
          <NavBar background='#FFFFFF' fun={randomizeSetting} />
          <div className='background-scene'>
            <img
              src={randomizedTrain.current}
              className='bullet-train'
              alt='train'
              style={
                randomizedTrain.current.includes('commuter_rail') ||
                randomizedTrain.current.includes('caltrain')
                  ? { maxHeight: '8vh' }
                  : { maxHeight: '6vh' }
              }
            />
            <div className='scroll-section'>
              <div className='swipe-down'>
                <h3 className='h3-projects'>Swipe/Scroll</h3>
                <img src={downArrow} alt='down-arrow' className='down-arrow' />
              </div>
              <div className='stations'>
                <div className='station-group-one'>
                  <h3 className='h3-projects' style={{ textAlign: 'center' }}>
                    Click on this Station!
                  </h3>
                  <img
                    src={stationOne}
                    className='project-one-station'
                    alt='project-one-station'
                    decoding='async'
                    onClick={handleClick}
                  />
                </div>
                <div className='station-group-two'>
                  <img
                    src={stationTwo}
                    className='project-two-station'
                    alt='project-two-station'
                    decoding='async'
                    onClick={handleClick}
                  />
                </div>
                <div className='station-group-three'>
                  <img
                    src={stationThree}
                    className='project-three-station'
                    alt='project-three-station'
                    decoding='async'
                    onClick={handleClick}
                  />
                </div>
              </div>
              <img
                src={trainPath}
                alt='pillars'
                className='pillars'
                decoding='async'
              />
              <div className='trees'>
                <img
                  src={foregroundTrees}
                  alt='foreground-trees'
                  className='foreground-trees'
                  decoding='async'
                />
                <img
                  src={backgroundTrees}
                  alt='background-trees'
                  className='background-trees'
                  decoding='async'
                />
              </div>
              <img
                src={railroadCrossing}
                alt='railroad-crossing'
                className='railroad-crossing'
                decoding='async'
              />
              <img
                src={swissClock}
                alt='swiss-clock'
                className='swiss-clock'
                decoding='async'
              />
              <div className='mountains'>
                <img
                  src={mountains}
                  alt='mountain-image'
                  className='mountain-image'
                  decoding='async'
                />
              </div>
              <div id='windows'>
                <div className='projects-window project-one-window'>
                  <Window
                    mode={windowMode}
                    func={handleClick}
                    isVisible={windowVisibility.one}
                  />
                </div>
                <div className='projects-window project-two-window'>
                  <Window
                    mode={windowMode}
                    func={handleClick}
                    isVisible={windowVisibility.two}
                  />
                </div>
                <div className='projects-window project-three-window'>
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
