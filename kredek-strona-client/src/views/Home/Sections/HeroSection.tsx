import MainScreen from '../../../assets/main-screen.png';
import AnimatedBackground from '../../../components/AnimatedBackground/AnimatedBackground';
export default function HeroSection() {
    return (
        <section className="hero">
            <AnimatedBackground/>
            <div className="heroContent">
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
        </section>
    )
}