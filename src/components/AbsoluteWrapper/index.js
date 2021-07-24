import React from 'react'
import {makeStyles} from '@material-ui/core'
import {percent} from 'utils/utils'

const styles = {
    wrapper:{
        position: "absolute",
        width: percent(85),
        margin: `${percent(1.5)} ${percent(7.5)}`
    }
}

// old margin margin: `${percent(0)} ${percent(7.5)}`

const useStyle = makeStyles(styles)

const Index = (props) => {
    const classes = useStyle();
    const { children } = {...props}
    return(
        <div className={classes.wrapper} >
            {children}
        </div>
    )
}

export default Index