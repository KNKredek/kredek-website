import './home.scss';
import CoursesSection from './Sections/CoursesSection';
import CtaSection from './Sections/CtaSection';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import ProjectsSection from './Sections/ProjectsSection';
import CurrentCourse from './Sections/CurretCourse';
import SocialMediaSection from './Sections/SocialMediaSection';

export default function Home() {
    return (
        <div className="container">
            <HeroSection/>
            <AboutSection/>
            <CurrentCourse/>
            <SocialMediaSection/>
            {/* <CoursesSection/>
            <ProjectsSection/> */}
            <CtaSection/>
        </div>
    )
}