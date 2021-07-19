import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TechCard from '../TechCard'

import {rubyTechCopy} from 'constants/textCopys'
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
                        <TechCard  full alt={"Ruby On Rails"} path={"/Images/Third-Party-Logos/Ruby_On_Rails_Logo.png"}/> 

    return(
        <TechCard  full alt={"Ruby On Rails"} path={"/Images/Third-Party-Logos/Ruby_On_Rails_Logo.png"}> 
            <List component="nav" aria-label="main mailbox folders">
                <Typography variant="h5" >
                    Building Reliable Backends With
                </Typography>
                {renderBulletPoints(rubyTechCopy)}
            </List>       
        </TechCard>
    )
}

export default Index