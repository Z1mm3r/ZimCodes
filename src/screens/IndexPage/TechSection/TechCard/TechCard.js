import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import cx from 'classnames'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles';

import Logo from 'components/Logo'

const TechCard = (props) =>{

    const{alt, children, classes, full, path} = {...props}


    /* TODO HOld this for now
    <Card className={cx({[`${classes.fullHeight}`] : !!full})}>
            <Grid  align= "center" container direction="column" justify = "center" spacing={0} className={cx({[`${classes.fullHeight}`] : !!full})}>
                <Grid item>
                    <CardContent>
                        <div>
                            <CardMedia
                                component="img"
                                image={process.env.PUBLIC_URL +  (path ? path : "/Images/WIP-LOGO.png")}
                                title="Zim Codes"
                            />
                        </div>
                    </CardContent>
                </Grid>
    
             </Grid>
        </Card>

*/

    return(
        <Card className={cx({[`${classes.fullHeight}`] : !!full})}>
            <Grid  align= "center" container direction="column" justify = "center" spacing={0} className={cx({[`${classes.fullHeight}`] : !!full})}>
                <Grid item>
                    <CardContent>
                        <Logo  full alt={alt ? alt : "Error Loading Image"} path={path ? path : null}/>
                        {children}
                    </CardContent>
                </Grid>
            </Grid>
        </Card> 
    )
}

export default TechCard