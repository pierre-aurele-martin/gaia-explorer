import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NextPage } from 'next';
import ActionButtons from '../fab';
import PlanetDialog from './planetDialog';
import {useSpaceKit} from '../../hooks/useSpacekit';
import { ISpaceData, ISpaceKit } from '../../interfaces/space';

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

export const defaultStepValue = 10;

interface ISpaceKitContainerProps {
  staticHits: ISpaceData[];
  hits: ISpaceData[];
  toggleDrawer: any;
  drawerOpen: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
  play: boolean;
}

const SpaceKitContainer: NextPage<ISpaceKitContainerProps> = ({hits, drawerOpen, setPlay, play, toggleDrawer, staticHits}) => {
  const classes = useStyles();

  const spaceId = 'main-container';

  const {initSpaceKit, destroy, createObject, removeObject} = useSpaceKit(spaceId);

  const [space, setSpace] = useState<ISpaceKit>(null);

  useEffect(() => {
    if (space) {
      play ? space.start() : space.stop();
    }
  }, [play]);

  const [spaceObjects, setSpaceObjects] = useState<(Record<string, any>)>({})
  
  const [openPlanetDialog, setOpenPlanetDialog] = useState(false);
  const [planetDialog, setPlanetDialog] = useState(null);


  const spaceClick = (obj: ISpaceData) => {
    setOpenPlanetDialog(true);
    setPlanetDialog(obj);
    setPlay(false);
  }
  const handleClose = (value: any | null) => {
    setOpenPlanetDialog(false);
    setPlanetDialog(value);
    setPlay(true);
  };

  const createHits = () => {
    // Spacekit doesn't play so nice with high speed hits refresh.
    // Should be debounced but that's stupid when showcasing Algolia.
    console.log('Hits ===>', hits);

    let _hits = hits;
    if (!hits || !hits.length) {
      _hits = staticHits; // use resultsState in InstantSearch would probably be better
    }
    if (space && _hits && _hits.length) {
      const _spaceObjects = {...spaceObjects};
      const newSpaceObjects = {}
      for (let obj of _hits) {
        const id = obj.source_extended_id.trim();
        if (!_spaceObjects[id]) { // not already in space - create it
          const newObj = createObject(space, id, obj);
          newObj._click = (_) => {
            // This is where we fetch more data if required (not the case here as I put all propertis into Algolia)
            spaceClick(obj)
          };
          newObj._label.addEventListener('click', newObj._click);
          newSpaceObjects[id] = newObj;
        } else { // already in space - just get it
          newSpaceObjects[id] = _spaceObjects[id];
          // deleteIt from old object
          delete _spaceObjects[id];
        }
      }

      // Everything left in _spaceObject must be removed from space + removeEventListner
      for (let oldId in _spaceObjects) {
        if (_spaceObjects[oldId]) {
          _spaceObjects[oldId]._label.removeEventListener('click', _spaceObjects[oldId]._click);
          removeObject(space, _spaceObjects[oldId]);
        }
      }
      setSpaceObjects(newSpaceObjects);
    }
  }

  useEffect(() => {
    createHits();
  }, [hits, staticHits]);

  useEffect(() => {
    setSpace(initSpaceKit());
    return () => {
      // Avoid duplication with HMR as viz has no destroy method - no impact otherwise
      destroy();
    }

  }, []);

  return <>

    <div id="main-container" className={classes.spaceContainer}></div>
    
    {!drawerOpen ? <ActionButtons reset={() => null} toggleDrawer={toggleDrawer} /> : null}
    
    <PlanetDialog open={openPlanetDialog} onClose={handleClose} data={planetDialog}/>
  </>;
}

export default SpaceKitContainer;
