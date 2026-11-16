import { Computer, NotebookText, Database } from "lucide-react"
import Button from "../../../components/Button/Button"

export default function CoursesSection() {
    return (
        <section id="kursy" className="courses">
            <div className="sectionHeader">
                <h2>Nasze Kursy!</h2>
                {/* <a href="#wszystkie" className="linkMore">Wszystkie kursy &rarr;</a> */}
            </div>
            <p className="subTitle">Rozpocznij swoją przygodę z technologią.</p>
            <div className="coursesGrid">
                {courses.map((course, index) => (
                    <div className="courseCard" key={index}>
                        {/* <div className={`courseHeader ${course.className}`}>
                            {course.tag && <span className={course.tag.classname}>{course.tag.name}</span>}
                            <div className="courseIcon">{course.icon}</div>
                            <h4>{course.subtitle}</h4>
                        </div>
                        <div className="courseBody">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className="courseMeta">
                                <span>⏱️ {course.time}</span>
                                <span>👤 {course.difficulty}</span>
                            </div>
                        </div> */}
                        <div className="textSection">
                            <div className="title">
                                Obiektowość w zasięgu ręki. Kurs C# INIT 2026
                            </div>
                            <div className="description">
                                Naucz się całego przedmiotu w ciągu tylko 6 tygodni. Od podstawowych klas po początki w game devie
                            </div>
                            <div className="tags">
                                {course.tags?.map((tag) => (
                                    <div className="tag">
                                        <div className="tagCircle">
                                            {tag.icon}
                                        </div>
                                        {tag.text}
                                    </div>
                                ))}
                            </div>
                            <button>Dowiedz się więcej</button>
                            <div className="starting">
                                03.11.2026
                            </div>
                        </div>
                        <div className="imageSection">
                            <img src="init_bg.png" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const courses = [
    {
        id: 1,
        tags: [
            {
                icon: <Computer/>,
                text: "Naucz się C#",
                color: ""
            },
            {
                icon: <Computer/>,
                text: "Dla początkujących",
                color: ""
            },
                        {
                icon: <Computer/>,
                text: "Unity",
                color: ""
            },
                        {
                icon: <Computer/>,
                text: "Ble ble",
                color: ""
            },
        ],
        title: "Kurs C# INIT 2026",
        subtitle: "C# + Unity",
        description: "Nauczy się programowania obiektowego oraz wgryź się w game dev!",
        time: "8 tyg.",
        difficulty: "Begginner"
    },
    {
        id: 2,
        className: "bgFrontend",
        icon: <NotebookText/>,
        title: "Nowoczesny Frontend",
        subtitle: "Frontend Masters",
        description: "React, Tailwind CSS i TypeScript. Zbuduj interaktywne interfejsy użytkownika od zera.",
        time: "10 tyg.",
        difficulty: "Intermediate"
    },
    // {
    //     id: 3,
    //     className: "bgData",
    //     tag: {
    //         name: "NOWOŚĆ",
    //         classname: "tagNew"
    //     },
    //     icon: <Database/>,
    //     title: "Wstęp do Analizy Danych",
    //     subtitle: "Data Science",
    //     description: "Python, Pandas i wizualizacja danych. Odkryj wiedzę ukrytą w liczbach.",
    //     time: "6 tyg.",
    //     difficulty: "Begginner"
    // },
]