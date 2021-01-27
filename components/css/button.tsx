
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    width: '100%',
    color: 'white',
    border: '1px solid white',
    '&:disabled': {
      color: '#8b939a',
      border: '1px solid #8b939a'
    },
    '&:hover': {
      borderColor: '#8B939A',
      boxShadow: '0 0 10px #8B939A'
    },
    '&.selected': {
      color: '#000',
      backgroundColor: 'white'
    }
  },
})(Button);

export default StyledButton;