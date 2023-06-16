
import './styles/General.scss';
import './styles/Home.scss';
import './styles/Services.scss';
import './styles/Realisations.scss';
import './styles/Blog.scss';
import './styles/Contact.scss';
import './styles/Responsive.scss';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Realisations from './Pages/Realisations';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import retour_haut from './assets/retour_haut.png';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    let bouton = document.querySelector(".bouton_retour_haut");

    function scroll () {
        let y = window.scrollY;
        if (y > 200) {
            bouton.style.opacity = "100%";
            console.log(y);
        }
        else {
            bouton.style.opacity = "0%";
        }
    }
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/realisations" element={<Realisations/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/me-contacter" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div onClick={() => {window.scrollTo(0, 0);}} className='bouton_retour_haut'>
        <img src={retour_haut} alt="flèche de retour haut" />
      </div>

    </div>
  );
}

export default App;
