import NavBar from "../components/NavBar.jsx";
import PropTypes from "prop-types";

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

    return (
        <div className={'about-' + mode}>
            <div>
                <NavBar type='colored' background='606060'/>
            </div>
            <div>
                <h2>About Page Under Construction</h2>
            </div>
            <div>
                <div className='about-main-branch'
                     style={{marginLeft: '1.5rem', borderRadius: '20px', textAlign: 'center'}}/>
                <div className='about-commit' style={{marginTop: '-135rem', marginLeft: '0.875rem'}}/>
                <div className='about-commit' style={{marginTop: '-130rem', marginLeft: '0.875rem'}}/>
                <div className='about-commit' style={{marginTop: '-125rem', marginLeft: '0.875rem'}}/>
                <p>main</p>
            </div>
        </div>
    );
}