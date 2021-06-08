import react, {useContext, useState} from 'react'
import cx from 'classnames'
import { config,useSpring,animated } from '@react-spring/web'
import Typography from '@material-ui/core/Typography'

import LightingContext from  'components/LightingContext'
import { FilledInput } from '@material-ui/core';
import { fileURLToPath } from 'url';


const IndexHero =  (props) => {
    const {
        classes,
    } = {...props}

    const [flip, setFlip] = useState(false)

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
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => setFlip(!flip),
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
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => setFlip(!flip),
    })

    const {lighting} = useContext(LightingContext);

    return (
        <div 
        className={
            cx(
                classes.heroContainer,
                lighting === "light" ?  classes.lightContainer : classes.darkContainer,)
        }>
            <div className= {
                cx(
                    classes.heroText
                )
            }>
            <animated.div style={lighting === "light" ? brightAnimationProps : darkAnimationProps}>
                    Zim Codes  
            </animated.div>
            </div>
        </div>
    )
}

export default IndexHero