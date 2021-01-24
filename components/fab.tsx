import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import MenuIcon from '@material-ui/icons/Menu';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';
import RestoreIcon from '@material-ui/icons/Restore';

// TODO: import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: 'translateZ(0px)',
      position: 'absolute',
      bottom: 0, right: 0
    },
    wrapper: {
      position: 'relative',
      marginTop: theme.spacing(3),
      height: 380,
    },
    radioGroup: {
      margin: theme.spacing(1, 0),
    },
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  }),
);

interface ActionButtonsProps {
  reset: () => void;
}

const ActionButtons = (props: ActionButtonsProps) => {
  const actions = [
    { icon: <SearchIcon />, name: 'Search' },
    { icon: <FilterListIcon />, name: 'Filters' },
    { icon: <InfoIcon />, name: 'About' },
    { icon: <RestoreIcon />, name: 'Reset', onClick: () => props.reset()},
  ];
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={'left'}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                action.onClick();
                handleClose()
              }}
              tooltipPlacement={'top'}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}

export default ActionButtons;