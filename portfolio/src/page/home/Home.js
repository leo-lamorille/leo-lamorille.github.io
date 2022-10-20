import './Home.scss';

export const Home = () => {
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
            </section>
            <section id="professional-container">
                test
            </section>
            <section>Salut</section>
            <section>Salut2</section>
            <section>Salut3</section>
        </div>
    );
}