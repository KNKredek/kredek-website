import MainScreen from '../../../assets/main-screen.png';
import AnimatedBackground from '../../../components/AnimatedBackground/AnimatedBackground';
export default function HeroSection() {
    return (
        <section className="hero">
            <AnimatedBackground/>
            {/* <div className="heroContent">
                <span className="badge">Nowy kurs C# .NET startuje wkrótce</span>
                <h1>Koduj swoją przyszłość z <span className="highlight">kredek</span></h1>
                <p>Klub programistyczny stworzony przez studentów dla studentów. Uczymy się, tworzymy projekty i dzielimy wiedzą.</p>
                <div className="heroButtons">
                    <button className="btnPrimary">Zapisz się &rarr;</button>
                    <button className="btnSecondary">Zobacz projekty</button>
                </div>
            </div>
            <div className="heroMockup">
                <img src={MainScreen} alt="C#, .NET" />
            </div>

            <div className="waveContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" preserveAspectRatio="none" className="waveSvg">
                    <path 
                    className="wavePath waveBack" 
                    d="M0,100 C360,150 360,50 720,100 C1080,150 1080,50 1440,100 L1440,200 L0,200 Z"
                    />
                    <path 
                    className="wavePath waveFront" 
                    d="M0,100 C360,50 360,150 720,100 C1080,50 1080,150 1440,100 L1440,200 L0,200 Z"
                    />
                </svg>
            </div> */}

        </section>
    )
}