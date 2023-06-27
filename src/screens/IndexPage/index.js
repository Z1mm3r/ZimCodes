import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

import { animated, config, useSpring, useTransition } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import AbsoluteWrapper from 'components/AbsoluteWrapper'
import IndexHero from './IndexHero'
import TechSection from './TechSection'
import ScrollDownText from './ScrollDownText'

import styles from './styles.js'

import { calcLerp, selectStyles } from 'utils/utils'




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

    const [scrollVal, setScrollVal] = useState(0)
    const [parallaxSize, setParallaxSize] = useState(0)
    const [parallaxLayer, setParallaxLayer] = useState(null)

    const [lerpVal, setLerpVal] = useState(null)

    const handleScroll = () => {
        if (parallaxRef.current) {
            setScrollVal(parallaxRef.current.current)
        }
    }

    const handleWindowResize = () => {
        if (document.querySelector(selectStyles(classes.testName) + ' > div:first-child'))
            setParallaxSize(document.querySelector(selectStyles(classes.testName) + ' > div:first-child').style.height)
    }

    useEffect(() => {
        if (scrollVal && parallaxSize && parallaxLayer)
            setLerpVal(calcLerp(parseInt(parallaxLayer.style.height), parallaxSize, scrollVal))
    }, [scrollVal, parallaxSize, parallaxLayer])

    useEffect(() => {
        if (document.querySelector(selectStyles(classes.parallaxParent) + ' > div:first-child'))
            setParallaxSize(parseInt(document.querySelector(selectStyles(classes.parallaxParent) + ' > div:first-child').style.height))
    }, [(document.querySelector(selectStyles(classes.parallaxParent) + ' > div:first-child') ? document.querySelector(selectStyles(classes.parallaxParent) + ' > div:first-child').style.height : null)])

    useLayoutEffect(() => {
        setParallaxLayer(document.querySelector('.test-two'))
    }, [document.querySelector('.test-two')])

    useLayoutEffect(() => {
        const container = document.querySelector("." + CSS.escape(classes.parallaxParent))
        console.log(CSS.escape(classes.parallaxParent))
        container.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleWindowResize);
        return () => {
            container.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    //TODO note: offset for tech section was 1.3 -> changed to 1.1 for now

    return (
        <AbsoluteWrapper>
            <Grid container>
                <div className={classes.paraWrap}>
                    <Parallax className={classes.parallaxParent} ref={parallaxRef} pages={1.9}>
                        <ParallaxLayer className={"test-two"} sticky={{ start: .1, end: 2 }}>
                            <Grid className={"test-3"} item xs={12}>
                                <IndexHero lerpVal={lerpVal} />
                                <ScrollDownText lerpVal={lerpVal} />
                            </Grid>
                        </ParallaxLayer>
                        <ParallaxLayer offset={1.1} speed={.5}>
                            <Grid item xs={12}>
                                <TechSection lerpVal={lerpVal} />
                            </Grid>
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </Grid>
        </AbsoluteWrapper>
    )
}

export default IndexPage


