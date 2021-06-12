import { makeStyles } from  '@material-ui/styles'


//TODO useless for now?

export default function useStyles(styles,name){
    return makeStyles(theme => ({...styles}),{name})()
}