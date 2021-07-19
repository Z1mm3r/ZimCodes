import React from 'react'

import SkillBar from './SkillBar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const Index = () =>{
    return(
        <>
            <Typography variant={"h5"}>
                Technical Skills
            </Typography>
            <Divider/>
            <Typography align={"left"} variant={"h6"}>
               React.js
            </Typography>
            <SkillBar percentage={98}/>
            <Typography align={"left"} variant={"h6"}>
               Javascript
            </Typography>
            <SkillBar percentage={98}/>
            <Typography align={"left"} variant={"h6"}>
               Redux
            </Typography>
            <SkillBar percentage={90}/>
            <Typography align={"left"} variant={"h6"}>
               Ruby
            </Typography>
            <SkillBar percentage={85}/>
            <Typography align={"left"} variant={"h6"}>
               HTML
            </Typography>
            <SkillBar percentage={80}/>
            <Typography align={"left"} variant={"h6"}>
               CSS
            </Typography>
            <SkillBar percentage={80}/>

            <Divider/>
            <br/>
            <Typography variant={"h5"}>
                Soft Skills
            </Typography>
            <Divider/>
            <Typography align={"left"} variant={"h6"}>
               Collaboration
            </Typography>
            <SkillBar percentage={99}/>
            <Typography align={"left"} variant={"h6"}>
               Problem Solving
            </Typography>
            <SkillBar percentage={98}/>
            <Typography align={"left"} variant={"h6"}>
               Adaptability
            </Typography>
            <SkillBar percentage={95}/>

        </>
    )
}

export default Index