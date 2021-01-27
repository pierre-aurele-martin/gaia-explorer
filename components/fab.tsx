import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      bottom: 0, right: 0,
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

interface ActionButtonsProps {
  reset: () => void;
  toggleDrawer: any;
}

const ActionButtons = (props: ActionButtonsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab variant="extended" onClick={(_) => props.toggleDrawer()}>
        <SearchIcon className={classes.extendedIcon} />
        Search
      </Fab>
    </div>
  )
}

export default ActionButtons;