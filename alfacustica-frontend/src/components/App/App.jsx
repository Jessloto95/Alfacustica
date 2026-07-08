import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getProjectImages } from '../../utils/api';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Porfolio from '../Portfolio/Portfolio';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import LaserCutting from '../Laser/LaserCutting';


function App() {

  const [portfolioImages, setPortfolioImages] = useState([]);
   const [laserImages, setLaserImages] = useState([]);
   const [loadingPortfolio, setLoadingPortfolio] = useState(true);
   const [loadingLaser, setLoadingLaser] = useState(true);

   //Solicitud de Portafolio principal (oficinas)
   useEffect(() => {
    async function loadPortfolio() {
    try {
      const images = await getProjectImages('architecture interior office', 12);
      setPortfolioImages(images);
    } catch (error) {
      console.error('Error en portafolio:', error);
    } finally {
      setLoadingPortfolio(false);
    }
    }
    loadPortfolio();
   }, []);

   //Solicitud de Corte Laser (Patrones)
   useEffect(() => {
    async function loadLaser() {
      try {
        const images = await getProjectImages('geometric lines pattern background', 12);
        setLaserImages(images);
      } catch (error) {
        console.error('Error en corte láser:', error);
      } finally {
        setLoadingLaser(false);
      }
    }
    loadLaser();
   }, []);

  return ( 
    <Router>
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={
      <main>
        <Hero />
        <Services />
        <Porfolio  projectImages={portfolioImages} loading={loadingPortfolio}/>
        <Clients />
        <Contact />
      </main>
       } />

       <Route path='/corte-laser' element={<LaserCutting  laserImages={laserImages} loading={loadingLaser}/>}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
