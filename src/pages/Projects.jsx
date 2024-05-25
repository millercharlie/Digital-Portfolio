import NavBar from '../components/NavBar.jsx';
import react from '../assets/navbar_icons/react.svg'
import {useState} from 'react';
import Window from "../components/Window.jsx";

export default function Projects() {

    // TODO: Add support for multiple screen sizes
    // TODO: Are three useState() calls necessary for each window?
    const [windowVisibility, setWindowVisibility] = useState(false);
    const [windowMode, setWindowMode] = useState('empty');

//    /**
//    * Sets the animation and colorway for all trees in the scene.
//    * @returns {{cursor: string, height: number}}
//    */
//    const treeStyles = (treeType) => {
//        let margin = 0;
//        (treeType === 'foreground') ? (margin = Math.floor(Math.random() * 60) - 50)
//            : (margin = Math.floor(Math.random() * 100) - 120)
//
//        return {
//            'height': Math.floor(Math.random() * 150) + 90,
//            'cursor': 'default',
//            'opacity': Math.floor(Math.random() * 55) + 10,
//            'margin-left': margin,
//            };
//    }

//    const getTrees = (treeType) => {
//        let imageSrc;
//        let numTrees;
//        let treeList = [];
//
//        switch(treeType) {
//            case 'background':
//                numTrees = 100;
//                imageSrc = 'src/assets/project_assets/background-tree.svg'
//                break;
//            case 'middleground':
//                numTrees = 80;
//                imageSrc = 'src/assets/project_assets/middleground-tree.svg'
//                break;
//            case 'foreground':
//                numTrees = 50;
//                imageSrc = 'src/assets/project_assets/foreground-tree.svg'
//                break;
//            }
//
//        for (let tIndex = 0; tIndex < numTrees; tIndex++) {
//            treeList.push(<img src={imageSrc}
//                               alt={treeType + '-tree'}
//                               key={treeType + '-tree' + '-index-' + tIndex}
//                               style={treeStyles(treeType)}/>);
//        }
//        return treeList;
//    }

    function getColumns() {
        let answer = [];
        for (let index = 0; index < 100; index++) {
            answer.push(<img src='src/assets/project_assets/column.png'
                             alt={'column #' + index}
                             key={'column #' + index}
                             className='column'/>);
        }
        return answer;
    }

    /**
     * Handles randomization of background
     */
    const randomizeSetting = () => {
        // nah bro
    }

    window.addEventListener('scroll', () => {
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
        console.log(event.target.alt);

        if (event.target.alt === 'project-one-station') {
            setWindowMode('project-one');
        }
        else if (event.target.alt === 'project-two-station') {
            setWindowMode('project-two');
        }

        if (event.target.id === 'close') {
            setWindowVisibility(false);
        }
        else {
            setWindowVisibility(true);
        }
    }


    return (
        <div className='no-overscroll' style={{backgroundColor: '#C3F1FF'}}>
            {/*<h2>Projects Page Under Construction</h2>*/}
            <div className='sticky-parent'>
                <div className='sticky-content'>
                    <NavBar background='#FFFFFF' fun={randomizeSetting} icon={react}/>
                    <div className='background-scene'>
                        <div className='bullet-train'>
                            <img src='src/assets/project_assets/train-car.svg' className='train-car' alt='bt-car'/>
                            <img src='src/assets/project_assets/train-car.svg' className='train-car' alt='bt-car'/>
                            <img src='src/assets/project_assets/train-car.svg' className='train-car' alt='bt-car'/>
                            <img src='src/assets/project_assets/front-train-car.svg' className='front-car' alt='bt-front-car'/>
                        </div>
                        <div className='scroll-section'>
                            <div className='swipe-down'>
                                <h3 className='h3-projects'>Swipe</h3>
                                <img src='src/assets/project_assets/down-arrow.png'
                                     alt='down-arrow'
                                     className='down-arrow'/>
                            </div>
                            <div className='stations'>
                                <div className='station-group-one'>
                                    <div className='projects-window'>
                                        <Window mode={windowMode}
                                                func={handleClick}
                                                isVisible={windowVisibility}/>
                                    </div>
                                    <img src='src/assets/project_assets/project-one-station.png'
                                        className='project-one-station'
                                        alt='project-one-station'
                                        onClick={handleClick}/>
                                </div>
                                <div className='station-group-two'>
                                    <div className='projects-window'>
                                        <Window mode={windowMode}
                                                func={handleClick}
                                                isVisible={windowVisibility}/>
                                    </div>
                                    <img src='src/assets/project_assets/project-two-station.png'
                                        className='project-two-station'
                                        alt='project-two-station'
                                        onClick={handleClick}/>
                                </div>
                            </div>
                            <div className='pillars'>
                                {getColumns()}
                            </div>
                            <div className='trees'>
                                <img src='src/assets/project_assets/foreground-trees.png'
                                     alt='foreground-trees'
                                     className='foreground-trees'/>
                                <img src='src/assets/project_assets/background-trees.png'
                                     alt='background-trees'
                                     className='background-trees'/>
                            </div>
                            <div className='mountains'>
                                <img src='src/assets/project_assets/mountains.png'
                                     alt='mountain-image'
                                    className='mountain-image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}