import './Home.scss';
import {useState} from 'react';
import { Dialog } from '../../component/Dialog/Dialog';
import { ReactLogo } from '../../component/Logo/ReactLogo';
import { AngularLogo } from '../../component/Logo/AngularLogo';
import { SpringLogo } from '../../component/Logo/SpringLogo';
import { ExpandArrow } from '../../component/Clickable/ExpandArrow';
import { RigthArrow } from '../../component/Clickable/RigthArrow';


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
        <div className="home-container">
            <section id="about-container">
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
            <section id="professional-container">
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
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus ratione alias dolore quaerat dolores animi adipisci placeat, architecto amet reprehenderit libero quia ipsa cumque! Eius rem dicta temporibus explicabo?" 
                 >
                    <ReactLogo />
                    <AngularLogo />
                    <SpringLogo />
                    <SpringLogo />
                    <SpringLogo />
                 </Dialog>
                 <Dialog open={openBulgaria}
                    setOpen={setOpenBulgaria}
                    title="PROXIAD service Center in Plovdiv" 
                    job="Web Developer trainee" 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus ratione alias dolore quaerat dolores animi adipisci placeat, architecto amet reprehenderit libero quia ipsa cumque! Eius rem dicta temporibus explicabo?" 
                 />
                 <Dialog open={openProxiad}
                    setOpen={setOpenProxiad}
                    title="PROXIAD service Center in Lille" 
                    job="Fullstack Developer trainee" 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus ratione alias dolore quaerat dolores animi adipisci placeat, architecto amet reprehenderit libero quia ipsa cumque! Eius rem dicta temporibus explicabo?" 
                 />
                 <Dialog open={openGarbage}
                    setOpen={setOpenGarbage}
                    title="Garbage Collector" 
                    job="Ripper" 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus ratione alias dolore quaerat dolores animi adipisci placeat, architecto amet reprehenderit libero quia ipsa cumque! Eius rem dicta temporibus explicabo?" 
                 />
            </section>
        </div>
    );
}