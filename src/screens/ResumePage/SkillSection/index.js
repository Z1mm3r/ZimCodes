import React from 'react'

import SkillBar from './SkillBar'
import Divider from '@material-ui/core/Divider'

const Index = () =>{
    return(
        <>
            Technical Skills
            <Divider/>
            React.js
            <SkillBar percentage={98}/>
            Javascript
            <SkillBar percentage={94}/>
            Redux
            <SkillBar percentage={90}/>
            Ruby
            <SkillBar percentage={85}/>
            HTML
            <SkillBar percentage={80}/>
            CSS
            <SkillBar percentage={80}/>

            <Divider/>
            <br/>
            Soft Skills
            <Divider/>
            Collaboration
            <SkillBar percentage={99}/>
            Problem Solving
            <SkillBar percentage={93}/>
            Adaptability
            <SkillBar percentage={90}/>

        </>
    )
}

export default Index