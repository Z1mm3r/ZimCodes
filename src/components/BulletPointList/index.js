import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Typography } from '@material-ui/core';


const index = (props) =>{

    const {ariaLabel, component, content, headerText, headerVariant} = {...props}

    const renderBullet = (text) => {
        return(
            <ListItem>
                <ListItemIcon>
                    <FiberManualRecordIcon/>
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        )
    }

    const renderBulletPoints = (textArr) => {
        if(textArr && textArr.length > 0)
            return textArr.map(renderBullet)
        return null
    }

    return(
        <List component="nav" aria-label="main mailbox folders">
            <Typography variant={headerVariant ? headerVariant : "h5"}>
                    {headerText}
            </Typography>
                {renderBulletPoints(content)}
        </List>
    )
}

export default index