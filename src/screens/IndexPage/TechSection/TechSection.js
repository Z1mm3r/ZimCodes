import React from 'react'
import Grid from '@material-ui/core/Grid'

import Logo from 'components/Logo'


const TechSection = () => {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Grid  container justify="space-around">
                    <Grid item xs={4}>
                        <Logo  full alt={"React"} path={"/Images/Third-Party-Logos/ReactLogo.png"}/> 
                    </Grid>
                    <Grid item xs={4}>
                        <Logo  full alt={"Ruby On Rails"} path={"/Images/Third-Party-Logos/Ruby_On_Rails_Logo.png"}/> 
                    </Grid>
                </Grid>
                <Grid  container justify="space-around">
                    <Grid item xs={3}>
                        <Logo  full alt={"Gats"} path={"/Images/Third-Party-Logos/Gatsby-Logo.svg"}/> 
                    </Grid>
                    <Grid item xs={3}>
                        <Logo  full alt={"C-Sharp"} path={"/Images/Third-Party-Logos/C-Sharp-Badge.png"}/> 
                    </Grid>
                    <Grid item xs={3}>
                        <Logo  full alt={"C-Sharp"} path={"/Images/Third-Party-Logos/unity-masterbrand-black.png"}/> 
                    </Grid>     
                </Grid>
            </Grid>
        </Grid>

    )
}

export default TechSection