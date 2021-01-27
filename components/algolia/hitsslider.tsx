import { Typography, Slider} from '@material-ui/core';
import { useState } from 'react';
import { defaultStepValue } from '../spacekit/container';


// Too bad I didn't find how InstantSearch can tell me the MAX hits available base on currentRefinement
// Could I get this info with an API call somehow ?
// I'm not using paging but I could as I assume 10k results will blow my computer
const HitsSlider = ({setHitsPerPage}) => {

  const [sliderVal, setSliderValue] = useState<number>(defaultStepValue);

  return (
    <div style={{width: '100%'}}>
      <Typography variant="h6" gutterBottom style={{color: 'white'}}>
        Elements displayed: {sliderVal}
      </Typography>
      <div>
        <Slider
          min={0}
          max={1000}
          value={sliderVal}
          defaultValue={sliderVal}
          onChange={(_, val) => setSliderValue((val as number))}
          onChangeCommitted={(_, val) => setHitsPerPage((val as number))}
          valueLabelDisplay="auto"
          aria-labelledby="hit-per-page-slider"
        />
      </div>
    </div>
  )
}

export default HitsSlider;