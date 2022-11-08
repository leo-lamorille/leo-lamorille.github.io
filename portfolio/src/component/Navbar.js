import { useState } from 'react';
import './Navbar.scss';

export const Navbar = () => {
    const [actifAbout, setActifAbout] = useState(false);
    const [actifPro, setActifPro] = useState(false);
    const [actifTraining, setActifTraining] = useState(false);

    const toggleAbout = () => {
        setActifAbout(true);
        setActifPro(false);
        setActifTraining(false);
    }

    const togglePro = () => {
        setActifPro(true);
        setActifAbout(false);
        setActifTraining(false);
    }

    const toggleTraining = () => {
        setActifTraining(true);
        setActifAbout(false);
        setActifPro(false);
    }

    return (
        <div className="navbar-container">
            <a href="#about-container" className={`${actifAbout ? 'active' : ''}`} onClick={toggleAbout}>Home</a>
            <a href="#professional-container" className={`${actifPro ? 'active' : ''}`} onClick={togglePro}>Professional Experience</a>
            <a href="#training-container" className={`${actifTraining ? 'active' : ''}`} onClick={toggleTraining}>Training</a>
        </div>
    );
}