import React from 'react'

import Typography from '@material-ui/core/Typography'

import BulletPointList from 'components/BulletPointList'

const WorkSection = (props) =>{

    const testContent=[
        "Parent",
        ["child1","child2","child3"]
    ]

    return(
        <div>
            <Typography variant="h4">
                Employment History
                <BulletPointList content={testContent}/>
            </Typography>
        </div>
    )
}

export default WorkSection