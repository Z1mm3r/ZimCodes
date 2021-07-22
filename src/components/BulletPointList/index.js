import React from 'react'
import cx from 'classnames'
import {makeStyles} from '@material-ui/core/styles'
import styles from './styles'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles)

const Index = (props) =>{
    /*
        Additional indented lines...
        sent in as array, line before it will  be its parent
        ["Parent Text",["mini bullet points", "here"]]
    */

    const classes = useStyles()

    const {ariaLabel, component, content, headerText, headerVariant, bulletVariant, nestedBulletVariant} = {...props}

    const renderNestedBullet = (text) =>{
        return(
            <>
                <ListItem className = {cx([`${classes.indentedList}`])}>
                    <ListItemIcon>
                        <FiberManualRecordOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={text} primaryTypographyProps = {nestedBulletVariant ? {variant: nestedBulletVariant} : null} />
                </ListItem>
            </>
        )
    }

    const renderBullet = (text) => {
        return(
            <>
            {Array.isArray(text) ?
                text.map(renderNestedBullet)
            : 
                <ListItem>
                    <ListItemIcon>
                            <FiberManualRecordIcon/>
                    </ListItemIcon>
                    <ListItemText primary={text} primaryTypographyProps={bulletVariant ? {variant: bulletVariant} : null}/>
                </ListItem>}
            </>
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

export default Index