import react, {useContext} from 'react'
import cx from 'classnames'


import IconButton from '@material-ui/core/IconButton'
import LightbulbIcon from '@material-ui/icons/WbIncandescent';
import LightingContext from  '../LightingContext'


const Header = (props) => {
    const {
        styles
    }  = {...props}

    const {lighting,toggleLighting} = useContext(LightingContext);

    return(
        <div className={
            cx({
                [`${styles.lightMode}`]: lighting === "light",
                [`${styles.darkMode}`]: lighting === "dark",  
            })}
        >
            Header
            <IconButton>
                <LightbulbIcon 
                    className={
                        cx({
                            [`${styles.lightModeLightbulb}`]: lighting === "light",
                            [`${styles.darkModeLightbulb}`]: lighting === "dark",  
                        })}
                    onClick={toggleLighting}
                />
            </IconButton>
        </div>
    )
}


export default  Header