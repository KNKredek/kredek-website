import { Pencil } from "lucide-react"
import Us from '../../../assets/us.jpg';

const Wave = (down: boolean = false) => (
    <div className="waveContainer" style={{transform: down ? "translate(0px,-1px)rotate(180deg)" : "translate(0px,-119px)rotate(0deg)"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" preserveAspectRatio="none" className="waveSvg">
            <path 
                className="wavePath waveBack" 
                d="M0,100 C360,150 360,50 720,100 C1080,150 1080,50 1440,100 L1440,200 L0,200 Z"
            />
            <path 
                className="wavePath waveFront" 
                d="M0,100 C360,50 360,150 720,100 C1080,50 1080,150 1440,100 L1440,200 L0,200 Z"
            />
        </svg>
    </div>
)

export default function AboutSection() {
    return (
        <section className="about">
            {Wave(false)}
            <div className="aboutInner">
                <div className="aboutImage">
                    <img src={Us} alt="us image" />
                </div>
                <div className="aboutUs">
                    <h2 className="aboutTitle">
                        O NAS <Pencil/>
                    </h2>
                    <div className="aboutText">
                        <p>Kredek to koło naukowe zrzeszające studentów Politechniki Wrocławskiej pasjonujących się programowaniem aplikacji webowych i mobilnych.</p>
                        <p>Zajmujemy się przede wszystkim dzieleniem się naszą wiedzą z innymi przez organizowany kurs programowania.</p>
                        <p>+ do dodania: warsztaty z firmami</p>
                    </div>
                </div>
            </div>
            {Wave(true)}
        </section>
    )
}