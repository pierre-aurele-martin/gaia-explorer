import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { ListItem, ListItemIcon, ListItemText, Tooltip, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import columns from '../../utils/dataColumn';

const useStyles = makeStyles({
});

export interface SimpleDialogProps {
  open: boolean;
  data: any;
  onClose: (value: string) => void;
}

const PlanetDialog = (props: SimpleDialogProps) => {
  // @ts-ignore
  const classes = useStyles();
  const { onClose, open, data } = props;

  const handleClose = () => {
    onClose(null);
  };

  return (
    <Dialog hideBackdrop={true} onClose={handleClose} aria-labelledby="planet-dialog-infos" open={open}>
      <DialogTitle id="simple-dialog-title">TITLE: {data?.id}</DialogTitle>
      <Typography variant="h4" component="h2" gutterBottom>
        h1. Heading
      </Typography>
      <List dense>
        {JSON.stringify(data)}
        {columns.map((v) => {
            return <ListItem>
              <ListItemText primary={v} secondary={data && data[v]}/>
            </ListItem>
          })} 
      </List>
    </Dialog>
  );
}

export default PlanetDialog;