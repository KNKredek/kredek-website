import { Pencil } from "lucide-react"

const Wave = (down: boolean = false) => (
    <div className="waveContainer" style={{transform: down ? "translate(0px,0px)rotate(180deg)" : "translate(0px,-120px)rotate(0deg)"}}>
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
            <div className="about-inner">
                <img src="" alt="XD" />
                <div className="about-us">
                    <div className="about-title">
                        O NAS <Pencil/>
                    </div>
                    <div className="about-text">
                        Kredek to koło naukowe zrzeszające studentów Politechniki Wrocławskiej pasjonujących się programowaniem aplikacji webowych i mobilnych. <br/><br/>
                        Zajmujemy się przede wszystkim dzieleniem się naszą wiedzą z innymi przez organizowany kurs programowania.<br/><br/>
                        + do dodania: warsztaty z firmami
                    </div>
                </div>
                <div className="circle"/>
            </div>
            {Wave(true)}
        </section>
    )
}