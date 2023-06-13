import john_doe from '../assets/john-doe-about.jpg';



export default function Home () {


    return (
        <>
            <section className="section-home d-flex justify-content-center align-items-center container-fluid">
                <div className="d-flex flex-column gap-3">

                    <h1 className="titre-home-section text-light">Bonjour, je suis John Doe</h1>

                    <h2 className="titremetier-home-section text-light">Développeur web full stack</h2>

                    <button type="button" className="btn btn-primary justify-self-center align-self-center z-3"><a href="#a-propos">En savoir plus</a></button>

                </div>
            </section>


            <section id="a-propos" className="d-flex justify-content-center align-items-center container-fluid mt-3">


                <div className="d-flex flex-row gap-5 container-fluid col-9 card p-5 rounded-2 border-0">

                    <div className="a-propos-texte d-flex flex-column gap-4 col-5 ">

                        <div className="titre-section-a-propos">
                            <h3>À propos</h3>
                            <hr />
                        </div>
                        <p>
                            Passionné par l'informatique et les nouvelles <br />technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du dévelopemment web.
                        </p>
                        <p>
                            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong>
                        </p>
                        <p>
                            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                        </p>
                    </div>

                    <div className="image_john_competences col-6 container-fluid d-flex gap-2 flex-column">
                        <img className="rounded-2" src={john_doe} alt="John_Doe" />
                        <h3>Mes compétences</h3>
                        <div className="competences d-flex flex-column gap-3">
                            <div>
                                <p>HTML5 90%</p>
                                <div className="progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p>CSS3 80%</p>
                                <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p>JAVASCRIPT 70%</p>
                                <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p>PHP 60%</p>
                                <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p>REACT 50%</p>
                                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}