import React from 'react'

import Typography from '@material-ui/core/Typography'

const Index = () =>{
    return(
        <div>
            <Typography variant={"h4"}>
                Casey Zimmer
            </Typography>
            <Typography variant={"h5"}>
                Web Developer
            </Typography>
            <Typography variant={"h6"}>
                Location
            </Typography>
            <Typography variant={"body2"}>
                Newark, NJ
            </Typography>
            <Typography variant={"h6"}>
                Email
            </Typography>
            <Typography variant={"body2"}>
                czimmerdev@gmail.com
            </Typography>
            <Typography variant={"h6"}>
                GitHub
            </Typography>
            <Typography variant={"body2"}>
                <a href={"https://github.com/Z1mm3r"}>Z1mm3r </a>           
            </Typography>
        </div>
    )
}

export default Index