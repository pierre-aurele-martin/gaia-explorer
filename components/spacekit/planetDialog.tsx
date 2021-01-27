import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Grid, Link, Paper, Typography } from '@material-ui/core';

import columns from '../../utils/dataColumn';
import { ISpaceData } from '../../interfaces/space';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      minHeight: '100px'
    },

  }),
);

export interface SimpleDialogProps {
  open: boolean;
  data: ISpaceData;
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
      <DialogTitle id="simple-dialog-title">{data?.source_extended_id}</DialogTitle>      
      <div className={classes.container}>
        <Typography variant="h6" component="h2" gutterBottom>
          <Link href="//gea.esac.esa.int/archive/documentation/GEDR3/Gaia_archive/chap_datamodel/sec_dm_simulation_tables/ssec_dm_gaia_universe_model.html" target="_blank" color="secondary">
            Gaia GEDR3 Datamodel documentation
          </Link>
        </Typography>
        <Grid container spacing={2} >
          {columns.map((v) => {
              return (
                <Grid key={v} item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                      {v}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {data && data[v] || ''}
                    </Typography>
                  </Paper>
                </Grid>
              )
            })} 
        </Grid>
      </div>
      </Dialog>
  );
}

export default PlanetDialog;