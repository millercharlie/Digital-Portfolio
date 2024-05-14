import NavBar from '../components/NavBar.jsx';
import react from '../assets/navbar_icons/react.svg'
import {useState} from 'react';
import Window from "../components/Window.jsx";

export default function Projects() {

    // TODO: Add support for multiple screen sizes
    const [windowVisibility, setWindowVisibility] = useState(false);

    /**
    * Sets the animation and colorway for all trees in the scene.
    * @returns {{cursor: string, height: number}}
    */
    const treeStyles = (treeType) => {
        let margin = 0;
        (treeType === 'foreground') ? (margin = Math.floor(Math.random() * 60) - 50)
            : (margin = Math.floor(Math.random() * 100) - 120)

        return {
            'height': Math.floor(Math.random() * 150) + 90,
            'cursor': 'default',
            'opacity': Math.floor(Math.random() * 55) + 10,
            'margin-left': margin,
            };
    }

    const getTrees = (treeType) => {
        let imageSrc;
        let numTrees;
        let treeList = [];

        switch(treeType) {
            case 'background':
                numTrees = 100;
                imageSrc = 'src/assets/project_assets/background-tree.svg'
                break;
            case 'middleground':
                numTrees = 80;
                imageSrc = 'src/assets/project_assets/middleground-tree.svg'
                break;
            case 'foreground':
                numTrees = 50;
                imageSrc = 'src/assets/project_assets/foreground-tree.svg'
                break;
            }

        for (let tIndex = 0; tIndex < numTrees; tIndex++) {
            treeList.push(<img src={imageSrc}
                               alt={treeType + '-tree'}
                               key={treeType + '-tree' + '-index-' + tIndex}
                               style={treeStyles(treeType)}/>);
        }
        return treeList;
    }

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
        percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;

        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }

    const handleClick = (event) => {
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
                            <img src='src/assets/project_assets/train-car.svg' className='train-car' alt='Bullet Train'/>
                            <img src='src/assets/project_assets/train-car.svg' className='train-car' alt='Bullet Train'/>
                            <img src='src/assets/project_assets/train-car.svg' className='train-car' alt='Bullet Train'/>
                            <img src='src/assets/project_assets/front-train-car.svg' className='front-car' alt='Bullet Train'/>
                        </div>
                        <div className='scroll-section'>
                            {/* TODO: Why does this <Window/> cause all the trees to disappear??? */}
                            {/*<div className='stations'>*/}
                            {/*    <Window mode={'projects'} func={handleClick} isVisible={windowVisibility}/>*/}
                                <img src='src/assets/project_assets/project-one-station.png'
                                     className='project-one-station'
                                     alt='project-one-station'
                                     onClick={handleClick}/>
                            {/*</div>*/}
                            <div className='pillars'>
                                {getColumns()}
                            </div>
                            <div className='trees'>
                                <div className='background-trees'>
                                    {getTrees('background')}
                                </div>
                                <div className='middleground-trees'>
                                    {getTrees('middleground')}
                                </div>
                                <div className='foreground-trees'>
                                    {getTrees('foreground')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}