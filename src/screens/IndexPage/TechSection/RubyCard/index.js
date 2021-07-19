import React from 'react'

import BulletPointList from 'components/BulletPointList'
import {rubyTechCopy} from 'constants/textCopys'
import TechCard from '../TechCard'

const Index = (props) =>{
    return(
        <TechCard  full alt={"Ruby On Rails"} path={"/Images/Third-Party-Logos/Ruby_On_Rails_Logo.png"}> 
            <BulletPointList
                content={rubyTechCopy}
                headerText="Building Reliable Backends With"
                headerVariant = "h5"
            />
        </TechCard>
    )
}

export default Index