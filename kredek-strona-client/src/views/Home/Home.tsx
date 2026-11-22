import './home.scss';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import CurrentCourse from './Sections/CurretCourse';
import SocialMediaSection from './Sections/SocialMediaSection';

export default function Home() {
    return (
        <div className="container">
            <HeroSection/>
            <AboutSection/>
            <CurrentCourse/>
            <SocialMediaSection/>
        </div>
    )
}