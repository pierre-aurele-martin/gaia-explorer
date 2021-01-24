import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import floatToHex from '../../utils/floatToHex';
import ActionButtons from '../fab';
import DataSlider from '../slider';
import PlanetDialog from './planetDialog';

declare global {
  interface Window { Spacekit: any; }
}
const useStyles = makeStyles(() => (
  createStyles({
    root: {
      flexGrow: 1
    },
    spaceContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black'
    }
  })
));

const SpaceKitContainer = () => {
  const classes = useStyles();

  const spaceId = 'main-container';

  // @ts-ignore
  const [viz, setViz] = useState<any>(null);
  const [openPlanetDialog, setOpenPlanetDialog] = useState(false);
  const [planetDialog, setPlanetDialog] = useState(null);

  const handleClose = (value: any | null) => {
    setOpenPlanetDialog(false);
    setPlanetDialog(value);
    viz.start();
  };
  const initSpaceKit = () => {
    const Spacekit = window && window.Spacekit;
    const viz = new Spacekit.Simulation(document.getElementById(spaceId), {
      basePath: 'https://typpo.github.io/spacekit/src',
    });

    // Create a skybox using NASA TYCHO artwork.
    viz.createStars();

    // Create our first object - the sun - using a preset space object.
    viz.createObject('sun', {...Spacekit.SpaceObjectPresets.SUN, labelText: 'THE SUN'});
    viz.createObject('earth', {...Spacekit.SpaceObjectPresets.EARTH, labelText: 'THE EARTH'});

    const color = parseInt(`0x${floatToHex(1.314)}`);
    const planet1Data = {
      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]
      particleSize: (0.5843208 * 100), // radius
      labelText: '<div style="cursor: pointer">*134221859-000099E</div>',
      ephem: new Spacekit.Ephem({
        epoch: 135713.53, // orbit_period radial_velocity
        a: 58.348286, // semimajor_axis
        e: 0.6170001, // eccentricity
        i: -85.316086, // inclination
        om: 45.909332, // longitude_ascending_node
        w: 106223.05, // periastron_date
        ma: 23.536655, // mag_g
      }, 'rad'),
      // textureUrl: '/path/to/spriteTexture.png',
      // basePath: '/base',
      theme: {
        color: color, // V_I
        orbitColor: color,
      },
    };
    const planet1 = viz.createObject('1', planet1Data)

    planet1._label.addEventListener('click', (_: HTMLElement) => {
      // e could be use to position dynamically the modal but not so easy 
      viz.stop();
      setPlanetDialog(planet1Data);
      setOpenPlanetDialog(true);
    });
   
    /* console.log('spaceman ===>', spaceman);
    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */
    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));

    console.log('VIZ ===>', viz);
    // viz.stop();
    setViz(viz);
  }

  const resetCamera = () => {
    document.getElementById(spaceId).innerHTML = '';
    initSpaceKit();
    /* Doesnt work... const camera = viz.getViewer();
    console.log('Reset Camera ===>', viz, camera);
    camera._cameraControls.reset(); */
  }

  useEffect(() => {
    initSpaceKit();
    return () => {
      // Avoid duplication with HMR as viz as no destroy method - no impact otherwise
      document.getElementById(spaceId).innerHTML = '';
    }

  }, []);

  return <>
    <DataSlider defaultValue={50} step={50} min={0} max={10000} />
    <div id="main-container" className={classes.spaceContainer}></div>
    <ActionButtons
      reset={resetCamera}
    />
    <PlanetDialog open={openPlanetDialog} onClose={handleClose} data={planetDialog}/>
  </>;
}

export default SpaceKitContainer;