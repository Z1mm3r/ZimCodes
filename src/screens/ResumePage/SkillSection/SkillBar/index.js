import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress'
import styles from './styles'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(styles)

const Index = (props) => {

    const{
        percentage
    } = {...props}

    const classes = useStyle()

    return(
        <div>
            <LinearProgress classes={{root: classes.root}} variant="determinate" value={percentage ? percentage : 0}/>
        </div>
    )
}

export default Index