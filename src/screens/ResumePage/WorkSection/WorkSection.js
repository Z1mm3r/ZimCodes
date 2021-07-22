import React from 'react'

import Typography from '@material-ui/core/Typography'

import BulletPointList from 'components/BulletPointList'
import JobDescription from './JobDescription'

import {vydiaJobCopy} from 'constants/textCopys'

const WorkSection = (props) =>{
    return(
        <div>
            <JobDescription 
                jobTitle={vydiaJobCopy.title}
                employmentDate={vydiaJobCopy.date}
                jobDetails={vydiaJobCopy.details}
                jobLocation={vydiaJobCopy.location}
            />
        </div>
    )
}

export default WorkSection