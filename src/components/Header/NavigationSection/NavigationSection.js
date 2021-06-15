import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';



const NavigationSection = (props) => {

    const {classes,lighting} = {...props}

    const theme = useTheme()

    const renderButtons = () =>{
        return(
            <>
                <Grid item xs={3}>
                    <Link to="/">
                        <Button color = "secondary"  variant = "outlined">
                                Home
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/about">
                        <Button color="primary" variant = "outlined">
                                About
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Button color="primary" variant = "outlined">
                        CV
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/site">
                        <Button color="primary" variant = "outlined">
                                About This Site
                        </Button>
                    </Link>
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