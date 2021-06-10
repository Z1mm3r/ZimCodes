import React from 'react'
import Grid from '@material-ui/core/Grid'

import IndexHero from './IndexHero'



const IndexPage = (props) => {
    const{
        classes
    } = {...props}

    return(
        <Grid  container>
            <Grid item xs={12}>
                Index Page
            </Grid>
            <Grid item xs={12}>
                <IndexHero/>
            </Grid>
        </Grid>
    )
}

export default IndexPage


