import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";




export default function Navbar () {

    
    const collapse = document.querySelector(".collapse");
    
    const handleShow = () => {
        collapse.classList.remove("show");
    }


    return (
        <>
            <header className=" z-3">
                <nav className="navbar navbar-expand-lg bg-dark z-3" data-bs-theme="dark">

                    <div className="container-fluid">

                        <h1 className="navbar-brand ms-5">JOHN DOE</h1>
                        <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">

                            <ul className="navbar-nav gap-3 me-5">
                                <NavLink onClick={handleShow} className="nav-link" to="/">Accueil</NavLink>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                <NavLink className="nav-link" to="/realisations">Réalisations</NavLink>
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                <NavLink className="nav-link" to="/me-contacter">Me contacter</NavLink>
                            </ul>

                        </div>

                    </div>
                </nav>
            </header>

            <main>
                <Outlet />

                <footer className="bg-secondary-subtle">
                    <Footer />
                </footer>
            </main>
        </>
    )
}