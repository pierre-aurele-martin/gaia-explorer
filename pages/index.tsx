import Link from 'next/link'
import Layout from '../components/Layout'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(() => (
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
));

const IndexPage = () => {
  const classes = useStyles();
  
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
    </Layout>
  )
}

export default IndexPage
