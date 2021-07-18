import React, {useEffect, useState} from 'react'
import { useTheme } from '@material-ui/core/styles';

import {rem, lerp} from 'utils/utils.js'
import { Typography } from '@material-ui/core';

const ScrollDownText = (props) =>{
    
    const{
        classes,
        lerpVal
    } = {...props}

    const [textElement, setTextElement] = useState(null)
    const theme = useTheme()

    useEffect(()=>{
        setTextElement(document.getElementById("scroll-down-text"))
    },[])

    useEffect(()=>{
        if(textElement){
            textElement.style.fontSize = rem(lerp(0,4,lerpVal))
            textElement.style.opacity = lerp(0,1,lerpVal)
        }
    },[lerpVal])

    
    
    return(
                <div id={'scroll-down-text'} className={classes.mainText}>
                    Scroll Down
                </div>
        )
}

export default ScrollDownText