import React from 'react'
import {makeStyles} from '@material-ui/core'

import ScrollDownText from './ScrollDownText'
import styles from './styles'

const useStyle = makeStyles(styles)

const Index = (props) =>{
    
    const{
        lerpVal
    } = {...props}
    
    const classes = useStyle();

    return(
        <ScrollDownText classes={classes} {...props}/>
    )
}

export default Index