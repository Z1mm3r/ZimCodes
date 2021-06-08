import logo from './logo.svg';
import './App.css';

import React, {createContext,useState} from 'react'

import Header from './components/Header'
import IndexHero from './components/IndexHero'
import LightingContext from './components/LightingContext'



function App() {

  const [lighting,setLighting] = useState('light')

  const toggleLighting = () => {
    setLighting( lighting === "light" ? "dark" : "light")
    console.log('toggled')
  }

  return (
    <div className="App">
      <LightingContext.Provider value={{ lighting,toggleLighting}}>
        <Header/>
        <IndexHero>
        </IndexHero>
      </LightingContext.Provider>
    </div>
  );
}

export default App;
