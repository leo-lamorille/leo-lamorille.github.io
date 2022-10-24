import { useState } from 'react';
import './Navbar.scss';

export const Navbar = () => {
    const [actifAbout, setActifAbout] = useState(false);
    const [actifPro, setActifPro] = useState(false);

    const toggleAbout = () => {
        setActifAbout(true);
        setActifPro(false);
    }

    const togglePro = () => {
        setActifPro(true);
        setActifAbout(false);
    }

    return (
        <div className="navbar-container">
            <a href="#about-container" className={`${actifAbout ? 'active' : ''}`} onClick={toggleAbout}>Home</a>
            <a href="#professional-container" className={`${actifPro ? 'active' : ''}`} onClick={togglePro}>Professional Experience</a>
        </div>
    );
}