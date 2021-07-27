import React from 'react'
import Button from '@material-ui/core/Button'
import {Link, useRouteMatch } from 'react-router-dom' 


const NavButton = (props) => {

    const { path, label } = {...props}
    const match = useRouteMatch(path)
    const RenderButton = () => {
        return  match && match.isExact ? (
            <Button color = "secondary"  variant = "outlined">
                { label }
            </Button>
        )
        : (
            <Link data-testid="navButtonLink" to={path}>
                <Button color="primary" variant = "outlined">
                    { label }
                </Button>
            </Link>
        )
    }

    return(
        <>
            {RenderButton()}
        </>
    )
}

export default  NavButton