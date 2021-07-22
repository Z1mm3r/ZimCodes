import React from 'react'

import BulletPointList from 'components/BulletPointList'
import {gatsbyTechCopy} from 'constants/textCopys'
import TechCard from '../TechCard'


const Index = (props) =>{
    return(
        <TechCard  full alt={"Gatsby"} path={"/Images/Third-Party-Logos/Gatsby-Logo.svg"}> 
            <BulletPointList
                content={gatsbyTechCopy}
                headerText="Blazing Fast Sites Using"
                headerVariant = "h5"
            />
        </TechCard>
    )
}

export default Index