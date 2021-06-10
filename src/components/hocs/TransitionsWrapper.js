import React, {useContext } from 'react'
import {useTransition, animated} from 'react-spring'




const TransitionWrapper = (props) => {
    const {children} = {...classes}

    const transitions = useTransition(location, location => location.pathname,{
        from: { opacity: 0, transform: "translate(100%,0"},
        enter: { opacity: 1, transform: "translate(0%,0"},
        leave: { opacity: 0, transform: "translate(-50%,0"},
    })

    return(
        <>
            {transitions.map(({ item, props, key}) =>(
                <animated.div key={key} style={props}>
                    
                </animated.div>
            ))}
            {children}
        </>
    )
}