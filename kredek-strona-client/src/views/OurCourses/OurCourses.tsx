import { useState } from 'react';
import { 
  Code, Terminal, Database, 
  Calendar, Utensils, Handshake, Download, ArrowRight, 
  Globe, Server, Cpu
} from 'lucide-react';
import './ourCourses.scss';

interface Project {
  id: number;
  title: string;
  author: string;
  desc: string;
  iconType: 'calendar' | 'utensils' | 'handshake';
  isActive?: boolean;
}

interface PastCourse {
  id: number;
  title: string;
  period: string;
  desc: string;
  studentsCount: number;
  instructor: string;
  category: 'frontend' | 'backend';
  iconType: 'html' | 'python' | 'flutter' | 'java' | 'linux';
}

const mockProjects: Project[] = [
  { id: 1, title: 'PlanZajęć+', author: 'Michał K.', desc: 'Mobilna aplikacja do zarządzania planem zajęć zintegrowana z systemem USOS.', iconType: 'calendar' },
  { id: 2, title: 'StudenckaSzama', author: 'Autorzy: Grupa .NET 2023', desc: 'Platforma do zamawiania jedzenia ze stołówek z systemem lojalnościowym.', iconType: 'utensils', isActive: true },
  { id: 3, title: 'PomocSąsiedzka', author: 'Autor: Anna W.', desc: 'Portal łączący studentów potrzebujących pomocy w nauce z korepetytorami.', iconType: 'handshake' }
];

const mockPastCourses: PastCourse[] = [
  { id: 1, title: 'Frontend Basics', period: '2023 Q1', desc: 'Solidne podstawy tworzenia stron WWW. HTML5, CSS3 i wprowadzenie do nowoczesnego...', studentsCount: 45, instructor: 'Kamil S.', category: 'frontend', iconType: 'html' },
  { id: 2, title: 'Python & Data', period: '2022 Q4', desc: 'Analiza danych, wizualizacja i machine learning. Praktyczne zastosowanie bibliotek Pandas i...', studentsCount: 32, instructor: 'Marek W.', category: 'backend', iconType: 'python' },
  { id: 3, title: 'Flutter Mobile', period: '2022 Q2', desc: 'Tworzenie natywnych aplikacji na iOS i Androida przy użyciu jednego kodu źródłowego w...', studentsCount: 28, instructor: 'Piotr K.', category: 'frontend', iconType: 'flutter' },
  { id: 4, title: 'Java & Spring', period: '2021 Q4', desc: 'Profesjonalne podejście do tworzenia aplikacji webowych w ekosystemie Java. Spring,...', studentsCount: 40, instructor: 'Adam J.', category: 'backend', iconType: 'java' },
  { id: 5, title: 'Linux & Bash', period: '2021 Q3', desc: 'Administracja systemem Linux, automatyzacja zadań i pisanie skryptów powłoki Bash dla...', studentsCount: 25, instructor: 'Tomek R.', category: 'backend', iconType: 'linux' }
];


