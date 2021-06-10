import React from 'react'
import {makeStyles} from '@material-ui/core'

import NavigationSection from './NavigationSection'
import styles from './styles.js'

const useStyle = makeStyles(styles)


const Index = (props) => {
    const classes = useStyle(props);
    return(
        <NavigationSection props={props} classes={classes}/>
    )
}

export default Index