import React from 'react'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import JobDescription from './JobDescription'
import {kindersmileJobCopy, freelanceJobCopy, ramapoJobCopy, totalRecallJobCopy, vydiaJobCopy} from 'constants/textCopys'

const WorkSection = (props) =>{
    return(
        <div>
            <Typography variant={"h4"}>
                Employment History
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <JobDescription
                jobTitle={freelanceJobCopy.title}
                employmentDate={freelanceJobCopy.date}
                jobDetails={freelanceJobCopy.details}
                jobLocation={freelanceJobCopy.location}
            />
            <br/>
            <JobDescription 
                jobTitle={vydiaJobCopy.title}
                employmentDate={vydiaJobCopy.date}
                jobDetails={vydiaJobCopy.details}
                jobLocation={vydiaJobCopy.location}
            />
            <br/>
            <JobDescription 
                jobTitle={totalRecallJobCopy.title}
                employmentDate={totalRecallJobCopy.date}
                jobDetails={totalRecallJobCopy.details}
                jobLocation={totalRecallJobCopy.location}
            />
            <br/>
            <JobDescription
                jobTitle={kindersmileJobCopy.title}
                employmentDate={kindersmileJobCopy.date}
                jobDetails={kindersmileJobCopy.details}
                jobLocation={kindersmileJobCopy.location}
            />
            <JobDescription
                jobTitle={ramapoJobCopy.title}
                employmentDate={ramapoJobCopy.date}
                jobDetails={ramapoJobCopy.details}
                jobLocation={ramapoJobCopy.location}
            />
        </div>
    )
}

export default WorkSection