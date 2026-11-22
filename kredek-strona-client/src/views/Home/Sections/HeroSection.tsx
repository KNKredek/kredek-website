import AnimatedBackground from '../../../components/AnimatedBackground/AnimatedBackground';
import Logo from '../../../assets/logo-black.png';
import CrayonButton from '../../../components/CrayonButton/CrayonButton';
export default function HeroSection() {
    return (
        <section className="hero">
            <AnimatedBackground/>
            <div className="heroInner">
                <div className="title">
                    POKOLORUJ SWOJĄ PRZYSZŁOŚĆ Z <br/>
                    <img height={64} src={Logo} alt="logo"/>
                </div>
                <CrayonButton link='#currentCourse'>
                    Sprawdź aktualny kurs
                </CrayonButton>
            </div>
        </section>
    )
}