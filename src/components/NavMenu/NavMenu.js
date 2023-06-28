import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, useRouteMatch } from 'react-router-dom'

const NavMenu = (props) => {

    const { path, label } = { ...props }
    const match = useRouteMatch(path)
    const RenderButton = () => {
        return (
            <>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </>
        )
    }

    return (
        <>
            {RenderButton()}
        </>
    )
}

export default NavMenu