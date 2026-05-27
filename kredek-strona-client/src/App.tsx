import { BrowserRouter, Link, Routes, Route } from 'react-router';
import Home from './views/Home';
import OurCourses from './views/OurCourses';
import CoursantsProjects from './views/CoursantsProjects';
import AboutUs from './views/AboutUs';
import Logo from './assets/logo.png';
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        {/* Navbar */}
        <nav className='navbar'>
          <div className="nav-logo">
            <img height={64} src={Logo} alt="logo"/>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/kursy">Nasze kursy</Link>
            <Link to="/projekty">Projekty kursantów</Link>
            <Link to="/about">O nas</Link>
          </div>
        </nav>
        
        {/* Tutaj tworzymy nasze ścieżki. Ten fragment nie jest widoczny na stronie */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kursy" element={<OurCourses />} />
          <Route path="/projekty" element={<CoursantsProjects />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
