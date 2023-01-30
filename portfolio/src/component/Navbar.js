import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

export const Navbar = () => {
    const [actifAbout, setActifAbout] = useState(false);
    const [actifPro, setActifPro] = useState(false);
    const [actifTraining, setActifTraining] = useState(false);
    const [actifSkills, setActifSkills] = useState(false);

    const { t } = useTranslation(['translation', 'common']);


    const toggleAbout = () => {
        setActifAbout(true);
        setActifPro(false);
        setActifTraining(false);
        setActifSkills(false);
    }

    const togglePro = () => {
        setActifPro(true);
        setActifAbout(false);
        setActifTraining(false);
        setActifSkills(false);
    }

    const toggleTraining = () => {
        setActifTraining(true);
        setActifAbout(false);
        setActifPro(false);
        setActifSkills(false);
    }

    const toggleSkills = () => {
        setActifTraining(false);
        setActifAbout(false);
        setActifPro(false);
        setActifSkills(true);
    }

    return (
        <div className="navbar-container">
            <a href="#about-container" className={`${actifAbout ? 'active' : ''}`} onClick={toggleAbout}>Home</a>
            <a href="#professional-container" className={`${actifPro ? 'active' : ''}`} onClick={togglePro}>{t('professional.title')}</a>
            <a href="#training-container" className={`${actifTraining ? 'active' : ''}`} onClick={toggleTraining}>{t('training.title')}</a>
            <a href="#skills-container" className={`${actifSkills ? 'active' : ''}`} onClick={toggleSkills}>{t('skills.title')}</a>
        </div>
    );
}