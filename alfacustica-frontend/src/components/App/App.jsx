
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Porfolio from '../Portfolio/Portfolio';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import LaserCutting from '../Laser/LaserCutting';


function App() {

  return ( 
    <Router>
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={
      <main>
        <Hero />
        <Services />
        <Porfolio />
        <Clients />
        <Contact />
      </main>
       } />

       <Route path='/corte-laser' element={<LaserCutting />}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
