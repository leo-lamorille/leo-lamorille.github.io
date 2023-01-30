import './Home.scss';
import {useState} from 'react';
import { useInView } from "react-intersection-observer";
import { Dialog } from '../../component/Dialog/Dialog';
import { ReactLogo } from '../../component/Logo/ReactLogo';
import { AngularLogo } from '../../component/Logo/AngularLogo';
import { SpringLogo } from '../../component/Logo/SpringLogo';
import { ExpandArrow } from '../../component/Clickable/ExpandArrow';
import { RigthArrow } from '../../component/Clickable/RigthArrow';
import { FirebaseLogo } from '../../component/Logo/FirebaseLogo';
import { GoogleCloudLogo } from '../../component/Logo/GoogleCloudLogo';
import { HibernateLogo } from '../../component/Logo/HibernateLogo';
import { Navbar } from '../../component/Navbar';
import { Card } from '../../component/Card/Card';
import { useTranslation } from "react-i18next";


export const Home = () => {
    const [openKiabi, setOpenKiabi] = useState(false);
    const [openProxiad, setOpenProxiad] = useState(false);
    const [openBulgaria, setOpenBulgaria] = useState(false);
    const [openGarbage, setOpenGarbage] = useState(false);
    const { t, i18n } = useTranslation(['translation', 'common']);

    const {ref, inView} = useInView({
        threshold: 0.0
    });
    
    const changeLanguage = () => {
        i18n.language === 'fr' ? i18n.changeLanguage('en') : i18n.changeLanguage('fr');
    }
    const toggleKiabi = () => {
        setOpenKiabi(!openKiabi);
        setOpenBulgaria(false);
        setOpenGarbage(false);
        setOpenProxiad(false);
    }
    const toggleBulgaria = () => {
        setOpenKiabi(false);
        setOpenBulgaria(!openBulgaria);
        setOpenGarbage(false);
        setOpenProxiad(false);
    }
    const toggleProxiad = () => {
        setOpenKiabi(false);
        setOpenBulgaria(false);
        setOpenGarbage(false);
        setOpenProxiad(!openProxiad);
    }
    const toggleGarbage = () => {
        setOpenKiabi(false);
        setOpenBulgaria(false);
        setOpenGarbage(!openGarbage);
        setOpenProxiad(false);
    }

    return (
        <>
            <Navbar />
            <div className="home-container">
                <section id="about-container" className="about-container">
                    <div className="wave name">
                        <span style={{"--i" : 1}}>L</span>
                        <span style={{"--i" : 2}}>A</span>
                        <span style={{"--i" : 3}}>M</span>
                        <span style={{"--i" : 4}}>O</span>
                        <span style={{"--i" : 5}}>R</span>
                        <span style={{"--i" : 6}}>I</span>
                        <span style={{"--i" : 7}}>L</span>
                        <span style={{"--i" : 8}}>L</span>
                        <span style={{"--i" : 9}}>E</span>
                    </div>
                    <div className="wave firstname">
                        <span style={{"--i" : 1}}>L</span>
                        <span style={{"--i" : 2}}>E</span>
                        <span style={{"--i" : 4}}>O</span>
                    </div>
                    <div className="job"><span>{t('about.job')}</span></div>
                    <div className="arrow">
                        <a href="#professional-container">
                            <ExpandArrow />
                        </a>
                    </div>
                    <a href="https://www.linkedin.com/in/l%C3%A9o-lamorille-9074ba1a7">
                        <img src="/Linkedin-logo.png" alt="linkedin logo" />
                    </a>
                    <div onClick={changeLanguage} className="language-button">
                        <img src="/fr-flag.png" className={(i18n.language === 'fr' && 'selected') + ' fr'} alt="fr flag" />
                        <img src="/en-flag.svg" alt="en flag" className={(i18n.language === 'en' && 'selected') + ' en'} />
                    </div>
                </section>
                <section id="professional-container" className="professional-container">
                    <h1>{t('professional.title')}</h1>
                    <ul>
                        <li onClick={toggleKiabi}>
                            <span>
                                <p>{t('professional.kiabi.job')}</p>
                                <RigthArrow />
                            </span>
                            <p className="time">{t('professional.kiabi.time')}</p>
                        </li>
                        <li onClick={toggleBulgaria}>
                            <span>
                                <p>{t('professional.proxiad.bulgaria.job')}</p>
                                <RigthArrow />
                            </span>
                            <p className="time">{t('professional.proxiad.bulgaria.time')}</p>
                        </li>
                        <li onClick={toggleProxiad}>
                            <span>
                                <p>{t('professional.proxiad.cds.job')}</p>
                                <RigthArrow />
                            </span>
                            <p className="time">{t('professional.proxiad.cds.time')}</p>    
                        </li>
                        <li onClick={toggleGarbage}>
                            <span>
                                <p>{t('professional.capso.job')}</p>
                                <RigthArrow />
                            </span>
                            <p className="time">{t('professional.capso.time')}</p>
                        </li>
                    </ul>
                    <Dialog open={openKiabi}
                        setOpen={setOpenKiabi}
                        title={t('professional.kiabi.dialog.title')} 
                        job={t('professional.kiabi.dialog.job')}
                        description={t('professional.kiabi.dialog.description')}
                    >
                        <ReactLogo />
                        <AngularLogo />
                        <SpringLogo />
                        <GoogleCloudLogo />
                        <FirebaseLogo />
                        <HibernateLogo />
                    </Dialog>
                    <Dialog open={openBulgaria}
                        setOpen={setOpenBulgaria}
                        title={t('professional.proxiad.bulgaria.dialog.title')}
                        job={t('professional.proxiad.bulgaria.dialog.job')}
                        description={t('professional.proxiad.bulgaria.dialog.description')}
                    >
                        <SpringLogo />
                    </Dialog>
                    <Dialog open={openProxiad}
                        setOpen={setOpenProxiad}
                        title={t('professional.proxiad.cds.dialog.title')}
                        job={t('professional.proxiad.cds.dialog.job')}
                        description={t('professional.proxiad.cds.dialog.description')}
                    />
                    <Dialog open={openGarbage}
                        setOpen={setOpenGarbage}
                        title={t('professional.capso.dialog.title')}
                        job={t('professional.capso.dialog.job')}
                        description={t('professional.capso.dialog.description')} 
                    />
                </section>
                <section id="training-container" className="training-container">
                    <div className="training-grid">
                        <div className="training-title">
                            <div className="title">
                                <h2>{t('training.title')}</h2>
                                <p>{t('training.bac')}</p>
                                <p>{t('training.geii')}</p>
                                <p>{t('training.isen')}</p>
                            </div>
                        </div>
                        <div className="training-content">
                            <Card title={t('training.card.ISEN.title')} content={t('training.card.ISEN.content')} time={t('training.card.ISEN.time')} color={'whynter'} src="/JUNIA_ISEN.png" />
                            <Card title={t('training.card.GEII.title')} content={t('training.card.GEII.content')} time={t('training.card.GEII.time')} color={'ocean'} src="/dut.png" />
                            <Card title={t('training.card.VAUBAN.title')} content={t('training.card.VAUBAN.content')} time={t('training.card.VAUBAN.time')} color={'wood'} src="/vauban.png" />
                        </div>
                    </div>
                    <div id="bubble-1" className="bubble"></div>
                    <div id="bubble-2" className="bubble"></div>
                    <div id="bubble-3" className="bubble"></div>
                    <div id="bubble-4" className="bubble"></div>
                </section>
                <section className="skills-container" id="skills-container">
                    <h1 className="title">{t('skills.title')}</h1>
                    <ul className="skills-list">
                        <li className="java" ref={ref}>
                            <span className={inView ? 'active' : 'not'}>Java EE</span>
                        </li>
                        <li className="spring" ref={ref}>
                            <span className={inView ? 'active' : 'not'}>SpringBoot</span>
                        </li>
                        <li className="js" ref={ref}>
                            <span className={inView ? 'active' : 'not'}>JavaScript</span>
                        </li>
                        <li className="ts" ref={ref}>
                            <span className={inView ? 'active' : 'not'}>TypeScript</span>
                        </li>
                        <li className="react" ref={ref}>
                            <span className={inView ? 'active' : 'not'}>ReactJs <p>{t('skills.react')}</p></span>
                        </li>
                        <li className="angular" ref={ref}>
                            <span className={inView ? 'active' : 'not'}>Angular</span>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}