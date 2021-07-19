import React from 'react'

import AbsoluteWrapper from 'components/AbsoluteWrapper'
import PersonalSection from './PersonalSection'
import SkillSection from './SkillSection'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Index = () =>{

    /*
        TODO: 
            Make Skillbar Lines thicker
            Stylize SKills Section, Backgrounds etc


    */
        return(
            <AbsoluteWrapper>
                <Paper>
                    <Grid  container>
                        <Grid item xs={3}>
                            <PersonalSection/>
                            <Divider/>
                            <SkillSection/>        
                        </Grid>
                        <Grid item align="center" xs={1}>
                            <Divider orientation="vertical" />
                        </Grid>

                        <Grid item xs={7}>
                            scammin
                        </Grid>
                    </Grid>
                </Paper>
            </AbsoluteWrapper>
            
        )
    }

export default Index