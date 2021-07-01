import React from 'react'
import Grid from '@material-ui/core/Grid'

import { animated, config,useSpring,useTransition } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import AbsoluteWrapper from 'components/AbsoluteWrapper'
import IndexHero from './IndexHero'
import TechSection from './TechSection'


/* TODO ADD PARALAX -> 
      Fade in with  "scroll down for more" 
                              ||
                             \||/
                              \/
      Scroll down fades out when going down
      Big logos come in from sides
      Small logos come in from below
*/


const IndexPage = (props) => {
    const{
        classes
    } = {...props}

    return(
        <AbsoluteWrapper>
            <Grid  container>
                <Grid item xs={12}>
                    <IndexHero/>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        Scroll Down
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TechSection/>
                </Grid>
            </Grid>
        </AbsoluteWrapper>
    )
}

export default IndexPage


