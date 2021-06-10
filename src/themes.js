import {createMuiTheme} from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import yellow from '@material-ui/core/colors/yellow'
import lightBlue from  '@material-ui/core/colors/lightBlue'

export const darkTheme = createMuiTheme({
    palette: {
      primary:{
        main: grey[50],
      },
      secondary:{
        main: yellow[500],
      }
    }
  });

export const lightTheme = createMuiTheme({
    palette: {
      primary:{
        main: grey[900],
      },
      secondary:{
        main: lightBlue[500],
      }
    }
  });

  export const darkThemeTest = {
    palette: {
      primary:{
        main: grey[50],
      },
      secondary:{
        main: yellow[500],
      }
    }
  };

export const lightThemeTest = {
    palette: {
      primary:{
        main: grey[900],
      },
      secondary:{
        main: lightBlue[500],
      }
    }
  };

  

