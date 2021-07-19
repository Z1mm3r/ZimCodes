import React from 'react'

import {makeStyles} from '@material-ui/styles'
import styles from './styles'
import TechCard from './TechCard'


const useStyle = makeStyles(styles)


const Index = (props) => {
    const classes = useStyle()
    return(
        <TechCard classes={classes} {...props}/>
    )
}

export default Index