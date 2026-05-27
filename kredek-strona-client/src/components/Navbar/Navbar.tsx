import { Link, useLocation } from "react-router"
import Logo from '../../assets/logo.png';
import './navbar.scss';

export default function Navbar() {
    const location = useLocation().pathname;
    return (
        <nav className='navbar'>
            <Link to="/" className='nav-logo'>
                <img height={64} src={Logo} alt="logo"/>
            </Link>
            <div className="nav-links">
                <Link to="/kursy" 
                    className={`nav-link ${location==='/kursy' && 'nav-active-link'}`}
                    >
                    Nasze kursy
                </Link>
                <Link to="/projekty" 
                    className={`nav-link ${location==='/projekty' && 'nav-active-link'}`}
                    >
                    Projekty kursantów
                </Link>
                <Link to="/about" 
                    className={`nav-link ${location==='/about' && 'nav-active-link'}`}
                    >
                    O nas
                </Link>
                <a className='nav-main-link'>Dołącz do nas</a>
            </div>
        </nav>
    )
}