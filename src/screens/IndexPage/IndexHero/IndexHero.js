import React, {useContext, useState, useEffect} from 'react'
import cx from 'classnames'
import { config,useSpring,animated } from '@react-spring/web'
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import LightingContext from  'components/LightingContext'
import {LIGHT} from 'constants/colors'

import {vw,lerp} from 'utils/utils'



const IndexHero =  (props) => {
    const {
        classes,
        lerpVal,
    } = {...props}

    const [heroText, setHeroText] = useState(null)

    useEffect(()=>{
        setHeroText(document.getElementById("hero-text"))
    },[])

    useEffect(()=>{
        //console.log(heroText)
        if(heroText)
            heroText.style.fontSize = vw(lerp(7,10,lerpVal))
    },[lerpVal])

    

    const {lighting} = useContext(LightingContext);
    const [flip, setFlip] = useState(false)

    useEffect(() =>{
        setFlip(true)
    },[lighting])

    const theme = useTheme()

    const darkAnimationProps = useSpring({
        from: {
            color: 'white',
            opacity:0
        },
        to: {
            opacity:1,
            color:'yellow',
        },
        config: config.molasses,
        reset: flip,
        onRest: () => setFlip(false),
    })

    const brightAnimationProps = useSpring({
        from: {
            color: 'white',
            opacity:0
        },
        to: {
            opacity:1,
            color:'black',
        },
        config: config.molasses,
        reset: flip,
        onRest: () => setFlip(false),
    })
    // <animated.div style={lighting === LIGHT ? brightAnimationProps : darkAnimationProps}>
    //                     Lets Build Together 
    //             </animated.div>


    return (
        <div className={cx(classes.heroContainer)}>
                <div id={"hero-text"} className= {cx(classes.heroText)}>
                        Lets Build Together 
                </div>
        </div>
    )
}

export default IndexHero