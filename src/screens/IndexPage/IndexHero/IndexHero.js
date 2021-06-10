import React, {useContext, useState, useEffect} from 'react'
import cx from 'classnames'
import { config,useSpring,animated } from '@react-spring/web'

import LightingContext from  'components/LightingContext'
import {LIGHT} from 'constants/colors'



const IndexHero =  (props) => {
    const {
        classes,
    } = {...props}

    const {lighting} = useContext(LightingContext);
    const [flip, setFlip] = useState(false)

    useEffect(() =>{
        setFlip(true)
    },[lighting])

    const darkAnimationProps = useSpring({
        from: {
            textShadow: '1px 1px 1px white',
            color: 'white',
            opacity:0
        },
        to: {
            textShadow: '1px 1px 75px orange',
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


    return (
        <div 
        className={
            cx(
                classes.heroContainer,
                lighting === LIGHT ?  classes.lightContainer : classes.darkContainer,)
        }>
            <div className= {
                cx(
                    classes.heroText
                )
            }>
            <animated.div style={lighting === LIGHT ? brightAnimationProps : darkAnimationProps}>
                    Zim Codes  
            </animated.div>
            </div>
        </div>
    )
}

export default IndexHero