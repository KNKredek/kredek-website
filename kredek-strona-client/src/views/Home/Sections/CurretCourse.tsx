import { Pen } from "lucide-react"
import Button from "../../../components/Button/Button"

export default function CurrentCourse(){
    return (
        <div id="currentCourse" className="currentCourse">
            <div className="currentCourseInner">
                <h2 className="currentCourseTitle">
                    AKTUALNY KURS
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className="course">
                    <h2 className="courseTitle">
                        INIT - 2026
                    </h2>
                    <p className="courseDescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="tags">
                        {
                            tags.map(tag => (
                                <div className="tag">
                                    <div className="tagIcon">
                                        {tag.icon}
                                    </div>
                                    <p className="tagText">
                                        {tag.title}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="buttonContainer">
                        <Button variant={"init"}>Dowiedz się więcej</Button>
                        <Button variant={"init"}>Zapisz się na kurs</Button>
                    </div>
                </div>
                <p>Chcesz więcej?</p>
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