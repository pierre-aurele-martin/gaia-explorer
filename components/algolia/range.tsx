import { Slider, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { connectRange } from 'react-instantsearch-dom';


const RangeSlider = ({ attribute, min, max, currentRefinement, canRefine, refine }) => {

  const [amp, setAmplifier] = useState<number>(1);
  const [title, setTitle] = useState<string>('TOCHANGE');
  const [value, setValue] = useState<number | number[]>([min * amp, max*amp]);

  useEffect(() => {
    setValue([currentRefinement.min * amp, currentRefinement.max * amp]);
  }, [currentRefinement, amp])
  useEffect(() => {
    if (attribute === 'mass') {
      setAmplifier(1000);
      setTitle('Mass')
    }
  }, [attribute]);
  return (
    <div style={{width: '100%'}}>
      <Typography variant="h6" gutterBottom style={{color: 'white'}}>
        {title}: {currentRefinement.min} - {currentRefinement.max}
      </Typography>
      <div>
        <Slider
          disabled={!canRefine}
          min={(min * amp)} max={(max * amp)}
          value={value}
          onChange={(_, val) => setValue(val)}
          onChangeCommitted={(_, val) => refine({min: (val[0] / amp), max: (val[1] / amp)})}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
    </div>
  )
};

const CustomRangeSlider = connectRange(RangeSlider);

export default CustomRangeSlider;