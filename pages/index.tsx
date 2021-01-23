import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

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
    <Container maxWidth={false} style={{border: '4px solid red'}}>
      <div>OK</div>
    </Container>
  )
}

export default IndexPage
