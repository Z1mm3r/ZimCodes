import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {Link, useLocation} from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';

import NavButton from 'components/NavButton'



const NavigationSection = (props) => {

    const {classes,lighting} = {...props}

    const currentPath = useLocation().pathname

    const theme = useTheme()

    const renderButtons = () =>{
        return(
            <>
                <Grid item xs={3}>
                    <NavButton path="/" label={"Home"}/>
                </Grid>
                <Grid item xs={3}>
                    <NavButton path="/about" label={"About"}/>
                </Grid>
                <Grid item xs={3}>
                    <Button color="primary" variant = "outlined">
                        CV
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <NavButton path="/site" label={"About Site"}/>
                </Grid>
            </>
        )
    }
    
    return(
            <Grid container>
                {renderButtons()}
            </Grid>
    )
}

export default NavigationSection