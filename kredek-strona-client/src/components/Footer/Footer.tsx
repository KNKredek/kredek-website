import Logo from '../../assets/logo.png';
import Pwr from '../../assets/pwr.webp';
import Wit from '../../assets/wit.webp';
import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';

import './footer.scss';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <a>Home</a>
                    <a>Nasze kursy</a>
                    <a>Nasz zespół</a>
                </div>
                <div className="footer-brand">
                    <img src={Logo} alt="logo kredek" />
                    <p>Koło Naukowe "Kredek"
                    Creation and Development Group
                    Politechnika Wrocławska
                    Wydział Informatyki i Telekomunikacji</p>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/KNKredek/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com/company/kn-kredek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <img src={Linkedin} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                        <a href="https://github.com/KNKredek" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <img src={Github} alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <a href="https://pwr.edu.pl/" target="_blank">
                        <img src={Pwr}/>
                    </a>
                    <a href="https://wit.pwr.edu.pl/" target="_blank">
                        <img src={Wit}/>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Made with 🖍⁠ by KN "Kredek"</p>
            </div>
        </footer>
    )
}