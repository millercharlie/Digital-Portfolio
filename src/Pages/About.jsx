import NavBar from "../components/NavBar.jsx";
import PropTypes from "prop-types";

import git from '../gitcommits.json';

/**
 * Represents the About page of this website. This page is meant to look like a Git repository with branches
 *     representing each piece of personal information.
 * @param mode {string} The mode of this About page (either light or homebrew)
 * @returns {JSX.Element} About page
 */
export default function About({mode}) {

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
        switch(mode) {
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
                        return '#FFFFFF'
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
                        return '#000000'
                }
                break;
        }
    }

    return (
        <div className={'about-' + mode}>
            <div>
                <NavBar type='colored' background='606060'/>
            </div>
            <svg height='1600px' width='100%'>
                {git.map((commit) => {
                    switch (commit.type) {
                        case 'line':
                            return (<line x1={commit.x} y1={commit.y} x2={commit.x2} y2={commit.y2}
                                          stroke={getColors(commit.color)} style={{strokeWidth: '4'}} key={commit}/>);
                        case 'circle':
                            return (<circle cx={commit.x} cy={commit.y} r='8px' fill={getColors(commit.color)}
                                            stroke={getColors('stroke')} strokeWidth='3' key={commit}/>);
                        case 'text':
                            return (<text x={commit.x} y={commit.y} fontSize="14" fill={getColors("text")}>
                                {commit.text}</text>);
                    }
                })}
            </svg>
        </div>
    );
}