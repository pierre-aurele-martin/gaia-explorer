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
    },
    secondary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    }
  }
});

export default theme;
