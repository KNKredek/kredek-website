import '../../styles/home.scss';
import CoursesSection from './Sections/CoursesSection';
import CtaSection from './Sections/CtaSection';
import HeroSection from './Sections/HeroSection';
import MissionSection from './Sections/MissionSection';
import ProjectsSection from './Sections/ProjectsSection';

export default function Home() {
    return (
        <div className="container">
            <HeroSection/>
            <MissionSection/>
            <CoursesSection/>
            <ProjectsSection/>
            <CtaSection/>
    </div>
    )
}