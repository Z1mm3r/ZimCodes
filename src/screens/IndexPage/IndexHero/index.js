import React from 'react'
import {makeStyles} from '@material-ui/core'

import IndexHero from './IndexHero.js'
import styles from './styles.js'


const useStyle = makeStyles(styles)

const Index =  function(props){
    const {
        lerpVal
    } = {...props}
    const classes = useStyle(props);
    return(
        <IndexHero {...props} classes={classes}/>
    )
}

export default Index