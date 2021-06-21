import React from 'react'
import {makeStyles} from '@material-ui/core'

import styles from './styles.js'


const useStyle = makeStyles(styles)



const Index = (props) => {
    const classes = useStyle();
    console.log(classes)
    return(
        <div className={classes.div}>
            <div>
                hello
            </div>
        </div>
    )
}

export default Index