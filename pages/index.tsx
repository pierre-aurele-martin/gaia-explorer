import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Backdrop, Box, CircularProgress, Theme } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { defaultStepValue } from '../components/spacekit/container';
import algoliasearch from 'algoliasearch';
import AlgoliaContainer from '../components/algolia/instantsearch';

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    root: {
      flexGrow: 1
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
));

const IndexPage = ({hits}) => {
  const classes = useStyles();

  const [s1, setS1] = useState<boolean>(false);
  const [s2, setS2] = useState<boolean>(false);
  const [s3, setS3] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {(s1 && s2 && s3 ? setReady(true) : null)}, [s1, s2, s3])

  useEffect(() => {
    const scripts = [
      {src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js', onLoad: setS1},
      {src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js', onLoad: setS2},
      {src: `${process.env.NODE_ENV !== 'production' ? '' : '/gaia-explorer'}/scripts/spacekit.js`, onLoad: setS3}
    ]
    for (let {src, onLoad} of scripts) {
      const s = document.createElement('script')
      s.setAttribute('src', src);
      s.async = true;
      s.onload = () => onLoad(true);
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Box width="100vw" height="100vh">
        {ready ?
          <AlgoliaContainer hits={hits} />
          : (
            <Backdrop className={classes.backdrop} open={!ready}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
      </Box>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (_) => {

  const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_PRIVATE_KEY);
  const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);
  let hits = [];
  try {
    const search = await index.search('', { page: 0, hitsPerPage: defaultStepValue });
    hits = search.hits;
    if (!hits.length) {
      return {
        redirect: {
          destination: '/_error', // I can't imagine Algolia fail
          permanent: false,
      },
    }
    }

  } catch (error) {
    console.error('Algolia error', error);
  }

  return {
    props: {hits}, // will be passed to the page component as props
  }
}


export default IndexPage
