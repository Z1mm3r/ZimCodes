import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Typography } from '@material-ui/core';


import BulletPointList from 'components/BulletPointList'

const JobDescription = (props) => {
    const{
        jobTitle,
        employmentDate,
        jobDetails,
        jobLocation,
    } = {...props}
    return(
        <Grid container>
            {jobLocation ? 
                <Grid item align="left" xs={12}>
                    <Typography variant="h6">
                        {jobLocation}
                    </Typography>
                </Grid>
                : null
            }
            <Grid item align="left" xs = {6}>
                <Typography variant="h6">
                    {jobTitle ? jobTitle : null}
                </Typography>
            </Grid>
            <Grid item align="right" xs = {6}>
                <Typography variant="h6">
                    {employmentDate ? employmentDate : null}
                </Typography>
            </Grid>
            <Grid item xs = {12}>
                <BulletPointList content={jobDetails ? jobDetails : null}/>
            </Grid>
        </Grid>
    )
}

export default JobDescription