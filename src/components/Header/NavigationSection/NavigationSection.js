import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useTheme } from '@material-ui/core/styles';



const NavigationSection = (props) => {

    const {classes,lighting} = {...props}

    const theme = useTheme()

    console.log('render')
    console.log(theme.palette.primary.main)

    const renderButtons = () =>{
        return(
            <>
                <Grid item xs={3}>
                    <Button color = "secondary"  variant = "outlined">
                        Home
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="primary" variant = "outlined">
                        About Me
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="primary" variant = "outlined">
                        CV
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="primary" variant = "outlined">
                        About This Site
                    </Button>
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