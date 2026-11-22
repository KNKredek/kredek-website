import { Link, useLocation } from "react-router"
import Logo from '../../assets/logo.png';
import './navbar.scss';

export default function Navbar() {
    const location = useLocation().pathname;
    return (
        <nav className='navbar'>
            <Link to="/" className='navLogo'>
                <img height={64} src={Logo} alt="logo"/>
            </Link>
            <div className="navLinks">
                <Link to="/kursy" 
                    className={`navLink ${location==='/kursy' && 'navActiveLink'}`}
                    >
                    Nasze kursy
                </Link>
                <Link to="/projekty" 
                    className={`navLink ${location==='/projekty' && 'navActiveLink'}`}
                    >
                    Projekty kursantów
                </Link>
                <Link to="/about" 
                    className={`navLink ${location==='/about' && 'navActiveLink'}`}
                    >
                    O nas
                </Link>
                <a className='navMainLink'>Dołącz do nas</a>
            </div>
        </nav>
    )
}