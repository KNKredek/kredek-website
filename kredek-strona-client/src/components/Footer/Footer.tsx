import Logo from '../../assets/logo.png';
import './footer.scss';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footerTop">
            <div className="footerBrand">
                <div className="logo"><img src={Logo} alt="logo kredek" height={24} /></div>
                <p>Koło Naukowe "Kredek"</p>
                <p>Creation and Development Group</p>
                <p>Politechnika Wrocławska</p>
                <p>Wydział Informatyki i Telekomunikacji</p>
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
                <span>📧 EMAIL</span>
                <span>📍 SALA</span>
            </div>
            </div>
            <div className="footerBottom">
            <p>&copy; 2026 Made with ❤︎⁠ by KN "Kredek"</p>
            </div>
        </footer>
    )
}