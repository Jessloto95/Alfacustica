import { useState } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import './App.css'

function App() {

  return ( 
    <div className='App'>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
