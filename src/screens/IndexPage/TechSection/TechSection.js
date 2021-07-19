import React from 'react'
import Grid from '@material-ui/core/Grid'

import Logo from 'components/Logo'
import TechCard from './TechCard'
import  {reactCopy} from 'constants/textCopys'
import GatsbyCard from './GatsbyCard'
import ReactCard from './ReactCard'
import RubyCard from './RubyCard'



const TechSection = () => {

    const ReactContent={

    }

    return(
        <Grid container>
            <Grid item xs={12}>
                <Grid  container justify="space-around">
                    <Grid item xs={3}>
                        <ReactCard/>
                    </Grid>
                    <Grid item xs={3}>
                        <RubyCard/>
                    </Grid>
                    <Grid item xs={3}>
                        <GatsbyCard/>
                    </Grid>
                </Grid>
                {/* <Grid  container justify="space-around">
                    
                    <Grid item xs={3}>
                        <Logo  full alt={"C-Sharp"} path={"/Images/Third-Party-Logos/C-Sharp-Badge.png"}/> 
                    </Grid>
                    <Grid item xs={3}>
                        <Logo  full alt={"C-Sharp"} path={"/Images/Third-Party-Logos/unity-masterbrand-black.png"}/> 
                    </Grid>     
                </Grid> */}
            </Grid>
        </Grid>

    )
}

export default TechSection