
import './styles/General.scss';
import './styles/Home.scss';
import './styles/Services.scss';
import './styles/Realisations.scss';
import './styles/Blog.scss';
import './styles/Contact.scss';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Realisations from './Pages/Realisations';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
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
    </div>
  );
}

export default App;
