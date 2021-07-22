import React from 'react'

import AbsoluteWrapper from 'components/AbsoluteWrapper'
import SkillsAndPersonal from './SkillsAndPersonal'
import WorkSection from './WorkSection'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Index = () =>{
        return(
            <AbsoluteWrapper>
                <Paper>
                    <Grid  container>
                        <Grid item xs={3}>
                            <SkillsAndPersonal/>
                        </Grid>
                        <Grid item align="center" xs={1}>
                            <Divider orientation="vertical" />
                        </Grid>

                        <Grid item xs={7}>
                            <WorkSection/>
                        </Grid>
                    </Grid>
                </Paper>
            </AbsoluteWrapper>
            
        )
    }

export default Index