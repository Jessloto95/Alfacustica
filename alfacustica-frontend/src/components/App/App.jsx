import { useState } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Porfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


function App() {

  return ( 
    <div className='App'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Porfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
