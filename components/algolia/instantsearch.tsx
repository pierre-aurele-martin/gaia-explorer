import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { InstantSearch } from 'react-instantsearch-dom';
import { ISpaceData } from '../../interfaces/space';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import algoliasearch from 'algoliasearch/lite';

import { connectHits } from 'react-instantsearch-dom';
import CustomAutocomplete from './autocomplete';
import { List, ListItem, Typography, Box, Fade, Grid} from '@material-ui/core';
import { useEffect, useState } from 'react';
import CustomRangeSlider from './range';

import { PoweredBy } from 'react-instantsearch-dom';
import { Configure } from 'react-instantsearch-dom';
import SpaceKitContainer, { defaultStepValue } from '../spacekit/container';
import Filter from './filter';
import CustomClearRefinements from './clear';
import GitHubLink from '../github';
import CustomToggle from './toggle';
import HitsSlider from './hitsslider';
import StyledButton from '../css/button';
import CustomPaging from './pages';

interface IAlgoliaContainerProps {
  hits: ISpaceData[];
}

const CustomHits = connectHits(SpaceKitContainer);
/* const CustomHits = connectHits((props) => {
  console.log('Hits props ===>', props.hits);
  return <div style={{position: 'absolute', bottom: 0, right: 0}}>OK</div>
}); */
const useStyles = makeStyles(() => (
  {
    title: {
      color: 'white'
    },
    powered: {
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '10px',
      display: 'flex'
    }
  }
));

// I'm hard filtering on purpose - did not find how to get the following Array through API. 
const typeFilters = [
  {value: "", label: "All"},
  {value: "Stellar", label: "Stellar"},
  {value: "Galaxy", label: "Galaxy"},
  {value: "Unknow", label: "Unknow"},
];

const AlgoliaContainer: NextPage<IAlgoliaContainerProps> = ({hits}) => {
  const classes = useStyles();

  const [vType, setType] = useState<string>('');
  const [filtersToClear, setFiltersClear] = useState(null);
  const [play, setPlay] = useState<boolean>(true);

  const [hitsPerPage, setHitsPerPage] = useState<number>(defaultStepValue);

  useEffect(() => {
    if (vType) {
      setFiltersClear(() => () => { setType(''); })
    } else {
      setFiltersClear(null);
    }
  }, [vType]);

  const searchStateChange = (searchState) => {
    console.log('SearchStateChange ===>', searchState);
    // TODO -> dynamic routing so we can share search params
  }

  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <InstantSearch
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      searchClient={algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_KEY)}
      onSearchStateChange={searchStateChange}
    >
      <Configure
        filters={vType ? `type:${vType}` : ''}
        hitsPerPage={hitsPerPage}
      />
        <Fade in={drawerOpen}>
          <Box position="absolute" minWidth={matches ? '400px' : '100%'} height="100%" width="auto">
            <List component="nav" aria-label="search list">
              <ListItem>
                <Typography className={classes.title} variant="h4" gutterBottom>
                  Gaia Explorer
                </Typography>
              </ListItem>
              <ListItem>
                <PoweredBy className={classes.powered} />
              </ListItem>
              <ListItem>
                <HitsSlider setHitsPerPage={setHitsPerPage} />
              </ListItem>
              <ListItem>
                <CustomAutocomplete />
              </ListItem>
              <ListItem>
                <Filter attribute="type" value={vType} setValue={setType} options={typeFilters} />
              </ListItem>
              <ListItem>
                <CustomRangeSlider attribute="mass" />
              </ListItem>
              <ListItem>
                <CustomToggle value={"true"} attribute="known_variability_type" label="Known variability type" />
              </ListItem>
              <ListItem>
                <CustomPaging />
              </ListItem>
              <ListItem>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={7}>
                    <CustomClearRefinements clearsQuery filtersToClear={filtersToClear} />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <StyledButton onClick={(_) => toggleDrawer()} startIcon={<CancelPresentationIcon />}>CLOSE</StyledButton>
                  </Grid>
                  <Grid item xs={6} sm={1}>
                    <StyledButton onClick={(_) => setPlay(!play)}>
                      {play ? <PauseIcon/> : <PlayArrowIcon />}
                    </StyledButton>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem></ListItem>
              <ListItem>
                <GitHubLink />
              </ListItem>
            </List>
          </Box>
        </Fade>
        <CustomHits
          staticHits={hits}
          drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}
          // context would work for this
          play={play}
          setPlay={setPlay}
        />
    </InstantSearch>
  )
}

export default AlgoliaContainer;