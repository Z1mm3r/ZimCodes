import React, {useContext} from 'react'
import cx from 'classnames'
import {Parallax, ParallaxLayer} from '@react-spring/web'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import LightbulbIcon from '@material-ui/icons/WbIncandescent';

import NavigationSection from './NavigationSection'
import LightingContext from  '../LightingContext'
import {LIGHT,DARK} from 'constants/colors'


const Header = (props) => {
    const {
        styles
    }  = {...props}

    const {lighting,toggleLighting} = useContext(LightingContext);

    return(
        <div className={
            cx({
                [`${styles.lightMode}`]: lighting === LIGHT,
                [`${styles.darkMode}`]: lighting === DARK,  
            })}
        >
            <Grid container  alignItems = "center">
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <NavigationSection lighting={lighting}/>
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


export default  Header