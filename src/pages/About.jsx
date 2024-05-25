import NavBar from '../components/NavBar.jsx';
import PropTypes from 'prop-types';
import git from '../utilities/gitcommits.json';
import {useEffect, useState} from 'react';
import sunIcon from '../assets/navbar_icons/sun-icon.png';
import brewIcon from '../assets/navbar_icons/brew-icon.png'

/**
 * Represents the About page of this website. This page is meant to look like a Git repository with branches
 *   representing each piece of personal information.
 *
 * @returns {JSX.Element} About page
 */
export default function About() {

    console.log(decodeURIComponent(document.cookie).split('=')[1]);

    const [colorway, setColorway] = useState(localStorage.getItem('mode') || 'one');
    const [toggle, setToggle] = useState(localStorage.getItem('mode') === 'two' ? sunIcon : brewIcon)

    /**
     * Creates an unordered list of random bytes (0 or 1) that float down the screen.
     * @returns {string[]} array of bytes
     */
    const randomBytes = () => {
        let bytes = []
        for (let i = 0; i < 300; i++) {
            bytes.push(Math.round(Math.random()));
        }
        return bytes;
    }

    // TODO: Add support for multiple screen sizes

    /**
     * Sets the animation and colorway for all bytes in the unordered list.
     * @returns {{color: string, animationDelay: string, fontSize: number, opacity: number, animation: string}}
     */
    const handleStyle = () => {
        return {
            'color': getColors('byte'),
            'cursor': 'default',
            'fontSize': Math.floor(Math.random() * 25) + 8,
            'opacity': Math.floor(Math.random() * 55) + 10,
            'animation': 'background-bytes ' + Math.floor(Math.random() * 50 + 15) + 's forwards infinite',
            'animationDelay': '-' + Math.floor(Math.random() * 40) + 's'
        };
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
            case 'one':
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
                    case 'byte':
                        return '#000000';
                }
                break;
            case 'two':
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
                    case 'byte':
                        return 'rgba(42, 254, 20, 0.50)'
                }
                break;
        }
    }

    const colorModeSwitch = () => {
        let newColorway = colorway === 'one' ? 'two' : 'one';
        setColorway(colorway === 'one' ? 'two' : 'one');
        setToggle(colorway === 'one' ? sunIcon : brewIcon);
        localStorage.setItem('mode', newColorway);
    }

    useEffect(() => {
        // Update cookie when colorway changes
        document.cookie = `mode=${colorway};`;
    }, [colorway]);

    return (
        <div className={'about-' + colorway}>
            <NavBar background={getColors('background')}
                    fun={colorModeSwitch}
                    icon={toggle}
                    textColor={getColors('nav')}
            />
            <div className='background-container'>
                <ul className='bytes-ul'>
                    {randomBytes().map((byte, index) => {
                        return (<li key={'item ' + index} style={handleStyle()}>{byte}</li>);
                    })}
                </ul>
            </div>
            <svg height='1600px' width='100%' className='git-repo'>
                {git.map((commit, index) => {
                    switch (commit.type) {
                        case 'line':
                            return (<path d={commit.d} fill='none' stroke={getColors(commit.color)}
                                          strokeWidth='3' className={commit.color} key={index}/>);
                        case 'circle':
                            return (<circle cx={commit.x} cy={commit.y} r='8px' fill={getColors(commit.color)}
                                          stroke={getColors('stroke')} strokeWidth='3' key={index}/>);
                        case 'text':
                            return (<text x={commit.x} y={commit.y} fontSize='14' fill={getColors('text')}
                                          key={index}>{commit.text}</text>);
                    }
                })}
            </svg>
        </div>
    );
}

About.propTypes = {
    mode: PropTypes.string
}