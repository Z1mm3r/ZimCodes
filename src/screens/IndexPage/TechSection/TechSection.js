import React from 'react'
import Grid from '@material-ui/core/Grid'

import Logo from 'components/Logo'


const TechSection = () => {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Grid  container>
                    <Grid item xs={3}>
                        <Logo  full alt={"C-Sharp"} path={"/Images/Third-Party-Logos/C-Sharp-Badge.png"}/> 
                    </Grid>
                    <Grid item xs={3}>
                        <Logo  full alt={"React"} path={"/Images/Third-Party-Logos/ReactLogo.png"}/> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default TechSection