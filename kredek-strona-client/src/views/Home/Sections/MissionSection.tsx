import { CodeXml, GraduationCap, UsersRound } from "lucide-react"

export default function MissionSection() {
    return (
        <section className="mission">
            <h2>Czym się zajmujemy?</h2>
            <p className="missionDesc">Nauczamy studentów, prowadzimy kursy i warsztaty, organizujemy wykłady, tworzymy oprogramowanie wspierające studentów, a przede wszystkim dobrze się bawi w zacnym gronie.</p>
            {/* <div className="cardsGrid">
                <div className="card">
                    <GraduationCap className="cardIcon"/>
                    <h3>Darmowa Edukacja</h3>
                    <p>Oferujemy bezpłatne warsztaty i kursy prowadzone przez doświadczonych studentów starszych lat.</p>
                </div>
                <div className="card">
                    <CodeXml className="cardIcon"/>
                    <h3>Realne Projekty</h3>
                    <p>Nie piszemy kodu do szuflady. Tworzymy aplikacje, które rozwiązują problemy naszej uczelni.</p>
                </div>
                <div className="card">
                    <UsersRound className="cardIcon"/>
                    <h3>Networking</h3>
                    <p>Poznaj ludzi o podobnych pasjach, wymieniaj się doświadczeniami i buduj swoje portfolio.</p>
                </div>
            </div> */}
        </section>
    )
}