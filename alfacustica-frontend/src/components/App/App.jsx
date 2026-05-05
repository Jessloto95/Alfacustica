import { useState } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Porfolio from '../Portfolio/Portfolio';


function App() {

  return ( 
    <div className='App'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Porfolio />
      </main>
    </div>
  );
}

export default App;
