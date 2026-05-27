export default function CtaSection() {
    return (
        <section className="cta">
            <h2>Gotowy na wyzwanie?</h2>
            <p>Dołącz do ponad 500 studentów, którzy już rozwijają swoje umiejętności z Kredek. Nie wymagamy doświadczenia, tylko chęci do nauki.</p>
            <div className="ctaForm">
                <input type="email" placeholder="Twój e-mail uczelniany" />
                <button>Dołącz teraz</button>
            </div>
            <span className="ctaDisclaimer">Respektujemy Twoją prywatność. Zero spamu.</span>
        </section>
    )
}