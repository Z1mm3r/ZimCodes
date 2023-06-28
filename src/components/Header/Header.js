import React, { useContext } from 'react'
import cx from 'classnames'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import LightbulbIcon from '@material-ui/icons/WbIncandescent';

import NavigationSection from './NavigationSection'
import LightingContext from '../LightingContext'
import { LIGHT, DARK } from 'constants/colors'

import GradientBorder from 'components/GradientBorder'
import MenuIcon from '@material-ui/icons/Menu'
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const RenderNavMenu = () => {
    return (
        <>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </>
    )
}

const Header = (props) => {
    const {
        styles
    } = { ...props }

    const { lighting, toggleLighting } = useContext(LightingContext);
    const theme = useTheme()

    return (
        <div className={
            cx({
                [`${styles.lightMode}`]: lighting === LIGHT,
                [`${styles.darkMode}`]: lighting === DARK,
            })}
        >
            <Grid container alignItems="center">
                <Grid item xs={3}>
                    {useMediaQuery(theme.breakpoints.down('md')) ? RenderNavMenu() : null}
                </Grid>
                <Grid item xs={6}>
                    <NavigationSection lighting={lighting} />
                </Grid>
                <Grid item xs={3}>
                    <IconButton size="medium" onClick={toggleLighting}>
                        <LightbulbIcon
                            className={
                                cx({
                                    [`${styles.lightModeLightbulb}`]: lighting === LIGHT,
                                    [`${styles.darkModeLightbulb}`]: lighting === DARK,
                                })}
                            fontSize="large"
                        />
                    </IconButton>
                </Grid>
            </Grid>

        </div>
    )
}


export default Header