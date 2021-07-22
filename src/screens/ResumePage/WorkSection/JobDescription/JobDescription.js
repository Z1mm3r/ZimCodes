import Grid from '@material-ui/core/Grid'
import React from 'react'

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
            <Grid item align="left" xs={12}>
                {jobLocation}
            </Grid>
            <Grid item align="left" xs = {6}>
                {jobTitle ? jobTitle : null}
            </Grid>
            <Grid item align="right" xs = {6}>
                {employmentDate ? employmentDate : null}
            </Grid>
            <Grid item xs = {12}>
                <BulletPointList content={jobDetails ? jobDetails : null}/>
            </Grid>
        </Grid>
    )
}

export default JobDescription