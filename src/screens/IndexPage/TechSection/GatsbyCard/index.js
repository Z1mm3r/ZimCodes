import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TechCard from '../TechCard'

import {gatsbyTechCopy} from 'constants/textCopys'
import { Typography } from '@material-ui/core';

const Index = (props) =>{

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
        <TechCard  full alt={"Gatsby"} path={"/Images/Third-Party-Logos/Gatsby-Logo.svg"}> 
        <List component="nav" aria-label="main mailbox folders">
                <Typography variant="h5" >
                    Blazing Fast Sites Using
                </Typography>
                {renderBulletPoints(gatsbyTechCopy)}
            </List>       
        </TechCard>
    )
}

export default Index