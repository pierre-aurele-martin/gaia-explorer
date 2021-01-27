import { FormControlLabel, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connectToggleRefinement } from 'react-instantsearch-dom';

const useStyles = makeStyles(() => (
  {
    root: {
      width: '100%',
      '& .MuiFormControlLabel-label': {
        color: 'white'
      },
      '& .MuiSwitch-colorSecondary.Mui-checked': {
        color: '#8b939a'
      },
      '& .MuiSwitch-track': {
        border: '1px solid white'
      },
      '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#8b939a'
      }
    }
  }
));

const Toggle = ({ label, currentRefinement, count, refine }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={currentRefinement}
        onChange={(e) => refine(e.target.checked)} />}
        label={`${label} (${count.checked || 0} - ${count.unchecked || 0})`}
      />
    </div>
  )
};

const CustomToggle = connectToggleRefinement(Toggle);

export default CustomToggle;