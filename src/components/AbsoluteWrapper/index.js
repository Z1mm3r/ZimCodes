import React from 'react'
import {makeStyles} from '@material-ui/core'

const styles = {
    wrapper:{
        position: "absolute",
        width: "100%"
    }
}

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