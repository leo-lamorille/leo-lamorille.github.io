import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

export const Navbar = () => {
    const [actifAbout, setActifAbout] = useState(false);
    const [actifPro, setActifPro] = useState(false);
    const [actifTraining, setActifTraining] = useState(false);
    const [actifSkills, setActifSkills] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const { t } = useTranslation(['translation', 'common']);


    const toggleAbout = () => {
        setActifAbout(true);
        setActifPro(false);
        setActifTraining(false);
        setActifSkills(false);
        setIsChecked(false);
    }

    const togglePro = () => {
        setActifPro(true);
        setActifAbout(false);
        setActifTraining(false);
        setActifSkills(false);
        setIsChecked(false);
    }

    const toggleTraining = () => {
        setActifTraining(true);
        setActifAbout(false);
        setActifPro(false);
        setActifSkills(false);
        setIsChecked(false);
    }

    const toggleSkills = () => {
        setActifTraining(false);
        setActifAbout(false);
        setActifPro(false);
        setActifSkills(true);
        setIsChecked(false);
    }

    return (
        <nav className="navbar-container">
            <input type="checkbox" id="burger" name="burger" onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} />
            <div>
                <label htmlFor="burger">☰</label>
            </div>
            <ul>
                <li><a href="#about-container" className={`${actifAbout ? 'active' : ''}`} onClick={toggleAbout}>Home</a></li>
                <li><a href="#professional-container" className={`${actifPro ? 'active' : ''}`} onClick={togglePro}>{t('professional.title')}</a></li>
                <li><a href="#training-container" className={`${actifTraining ? 'active' : ''}`} onClick={toggleTraining}>{t('training.title')}</a></li>
                <li><a href="#skills-container" className={`${actifSkills ? 'active' : ''}`} onClick={toggleSkills}>{t('skills.title')}</a></li>
            </ul>
        </nav>
    );
}