import { useState } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import './App.css'

function App() {

  return ( 
    <div className='App'>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App
