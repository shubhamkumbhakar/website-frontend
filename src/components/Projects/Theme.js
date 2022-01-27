import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
      contrastText: "#fff"
    },
    secondary: {
      main: grey[900],
      contrastText: "fff"
    }
  }
});