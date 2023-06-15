

export default function Contact () {


    return (
        
        <section className="section-contact d-flex flex-column justify-content-center align-items-center section-contact col-12 pt-2">

            <article className="card d-flex flex-column justify-content-center align-items-center col-11 p-5 mb-5">

                <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                    <h1 className="mb-2">ME CONTACTER</h1>
                    <p className="text-center">
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                    </p>
                    <hr className="sep w-25" />
                </div>

                <div>
                    <div>
                        <div className="mb-4">
                            <h2 className="mb-3 fs-1">Formulaire de contact</h2>
                            <hr className="sep w-100" />
                        </div>
                        <form className="d-flex flex-column justify-content-center align-items-stretch gap-3">
                            <input className="p-2 rounded-2 border border-dark-subtle" placeholder="Votre nom" type="text" />
                            <input className="p-2 rounded-2 border border-dark-subtle" type="email" placeholder="Votre adresse email"/>
                            <input className="p-2 rounded-2 border border-dark-subtle" type="phone" placeholder="Votre numéro de téléphone"/>
                            <input className="p-2 rounded-2 border border-dark-subtle" type="text" placeholder="Sujet"/>
                            <textarea className="p-2 rounded-2 border border-dark-subtle" cols="30" rows="10" placeholder="Votre message"></textarea>
                            <button className="btn btn-primary col-5 align-self-center">ENVOYER</button>
                        </form>
                    </div>
                </div>

                <div className="mt-3">
                    <h2>Mes coordonnées</h2>
                    <hr className="sep w-100"/>
                </div>
            </article>

        </section>

    )
}