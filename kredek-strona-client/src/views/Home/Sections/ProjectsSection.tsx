import { useState } from 'react'
import { CalendarDays, Utensils, Handshake } from 'lucide-react';
import ComputerPhoto from '../../../assets/computer_programmer.jpg'

export default function ProjectsSection() {
    const [projectActive, setProjectActive] = useState(1);
    return (
        <section id="projekty" className="projects">
            <h2>Projekty Kursantów</h2>
            <div className="projectsContainer">
                <div className="projectsImage">
                    <img src={ComputerPhoto} className="laptopMockup" alt="computer programming" />
                </div>
                <div className="projectsList">
                    {projects.map((project, index) => (
                        <div 
                            className={projectActive===project.id ? "projectItemActive" : "projectItem"} 
                            onClick={()=>setProjectActive(project.id)}
                            key={index}
                            >
                            <div className="projectIcon" style={{backgroundColor: project.color, color: project.backcolor}}>{project.icon}</div>
                            <div className="projectText">
                                <h3>{project.title}</h3>
                                <span className="author">{project.author}</span>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const projects = [
    {
        id: 1,
        color: "#e7f5ff",
        backcolor: "#5D9ECC",
        icon: <CalendarDays/>,
        title: "PlanZajęć+",
        author: "Autor: Michał K.",
        description: "Mobilna aplikacja do zarządzania planem zajęć zintegrowana z systemem USOS."
    },
    {
        id: 2,
        color: "#fff5f5",
        backcolor: "#F35E5E",
        icon: <Utensils/>,
        title: "StudenckaSzama",
        author: "Autorzy: Grupa .NET 2023",
        description: "Platforma do zamawiania jedzenia ze stołówek z systemem lojalnościowym."
    },
    {
        id: 3,
        color: "#ebfbee",
        backcolor: "#57E470",
        icon: <Handshake/>,
        title: "PomocSąsiedzka",
        author: "Autor: Anna W.",
        description: "Portal łączący studentów potrzebujących pomocy w nauce z korepetytorami."
    }
]