import NavBar from '../components/NavBar.jsx';
import Pillars from '../assets/Pillars.png';
import BulletTrain from '../assets/Bullet Train.png';
import {useEffect, useState} from "react";

export default function Projects() {

    /**
     * Handles randomization of background
     */
    const randomizeSetting = () => {
        // nah bro
    }

    return (
        <div style={{backgroundColor: '#C3F1FF'}}>
            <div>
                <NavBar type='colored' mode='colored' background='FFFFFF' />
            </div>
            <div>
                <h2>Projects Page Under Construction</h2>
            </div>
            <div style={{width: '200%', position: 'absolute', bottom: '0', overflow: 'hidden', transform: 'translate: (' + scrollY + ")"}}>
                <img src={BulletTrain} alt='Bullet Train' style={{height: '50px', marginBottom: '-12px'}}/>
                <img src={Pillars} alt='Pillars' style={{height: '300px'}}/>
            </div>
        </div>
    );
}