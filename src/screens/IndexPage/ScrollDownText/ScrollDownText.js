import React, {useEffect, useState} from 'react'

const ScrollDownText = (props) =>{
    
    const{
        classes,
        lerpVal
    } = {...props}

    const [textElement, setTextElement] = useState(null)

    useEffect(()=>{
        setTextElement(document.getElementById("scroll-down-text"))
    },[])
    
    return(
        <div id={'scroll-down-text'} className={classes.mainText}>
            Scroll Down
        </div>
    )
}

export default ScrollDownText