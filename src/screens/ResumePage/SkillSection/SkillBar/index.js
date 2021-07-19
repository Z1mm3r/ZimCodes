import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress'

const Index = (props) => {

    const{
        percentage
    } = {...props}

    return(
        <div>
            <LinearProgress variant="determinate" value={percentage ? percentage : 0}/>
        </div>
    )
}

export default Index