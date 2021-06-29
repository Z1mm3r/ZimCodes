import React from 'react'
import Grid from '@material-ui/core/Grid'

import AbsoluteWrapper from 'components/AbsoluteWrapper'
import IndexHero from './IndexHero'
import TechSection from './TechSection'

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
                <Grid item xs={12}>
                    <TechSection/>
                </Grid>
            </Grid>
        </AbsoluteWrapper>
    )
}

export default IndexPage


