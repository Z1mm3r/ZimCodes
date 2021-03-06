import React from 'react'
import {makeStyles} from '@material-ui/core'

import Header from './Header.js'
import styles from './styles.js'

const useStyle = makeStyles(styles)

const Index =  function(props){
    const classes = useStyle(props);

    return(
        <Header styles = {classes}/>
    )
}

export default Index