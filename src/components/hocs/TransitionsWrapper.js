import React, {useContext } from 'react'
import {useTransition, animated} from 'react-spring'
import { Switch, Route, useLocation } from 'react-router-dom'




const TransitionWrapper = (props) => {
    // const {children} = {...classes}
    // const  [location,setLocation] =  useState(useLocation());

    // if()


    const transitions = useTransition(location, location => location.pathname,{
        from: { opacity: 0, transform: "translate(100%,0"},
        enter: { opacity: 1, transform: "translate(0%,0"},
        leave: { opacity: 0, transform: "translate(-50%,0"},
    })

    return(
        <>
            {transitions.map(({ item, props, key}) =>(
                <animated.div key={key} style={props}>
                    {children}
                </animated.div>
            ))}
            {children}
        </>
    )
}