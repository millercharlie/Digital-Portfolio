import NavBar from "../components/NavBar.jsx";
import PropTypes from "prop-types";
import git from '../gitcommits.json';
import {useState} from "react";

/**
 * Represents the About page of this website. This page is meant to look like a Git repository with branches
 *     representing each piece of personal information.
 * @param mode {string} The mode of this About page (either light or homebrew)
 * @returns {JSX.Element} About page
 */
export default function About( { mode } ) {

    const [colorway, setColorway] = useState(mode);

    const randomBytes = () => {
        let bytes = []
        for (let i = 0; i < 120; i++) {
            bytes.push(Math.round(Math.random()));
        }
        return bytes;
    }

    const handleStyle = () => {
        return {
            "color": getColors('text'),
            "fontSize": Math.floor(Math.random() * 25) + 8,
            "opacity": Math.floor(Math.random() * 55) + 10,
            "animation": "background-bytes " + Math.floor(Math.random() * 50 + 15) + "s forwards infinite",
            "animationDelay": "-" + Math.floor(Math.random() * 40) + "s"
        };
    }

    About.propTypes = {
        mode: PropTypes.string.isRequired
    }
    // Each circle is 60px apart, with each branch going out by 50px in each direction

    /**
     * Gets the correct color from the color mode and the type, which is one of:
     * - text
     * - primary
     * - secondary
     * - tertiary
     * - quaternary
     * - stroke
     * @param type {string} The type of color to return
     * @returns {string} Hex color to render
     */
    const getColors = (type) => {
        switch(colorway) {
            case 'light':
                switch (type) {
                    case 'text':
                        return '#000000';
                    case 'primary':
                        return '#F65555';
                    case 'secondary':
                        return '#7DD6D1';
                    case 'tertiary':
                        return '#BA61FF';
                    case 'quaternary':
                        return '#96E765';
                    case 'stroke':
                        return '#FFFFFF';
                    case 'nav':
                        return '#646cff';
                }
                break;
            case 'brew':
                switch (type) {
                    case 'text':
                        return '#2AFE14';
                    case 'primary':
                        return '#970001';
                    case 'secondary':
                        return '#5B32F2';
                    case 'tertiary':
                        return '#A6A6A6';
                    case 'quaternary':
                        return '#2AFE14';
                    case 'stroke':
                        return '#000000';
                    case 'nav':
                        return '#FFFFFF';
                }
                break;
        }
    }

    const colorModeSwitch = () => {
        switch (colorway) {
            case 'light':
                setColorway('brew');
                break;
            default:
                setColorway('light');
                break;
        }
    }

    return (
        <div className={'about-' + colorway}>
            <div className='background-container'>
                <ul>
                    {randomBytes().map((byte, index) => {
                        return (<li key={'item ' + index} style={handleStyle()}>{byte}</li>);
                    })}
                </ul>
            </div>
            <NavBar type='colored' background='' text={getColors('nav')} fun={colorModeSwitch} icons={''}/>
            <svg height='1600px' width='100%'>
                {git.map((commit, index) => {
                    switch (commit.type) {
                        case 'line':
                            return (<line x1={commit.x} y1={commit.y} x2={commit.x2} y2={commit.y2}
                                          stroke={getColors(commit.color)} style={{strokeWidth: '4'}} key={index}/>);
                        case 'circle':
                            return (<circle cx={commit.x} cy={commit.y} r='8px' fill={getColors(commit.color)}
                                            stroke={getColors('stroke')} strokeWidth='3' key={index}/>);
                        case 'text':
                            return (<text x={commit.x} y={commit.y} fontSize="14" fill={getColors("text")}
                                          key={index}>{commit.text}</text>);
                    }
                })}
            </svg>
        </div>
    );
}