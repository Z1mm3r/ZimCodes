import react from 'react'
//import useStyles from '../../../utils/useStyles.js'
import {makeStyles} from '@material-ui/core'

import IndexHero from './IndexHero.js'
import styles from './styles.js'


const useStyle = makeStyles(styles)

const Index =  function(props){
    const classes = useStyle(props);
    return(
        <IndexHero classes={classes}/>
    )
}

export default Index