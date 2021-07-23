import React from 'react'
import {makeStyles} from '@material-ui/styles'

import WorkSection from './WorkSection'
import styles from './styles'

const useStyles = makeStyles(styles)

const Index = (props) => {
    const classes = useStyles()
    return(
        <WorkSection classes={classes} {...props}/>
    )
}

export default Index