
export default function Home () {


    return (
        <section className="section-home d-flex justify-content-center align-items-center container-fluid">
            <div className="d-flex flex-column gap-5">

                <h1 className="titre-home-section text-light">Bonjour, je suis John Doe</h1>

                <h2 className="titremetier-home-section text-light">Développeur web full stack</h2>

                <button type="button" className="btn btn-primary bouton-savoir"><a href="#a-propos">En savoir plus</a></button>

            </div>
        </section>
    )
}