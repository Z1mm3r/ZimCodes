import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import cx from 'classnames'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles';

import styles from './styles.js'

const useStyle = makeStyles(styles)

const Logo = (props) => {
    const {full, path} = {...props}
    const classes = useStyle()
    return(
        <Card className={cx({[`${classes.fullHeight}`] : !!full})}>
            <Grid  align= "center" container direction="column" justify = "center" spacing={0} className={cx({[`${classes.fullHeight}`] : !!full})}>
                <Grid items>
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
    )
}

export default Logo