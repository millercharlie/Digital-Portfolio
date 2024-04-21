import NavBar from '../components/NavBar.jsx';
import Pillars from '../assets/Pillars.png';
import BulletTrain from '../assets/Bullet Train.png';
import {useEffect, useState} from "react";

export default function Projects() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div>
                <NavBar type={'colored'}/>
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