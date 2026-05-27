import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './views/Home';
import OurCourses from './views/OurCourses';
import CoursantsProjects from './views/CoursantsProjects';
import AboutUs from './views/AboutUs';
import Navbar from './components/Navbar/Navbar';
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        {/* Navbar */}
        <Navbar/>
        
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
