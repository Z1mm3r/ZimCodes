import React, {useEffect, useState} from 'react'

import {em, lerp} from 'utils/utils.js'

const ScrollDownText = (props) =>{
    
    const{
        classes,
        lerpVal
    } = {...props}

    const [textElement, setTextElement] = useState(null)

    useEffect(()=>{
        setTextElement(document.getElementById("scroll-down-text"))
    },[])

    useEffect(()=>{
        if(textElement){
            textElement.style.fontSize = em(lerp(0,4,lerpVal))
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