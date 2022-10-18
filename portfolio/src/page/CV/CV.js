import './CV.scss';

export const CV = () => {

    return (
      <div className="CvContainer">
        <div className="Cv">
            <div className="leftSide">
                <div className="avatar">
                    <img src='/avatar.jpg' alt="Avatar" />
                </div>
                <div className="contactContainer">
                    <h2 className="h2Title">Contact</h2>
                    <ul className="infos">
                        <li><span className="iconText">07 81 01 38 31</span></li>
                        <li><span className="iconText">lamorilleleo@gmail.com</span></li>
                        <li><span className="iconText">59000 Lille</span></li>
                    </ul>
                </div>
                <h2 className="h2Title">Skills</h2>
                <ul className="cvList">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Angular</li>
                    <li>ReactJs</li>
                    <li>VueJs</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>
                <h2 className="h2Title">Languages</h2>
                <ul className="cvList">
                    <li>French : native</li>
                    <li>English : C1 level</li>
                </ul>
                <h2 className="h2Title">Hobbies</h2>
                <ul className="cvList">
                    <li>BasketBall</li>
                    <li>Music / Guitar</li>
                </ul>
            </div>
            <div className="rightSide">
                <div className="name">
                    <p className="firstName">Léo</p>
                    <p className="lastName">LAMORILLE</p>
                    <p className="job">Web Developer</p>
                </div>
                <div className="container">
                    <h2 className="title">About me</h2>
                    <ul className="content">
                        <li><p className="second-title">Currently an apprentice web developer at Proxiad. I work in the Digital Lab team of Kiabi.</p></li>
                    </ul>
                    <h2 className="title">Training</h2>
                    <ul className="content">
                        <li>
                            <p className="second-title">Informatical Engineering Degree ISEN</p>
                            <p className="time">Today</p>
                        </li>
                        <li>
                            <p className="second-title">
                                University Technology technology Diploma Electrical Engineering
                                and Industrial Computer Science, Speciality Computer Science
                            </p>
                            <p className="time">From 2018 to 2020</p>
                        </li>
                        <li>
                            <p className="second-title">
                                High School Diploma in science, speciality mathematics, sport
                                option
                            </p>
                            <p className="time">June 2018</p>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="title">Professional experience</h2>
                    <ul className="content">
                        <li>
                            <p className="second-title">Kiabi – Web Developer trainee</p>
                            <p className="time">From July 2021 to Today</p>
                        </li>
                        <li>
                            <p className="second-title">
                                Proxiad service Center in Plovdiv (Bulgaria)– Web Developer trainee
                            </p>
                            <p className="time">From Mai 2022 to July 2022</p>
                        </li>
                        <li>
                            <p className="second-title">
                                Proxiad service Center in Lille– Web Developer trainee
                            </p>
                            <p className="time">From September 2020 to July 2021</p>
                        </li>
                        <li>
                            <p className="second-title">
                                Garbage Collector
                            </p>
                            <p className="time">August 2018 and July 2019</p>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="title">Professional Projects</h2>
                    <ul className="content">
                        <li>
                            <p className="second-title">
                                Digital Lab – KIABI (Angular/VueJs/ReactJs/Spring Boot)
                            </p>
                            <p className="time">2021-2022</p>
                            <ul>
                                <li>
                                    We are a small team doing proof of concept for internal customers at Kiabi.
                                    We use the latest technologies to test them in our projects.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className="second-title">Proxiad Internal Projects (Angular/Spring Boot)</p>
                            <p className="time">2020-2021</p>
                            <ul>
                                <li>
                                    MyProxiad : Internal Communication Plateform
                                    Angular/Spring Boot
                                </li>
                                <li>
                                    ProxiBilling : Management tools for CRA’s and Bills
                                    Angular/Spring Boot
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}