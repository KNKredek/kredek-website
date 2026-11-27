import AnimatedBackground from '../../../components/AnimatedBackground/AnimatedBackground';
import Logo from '../../../assets/logo-black.png';
import Button from '../../../components/Button/Button';
export default function HeroSection() {
    return (
        <section className="hero">
            <AnimatedBackground/>
            <div className="hero-inner">
                <h1 className="title">
                    POKOLORUJ SWOJĄ PRZYSZŁOŚĆ Z <br/>
                    <img height={64} src={Logo} alt="logo"/>
                </h1>
                <Button link='#currentCourse' variant={"crayon"}>
                    Sprawdź aktualny kurs
                </Button>
            </div>
        </section>
    )
}