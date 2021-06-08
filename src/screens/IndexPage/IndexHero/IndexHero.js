import react, {useContext} from 'react'
import cx from 'classnames'

import LightingContext from  'components/LightingContext'


const IndexHero =  (props) => {
    const {
        classes,
    } = {...props}

    const {lighting} = useContext(LightingContext);

    return (
        <div 
        className={
            cx(
                classes.heroContainer,
                lighting === "light" ?  classes.lightContainer : classes.darkContainer,)
        }>
            <div className= {
                cx(
                    classes.heroText
                )
            }>
                Zim Codes  
            </div>
        </div>
    )
}

export default IndexHero