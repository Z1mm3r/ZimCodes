import {createMuiTheme} from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import yellow from '@material-ui/core/colors/yellow'
import lightBlue from  '@material-ui/core/colors/lightBlue'

//TODO see notes on APP.js
// export const darkTheme = createMuiTheme({
//     palette: {
//       primary:{
//         main: grey[50],
//       },
//       secondary:{
//         main: yellow[500],
//       }
//     }
//   });

// export const lightTheme = createMuiTheme({
//     palette: {
//       primary:{
//         main: grey[900],
//       },
//       secondary:{
//         main: lightBlue[500],
//       }
//     }
//   });

  export const darkTheme = {
    palette: {
      primary:{
        main: grey[50],
      },
      secondary:{
        main: lightBlue[200],
      },
      background:{
        default:"#000000"
      }
    }
  };

export const lightTheme = {
    palette: {
      primary:{
        main: grey[900],
      },
      secondary:{
        main: lightBlue[500],
      },
      background:{
        default:"#FFFFFF",
      }
    }
  };

  

