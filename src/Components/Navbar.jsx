import { NavLink, Outlet } from "react-router-dom";




export default function Navbar () {


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">

                    <div className="container-fluid">

                        <h1 className="navbar-brand ms-5">JOHN DOE</h1>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                            <ul className="navbar-nav gap-3 me-5">
                                <NavLink className="nav-link" to="/">Accueil</NavLink>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                <NavLink className="nav-link" to="/realisations">Réalisations</NavLink>
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                <NavLink className="nav-link" to="/me-contacter">Me contacter</NavLink>
                            </ul>

                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <span class="navbar-toggler-icon"></span>

                        </button>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}