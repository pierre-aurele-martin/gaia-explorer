import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  container: {
    paddingTop: '15px'
  },
  typography: {
    color: '#FFF'
  }
});

interface DataSliderProps {
  defaultValue: number;
  step: number;
  min: number;
  max: number;
}

const valuetext = (value: number) => {
  return `${value}`;
}

const DataSlider = (props: DataSliderProps) => {
  const {defaultValue, step, min, max} = props;
  const classes = useStyles();

  const [value, setValue] = useState<number>(defaultValue);

  return (
    <div className={classes.root}>
      <Container className={classes.container} fixed>
        <Typography className={classes.typography} id="continuous-slider" gutterBottom>
          {`Elements displayed: ${value}`}
        </Typography>
        <Slider
            defaultValue={defaultValue}
            getAriaValueText={valuetext}
            aria-labelledby="number-elements-to-display"
            step={step}
            marks
            min={min}
            max={max}
            valueLabelDisplay="auto"
            onChangeCommitted={(_, val: number) => setValue(val)}
          />
      </Container>
    </div>
  );
}

export default DataSlider;