export default function OurCourses() {
  const [activeTab, setActiveTab] = useState<'wszystkie' | 'frontend' | 'backend'>('wszystkie');
  const [activeProject, setActiveProject] = useState<number>(2);

  const filteredCourses = mockPastCourses.filter(course => {
    if (activeTab === 'wszystkie') return true;
    return course.category === activeTab;
  });

  const renderProjectIcon = (type: string) => {
    switch (type) {
      case 'calendar': return <Calendar className="pIcon" />;
      case 'utensils': return <Utensils className="pIcon" />;
      case 'handshake': return <Handshake className="pIcon" />;
      default: return <Code className="pIcon" />;
    }
  };

  const renderCourseIcon = (type: string) => {
    switch (type) {
      case 'html': return <Globe size={20} />;
      case 'python': return <Database size={20} />;
      case 'flutter': return <Cpu size={20} />;
      case 'java': return <Server size={20} />;
      case 'linux': return <Terminal size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <div className="landingPage">
      

      <section className="upcomingCourseSection">
        <h2>Nadchodzący kurs</h2>
        <div className="redLine"></div>
        <div className="upcomingContainer">
          <div className="upcomingLeft">
            <span className="countdownBadge">STARTUJE ZA 5 DNI</span>
            <div className="previewBox">
              <Terminal size={48} />
              <h3>C# & .NET</h3>
              <span>Backend Mastery</span>
            </div>
          </div>
          <div className="upcomingRight">
            <div className="tagsRow">
              <span className="badgeGreen">POZIOM: ŚREDNIOZAAWANSOWANY</span>
              <span className="badgeBlue">8 TYGODNI</span>
              <span className="badgePurple">CERTYFIKAT</span>
            </div>
            <h2>Tworzenie Skalowalnych Aplikacji w .NET 8</h2>
            <p className="descriptionText">Kompleksowy kurs backendowy, który przeprowadzi Cię od podstaw architektury REST API, przez Entity Framework Core, aż po zaawansowane wzorce projektowe i mikroserwisy. Nauczysz się pisać czysty, testowalny kod, który jest standardem w branży.</p>
            
            <div className="techSpecs">
              <h4>TECHNOLOGIE</h4>
              <div className="techIcons">
                <span>&lt;/&gt; C# 12</span>
                <span>💾 EF Core</span>
                <span>☁️ Azure</span>
                <span>🌐 WebAPI</span>
                <span>🪲 xUnit</span>
              </div>
            </div>

            <div className="metaRow">
              <div className="instructors">
                <h4>PROWADZĄCY</h4>
                <div className="avatarGroup">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatarPlus">+2</div>
                </div>
              </div>
              <div className="seatsCount">
                <h4>LICZBA MIEJSC</h4>
                <span className="seatsLeft">24 <small>wolne miejsca na 30 dostępnych</small></span>
                <div className="progressBar"><div className="progressFill"></div></div>
              </div>
            </div>

            <div className="actionRow">
              <button className="btnApply">Zapisz się na kurs <ArrowRight size={16} /></button>
              <button className="btnPdf"><Download size={16} /> Sylabus PDF</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pastCoursesSection">
        <div className="pastHeader">
          <h2>Poprzednie kursy</h2>
          <div className="tabsFilter">
            <button className={activeTab === 'wszystkie' ? 'active' : ''} onClick={() => setActiveTab('wszystkie')}>Wszystkie</button>
            <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>Frontend</button>
            <button className={activeTab === 'backend' ? 'active' : ''} onClick={() => setActiveTab('backend')}>Backend</button>
          </div>
        </div>

        <div className="pastGrid">
          {filteredCourses.map(course => (
            <div key={course.id} className="pastCard">
              <div className="pastCardTop">
                <div className="pastIconWrapper">
                  {renderCourseIcon(course.iconType)}
                </div>
                <div>
                  <h3>{course.title}</h3>
                  <span className="periodBadge">{course.period}</span>
                </div>
              </div>
              <p>{course.desc}</p>
              <div className="pastCardFooter">
                <span>🎓 {course.studentsCount} Studenci</span>
                <span>👤 {course.instructor}</span>
              </div>
            </div>
          ))}
          <div className="pastCard archiveCard">
            <div className="archiveCircle">
              <ArrowRight size={20} />
            </div>
            <h3>Archiwum</h3>
            <p>Zobacz starsze edycje (2018-2020)</p>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <h2>Gotowy na wyzwanie?</h2>
        <p>Dołącz do ponad 500 studentów, którzy już rozwijają swoje umiejętności z Kredek. Nie wymagamy doświadczenia, tylko chęci do nauki.</p>
        <div className="ctaFormBlock">
          <input type="email" placeholder="Twój e-mail uczelniany" />
          <button>Dołącz teraz</button>
        </div>
        <span className="disclaimerText">Respektujemy Twoją prywatność. Zero spamu.</span>
      </section>
    </div>
  );
};