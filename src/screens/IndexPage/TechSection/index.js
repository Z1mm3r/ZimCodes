import React from 'react'
import {makeStyles} from '@material-ui/core'

import TechSection from './TechSection.js'
import styles from './styles.js'


const useStyle = makeStyles(styles)

const Index =  function(props){
    const classes = useStyle(props);
    return(
        <TechSection classes={classes}/>
    )
}

export default Index