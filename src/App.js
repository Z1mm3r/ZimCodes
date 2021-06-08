import logo from './logo.svg';
import './App.css';

import React, {createContext,useState} from 'react'

import Header from './components/Header'
import IndexPage from './screens/IndexPage'
import LightingContext from './components/LightingContext'



function App() {

  const [lighting,setLighting] = useState('dark')

  const toggleLighting = () => {
    setLighting( lighting === "light" ? "dark" : "light")
    console.log('toggled')
  }

  return (
    <div className="App">
      <LightingContext.Provider value={{ lighting,toggleLighting}}>
        <Header/>
        <IndexPage/>
      </LightingContext.Provider>
    </div>
  );
}

export default App;
