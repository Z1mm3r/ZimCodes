import React from 'react'

import BulletPointList from 'components/BulletPointList'
import {reactTechCopy} from 'constants/textCopys'
import TechCard from '../TechCard'


const Index = (props) =>{
    return(
        <TechCard full alt={"React"} path={"/Images/Third-Party-Logos/ReactLogo.png"}>
            <BulletPointList
                content={reactTechCopy}
                headerText="Profecient With"
                headerVariant = "h5"
            />
        </TechCard>
    )
}

export default Index