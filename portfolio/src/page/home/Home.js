import './Home.scss';
import {useState} from 'react';
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


export const Home = () => {
    const [openKiabi, setOpenKiabi] = useState(false);
    const [openProxiad, setOpenProxiad] = useState(false);
    const [openBulgaria, setOpenBulgaria] = useState(false);
    const [openGarbage, setOpenGarbage] = useState(false);

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
            {/* <Navbar /> */}
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
                    <div className="job"><span>Apprentice research engineer</span></div>
                    <div className="arrow">
                        <a href="#professional-container">
                            <ExpandArrow />
                        </a>
                    </div>
                </section>
                <section id="professional-container" className="professional-container">
                    <h1>Professional experience</h1>
                    <ul>
                        <li onClick={toggleKiabi}>
                            <span>
                                <p>Kiabi – Fullstack Developer trainee</p>
                                <RigthArrow />
                            </span>
                            <p className="time">From July 2021 to Today</p>
                        </li>
                        <li onClick={toggleBulgaria}>
                            <span>
                                <p>Proxiad service Center in Plovdiv (Bulgaria) – Web Developer trainee</p>
                                <RigthArrow />
                            </span>
                            <p className="time">From Mai 2022 to July 2022</p>
                        </li>
                        <li onClick={toggleProxiad}>
                            <span>
                                <p>Proxiad service Center in Lille – Web Developer trainee</p>
                                <RigthArrow />
                            </span>
                            <p className="time">From September 2020 to July 2021</p>    
                        </li>
                        <li onClick={toggleGarbage}>
                            <span>
                                <p>Garbage Collector</p>
                                <RigthArrow />
                            </span>
                            <p className="time">August 2018 and July 2019</p>
                        </li>
                    </ul>
                    <Dialog open={openKiabi}
                        setOpen={setOpenKiabi}
                        title="KIABI" 
                        job="Fullstack Developer trainee" 
                        description="We are a small team doing proof of concept for internal customers at Kiabi. We use the latest technologies to test them in our projects.
                        We carry out Proof of Concept and test new technologies to be implemented at Kiabi.
                        I was able to strongly reinforce my skills thanks to the realization of various POC." 
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
                        title="PROXIAD service Center in Plovdiv" 
                        job="Web Developer trainee" 
                        description="In order to validate my engineering diploma, I had to realize an internship of Java developer during 8 weeks abroad.
                        I realized this internship in the subsidiary of Proxiad in Plovdiv." 
                    >
                        <SpringLogo />
                    </Dialog>
                    <Dialog open={openProxiad}
                        setOpen={setOpenProxiad}
                        title="PROXIAD service Center in Lille" 
                        job="Fullstack Developer trainee" 
                        description="I started my apprenticeship at the Proxiad service center.
                        I worked on internal web projects.
                        I had the opportunity to gain my first skills on Angular and SpringBoot frameworks." 
                    />
                    <Dialog open={openGarbage}
                        setOpen={setOpenGarbage}
                        title="CAPSO" 
                        job="Garbage Collector" 
                        description="During two summer jobs, I had the opportunity to work as a garbage collector.
                        I was able to discover the world of work and earn my first salary." 
                    />
                </section>
                <section id="training-container" className="training-container">
                    <div className="training-title">
                        <h2 className="title">Training</h2>
                    </div>
                    <div className="training-content">
                        <Card title={'ISEN-LILLE'} content={'Informatical Engineering Degree ISEN'} time={'Today'} color={'whynter'} src="/JUNIA_ISEN.png" />
                        <Card title={'DUT GEII'} content={'University Technology technology Diploma Electrical Engineering and Industrial Computer Science, Speciality Computer Science'} time={'From 2018 to 2020'} color={'sunny'} src="/dut.png" />
                        <Card title={'Vauban High School'} content={'High School Degree in science, speciality mathematics, sport option'} time={'June 2018'} color={'wood'} src="/vauban.png" />
                    </div>
                    <div id="bubble-1" className="bubble"></div>
                    <div id="bubble-2" className="bubble"></div>
                    <div id="bubble-3" className="bubble"></div>
                    <div id="bubble-4" className="bubble"></div>
                </section>
            </div>
        </>
    );
}