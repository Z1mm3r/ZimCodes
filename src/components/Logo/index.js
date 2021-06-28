import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import { useTheme } from '@material-ui/core/styles';




const Logo = () => {
    const theme = useTheme()
    return(
        <Card>
            <CardContent>
                <CardMedia
                    component="img"
                    image={process.env.PUBLIC_URL + "/Images/WIP-LOGO.png"}
                    title="Zim Codes"
                />
             </CardContent>
        </Card>
    )
}

export default Logo