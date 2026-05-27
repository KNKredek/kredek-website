import { Computer, NotebookText, Database } from "lucide-react"

export default function CoursesSection() {
    return (
        <section id="kursy" className="courses">
            <div className="sectionHeader">
                <h2>Polecane Kursy</h2>
                <a href="#wszystkie" className="linkMore">Wszystkie kursy &rarr;</a>
            </div>
            <p className="subTitle">Rozpocznij swoją przygodę z technologią.</p>
            <div className="coursesGrid">
                {courses.map((course, index) => (
                    <div className="courseCard" key={index}>
                        <div className={`courseHeader ${course.className}`}>
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
        className: "bgCsharp",
        tag: {
            name: "POPULARNY",
            classname: "tagPopular"
        },
        icon: <Computer/>,
        title: "Podstawy Backend Developmentu",
        subtitle: "C# & .NET Core",
        description: "Naucz się tworzyć skalowalne aplikacje serwerowe przy użyciu nowoczesnych technologii Microsoft.",
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
    {
        id: 3,
        className: "bgData",
        tag: {
            name: "NOWOŚĆ",
            classname: "tagNew"
        },
        icon: <Database/>,
        title: "Wstęp do Analizy Danych",
        subtitle: "Data Science",
        description: "Python, Pandas i wizualizacja danych. Odkryj wiedzę ukrytą w liczbach.",
        time: "6 tyg.",
        difficulty: "Begginner"
    },
]