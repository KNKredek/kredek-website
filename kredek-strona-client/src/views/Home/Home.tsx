import './home.scss';
import CoursesSection from './Sections/CoursesSection';
import CtaSection from './Sections/CtaSection';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import ProjectsSection from './Sections/ProjectsSection';

export default function Home() {
    return (
        <div className="container">
            <HeroSection/>
            <AboutSection/>
            {/* <CoursesSection/>
            <ProjectsSection/>
            <CtaSection/> */}
        </div>
    )
}