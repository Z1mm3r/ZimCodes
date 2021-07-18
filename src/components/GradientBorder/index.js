import React from 'react'
import {makeStyles} from '@material-ui/core'
import './test.scss'

import styles from './styles.js'


const useStyle = makeStyles(styles)



const Index = (props) => {
    const classes = useStyle();
    return(
        <div className={'border'}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Index