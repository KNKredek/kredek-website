import { Pen } from "lucide-react"

export default function CurrentCourse(){
    return (
        <div id="currentCourse" className="currentCourse">
            <div className="currentCourseInner">
                <div className="currentCourseTitle">
                    AKTUALNY KURS
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className="course">
                    <div className="courseTitle">
                        INIT - 2026
                    </div>
                    <div className="courseDescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="tags">
                        {
                            tags.map(tag => (
                                <div className="tag">
                                    <div className="tagIcon">
                                        {tag.icon}
                                    </div>
                                    <div className="tagText">
                                        {tag.title}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="buttonContainer">
                        <button className="btnCrayon">
                            Dowiedz się więcej
                        </button>
                        <button className="btnCrayon">
                            Zapisz się na kurs
                        </button>
                    </div>
                </div>
                <div>Chcesz więcej?</div>
                <a>Sprawdź archiwum!</a>
            </div>
        </div>
    )
}

const tags = [
    {
        icon: <Pen/>,
        title: "1",
    },
    {
        icon: <Pen/>,
        title: "2",
    },
    {
        icon: <Pen/>,
        title: "3",
    },
    {
        icon: <Pen/>,
        title: "4",
    },
]