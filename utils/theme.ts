import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      default: '#000'
    },
    primary: {
      light: '#666',
      main: '#FFF',
      dark: '#333',
      contrastText: '#666',
    }
  }
});

export default theme;
