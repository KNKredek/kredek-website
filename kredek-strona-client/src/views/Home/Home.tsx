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
            <footer className="footer">
            <div className="footerTop">
            <div className="footerBrand">
                <div className="logo"><span className="logoK">k</span> kredek</div>
                <p>Studenckie Koło Naukowe Informatyków przy Politechnice.</p>
            </div>
            <div className="footerLinks">
                <h4>LINKI</h4>
                <a href="#o-nas">O Nas</a>
                <a href="#kursy">Kursy</a>
                <a href="#projekty">Projekty</a>
                <a href="#blog">Blog</a>
            </div>
            <div className="footerLinks">
                <h4>SPOŁECZNOŚĆ</h4>
                <a href="#discord">Discord</a>
                <a href="#github">GitHub</a>
                <a href="#linkedin">LinkedIn</a>
                <a href="#facebook">Facebook</a>
            </div>
            <div className="footerLinks">
                <h4>KONTAKT</h4>
                <span>📧 kontakt@kredek.pl</span>
                <span>📍 Sala 304, Wydział ETI</span>
            </div>
            </div>
            <div className="footerBottom">
            <p>&copy; 2023 Klub Programistów Kredek. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    </div>
    )
}