import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';

import NavButton from 'components/NavButton'
import GradientBorder from 'components/GradientBorder'
import Logo from 'components/Logo';
import { useMediaQuery } from '@material-ui/core';
import NavMenu from 'components/NavMenu/NavMenu';



const NavigationSection = (props) => {

    const { classes, lighting } = { ...props }

    const currentPath = useLocation().pathname

    const theme = useTheme()



    const renderButtons = () => {
        return (
            <>
                <Grid item xs={2}>
                    <NavButton path="/" label={"Home"} />
                </Grid>
                <Grid item xs={2}>
                    <NavButton path="/about" label={"About"} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                    <GradientBorder>
                        <Logo />
                    </GradientBorder>
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={2}>
                    <NavButton path="/resume" label={"Resume"} />
                </Grid>
                <Grid item xs={2}>
                    <NavButton path="/site" label={"About Site"} />
                </Grid>
            </>
        )
    }

    const renderSimpleButtons = () => {
        return (
            <>
                <Grid item xs={3}>
                </Grid>

                <Grid item xs={5}>
                    <GradientBorder>
                        <Logo />
                    </GradientBorder>
                </Grid>
            </>
        )
    }

    return (
        <Grid container alignItems="center">
            {useMediaQuery(theme.breakpoints.down('md')) ? renderSimpleButtons() : renderButtons()}
        </Grid>
    )
}

export default NavigationSection