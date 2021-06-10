import './App.css';

import React, {useMemo,useState} from 'react'
import {ThemeProvider, MuiThemeProvider} from '@material-ui/core/styles'

import Header from './components/Header'
import IndexPage from './screens/IndexPage'
import LightingContext from './components/LightingContext'
import {darkTheme, lightTheme, darkThemeTest, lightThemeTest} from './themes'

import {createMuiTheme} from '@material-ui/core/styles'


import {DARK, LIGHT} from 'constants/colors'



function App() {

  const [lighting,setLighting] = useState(LIGHT)

  //TODO debate pros and cons of this 
  //If we want React.strict mode... need to createMuiTheme everytime we want to swap from
  //light to dark.
  //IF we REMOVE React.strict... we can simply pass our themes in from the themes file
  //without using a themeState.
  //
  const [theme, setTheme] = useState(createMuiTheme(lightThemeTest))
  const toggleLighting = () => {
    setTheme( createMuiTheme (lighting === LIGHT ? darkThemeTest: lightThemeTest) )
    setLighting( lighting === LIGHT ? DARK : LIGHT)
  }

  return (
    <div className="App">
      <LightingContext.Provider value={{lighting,toggleLighting}}>
        <MuiThemeProvider theme={theme}>
          <Header/>
          <IndexPage/>
        </MuiThemeProvider  >
      </LightingContext.Provider>
    </div>
  );
}

export default App;
