import './App.css';

import React, {useMemo,useState, useContext} from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import { Switch, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import IndexPage from './screens/IndexPage'
import AboutPage from './screens/AboutMePage'
import AboutSitePage from './screens/AboutSitePage'
import LightingContext from './components/LightingContext'
import {darkTheme, lightTheme, darkThemeTest, lightThemeTest} from './themes'
import {DARK, LIGHT} from 'constants/colors'

import {useTransition, animated} from '@react-spring/web'

import { __RouterContext } from 'react-router';

function App() {

  const [lighting,setLighting] = useState(LIGHT)


  const location = useLocation();
  const transitions = useTransition(location,{
    from: { opacity: 0, transform: "translate(100%,0"},
    enter: { opacity: 1, transform: "translate(0%,0"},
    leave: { opacity: 0, transform: "translate(-50%,0"},
  })


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
          {transitions((props,item) =>(
            <animated.div style={props}>
              <Switch location={item}>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/site" component={AboutSitePage} />
              </Switch>
            </animated.div>
          ))}
        </MuiThemeProvider  >
      </LightingContext.Provider>
    </div>
  );
}

export default App;
