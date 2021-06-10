import './App.css';

import React, {useMemo,useState} from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import { Switch, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import IndexPage from './screens/IndexPage'
import AboutPage from './screens/AboutMePage'
import AboutSitePage from './screens/AboutSitePage'
import LightingContext from './components/LightingContext'
import {darkTheme, lightTheme, darkThemeTest, lightThemeTest} from './themes'
import {DARK, LIGHT} from 'constants/colors'



function App() {

  const [lighting,setLighting] = useState(LIGHT)
  const location = useLocation();

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
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/site" component={AboutSitePage} />
          </Switch>
        </MuiThemeProvider  >
      </LightingContext.Provider>
    </div>
  );
}

export default App;
