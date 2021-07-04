import React, {useRef, useEffect, useState, useLayoutEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core'

import { animated, config,useSpring,useTransition } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import AbsoluteWrapper from 'components/AbsoluteWrapper'
import IndexHero from './IndexHero'
import TechSection from './TechSection'

import styles from './styles.js'

import {calcLerp} from 'utils/utils'




/* TODO ADD PARALAX -> 
      Fade in with  "scroll down for more" 
                              ||
                             \||/
                              \/
      Scroll down fades out when going down
      Big logos come in from sides
      Small logos come in from below
*/

const useStyles = makeStyles(styles)


const IndexPage = () => {
    
    const classes = useStyles();
    const parallaxRef = useRef()

    const [scrollVal,setScrollVal] = useState(0)
    const [parallaxSize, setParallaxSize] = useState(0)
    const [parallaxLayer, setParallaxLayer] = useState(null)

    const [lerpVal, setLerpVal] = useState(null)

    const handleScroll = () => {
        if (parallaxRef.current) {
          //console.log(parallaxRef.current.current)
          setScrollVal(parallaxRef.current.current)
          //console.log(document.querySelector('.test-two'))
        }
    }

    const handleWindowResize = () =>{
        if(document.querySelector('.test-name > div:first-child'))
            setParallaxSize(document.querySelector('.test-name > div:first-child').style.height)
    }

    useEffect(()=>{
       // console.log('scroll',scrollVal)
       // console.log('parraSize',parallaxSize)
       // console.log('paraLayer', (parallaxLayer ? parallaxLayer.style.height : 0))
        if(scrollVal && parallaxSize && parallaxLayer)
            setLerpVal(calcLerp(parseInt(parallaxLayer.style.height),parallaxSize,scrollVal))
    },[scrollVal,parallaxSize,parallaxLayer])

    useEffect(() => {
        if(document.querySelector('.test-name > div:first-child'))
            setParallaxSize(parseInt(document.querySelector('.test-name > div:first-child').style.height))
    },[(document.querySelector('.test-name > div:first-child') ? document.querySelector('.test-name > div:first-child').style.height : null)])

    useLayoutEffect(()=>{
        setParallaxLayer(document.querySelector('.test-two'))
    },[document.querySelector('.test-two')])

    useLayoutEffect(()=>{
        const container = document.querySelector('.test-name')

        container.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleWindowResize);
        return () => {
            container.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleWindowResize);
        }
    },[])

    return(
        <AbsoluteWrapper>
                <Grid  container>
                    <div className={classes.paraWrap}>      
                    <Parallax  className={"test-name"} ref={parallaxRef} pages={1.9}>
                        <ParallaxLayer className={"test-two"} sticky={{start:.1, end:2}}>
                            <Grid className={"test-3"} item xs={12}>
                                <IndexHero lerpVal={lerpVal}/>
                                <div className={classes.miniText}>
                                    Scroll Down
                                </div>
                            </Grid>
                        </ParallaxLayer>
                        <ParallaxLayer offset={1.3}>
                            <Grid item xs={12}>
                                <TechSection/>
                            </Grid>
                        </ParallaxLayer>
                    </Parallax>
                    </div>
                </Grid>
        </AbsoluteWrapper>
    )
}

export default IndexPage


