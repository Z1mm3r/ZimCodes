import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import React, {useState, useEffect} from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import {useTransition, animated} from '@react-spring/web'

import './App.css';
import AboutPage from './screens/AboutMePage'
import AboutSitePage from './screens/AboutSitePage'
import {DARK, LIGHT} from 'constants/colors'
import {darkTheme, lightTheme} from './themes'
import Header from './components/Header'
import IndexPage from './screens/IndexPage'
import LightingContext from './components/LightingContext'
import  {LOCATIONS } from 'constants/constants.js'
import {PAGE_LEFT_ENTER, PAGE_RIGHT_ENTER} from 'constants/transitions'
import ResumePage from './screens/ResumePage'

function App() {

  const [lighting,setLighting] = useState(LIGHT)

  //TODO debate pros and cons of this 
  //If we want React.strict mode... need to createMuiTheme everytime we want to swap from
  //light to dark.
  //IF we REMOVE React.strict... we can simply pass our themes in from the themes file
  //without using a themeState.
  //
  const [theme, setTheme] = useState(createMuiTheme(lightTheme))
  const toggleLighting = () => {
    setTheme( createMuiTheme (lighting === LIGHT ? darkTheme: lightTheme) )
    setLighting( lighting === LIGHT ? DARK : LIGHT)
  }
//----------------------Page Transition Logic--------------------------------------------------------------
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location.pathname)
  const [entranceSide, setEntranceSide] = useState(PAGE_LEFT_ENTER)
  const [left,setLeft] = useState(true)
  //Using superSet to stop race conditions on our transition creations
  const [superSet, setSuperSet] = useState({
    location:location,
    previousLocation:previousLocation,
    left: left,
    entranceSide: entranceSide
   })

  useEffect(() => {
    if(LOCATIONS.indexOf(previousLocation) > LOCATIONS.indexOf(location.pathname)){
      setEntranceSide(PAGE_LEFT_ENTER)
      setLeft(true)
      setPreviousLocation(location.pathname)
    }
    else if(LOCATIONS.indexOf(previousLocation) < LOCATIONS.indexOf(location.pathname)){
      setEntranceSide(PAGE_RIGHT_ENTER)
      setLeft(false)
      setPreviousLocation(location.pathname)
    }
  }, [location])

  useEffect(() =>{
    setSuperSet({location,previousLocation,left,entranceSide})
  },[previousLocation])

  const transitions = useTransition(superSet.location,superSet.entranceSide,[superSet.location,superSet.entranceSide])[0]
//---------------------------------------------------------------------------------------

  return (
    <div className="App">
      <LightingContext.Provider value={{lighting,toggleLighting}}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Header/>
            {transitions((props,item) =>(
              <animated.div style={ props }>
                <Switch location={item}>
                  <Route exact path="/" component={IndexPage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/resume" component={ResumePage} />
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
