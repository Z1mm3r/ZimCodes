import React from 'react'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Dialog'
import {makeStyles} from '@material-ui/core/styles'

import PersonalSection from '../PersonalSection'
import SkillSection from  '../SkillSection'
import styles from './styles'

const useStyles = makeStyles(styles)

const Index = (props) => {

    const classes = useStyles()

    console.log(classes.container)

    return(
        <div className={classes.container}>
            <PersonalSection/>
            <Divider/>
            <SkillSection/>        
        </div>

    )
}

export default Index