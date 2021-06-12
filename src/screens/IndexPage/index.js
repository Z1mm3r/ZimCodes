import React from 'react'
import Grid from '@material-ui/core/Grid'

import IndexHero from './IndexHero'
import AbsoluteWrapper from 'components/AbsoluteWrapper'




const IndexPage = (props) => {
    const{
        classes
    } = {...props}

    return(
        <AbsoluteWrapper>
            <Grid  container>
                <Grid item xs={12}>
                    Index Page
                </Grid>
                <Grid item xs={12}>
                    <IndexHero/>
                </Grid>
            </Grid>
        </AbsoluteWrapper>
    )
}

export default IndexPage


