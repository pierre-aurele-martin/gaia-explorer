import { connectAutoComplete } from 'react-instantsearch-dom';
import { Fade, InputAdornment, TextField } from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';

const CssTextField = withStyles({
  root: {
    width: '100%',
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInputBase-root': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#8B939A',
        boxShadow: '0 0 10px #8B939A'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8B939A',
        boxShadow: '0 0 10px #8B939A'
      },
    },
  },
})(TextField);

const useStyles = makeStyles(() => (
  {
    root: {
      width: '100%'
    },
    ul: {
      position: 'absolute',
      listStyleType: 'none',
      paddingInlineStart: 0,
      backgroundColor: 'black',
      width: '92%',
      zIndex: 10,
    },
    liItem: {
      color: 'white',
      display: 'flex',
      boxShadow: '0 0 7px #8B939A',
      marginBottom: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      padding: '5px'
    },
    hl: {
      paddingRight: '5px',
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  }
));

const AlgoliaAutocomplete = ({ hits, currentRefinement, refine }) => {
  const classes = useStyles();

  const [focused, setFocus] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <CssTextField
        variant="outlined" 
        className={null}
        color="secondary"
        id="input-with-icon-textfield"
        label="Search by Algolia"
        InputProps={{
          value: currentRefinement,
          onChange: (event) => refine(event.currentTarget.value),
          onBlur: () => {
            setFocus(false)
          },
          onFocus: () => setFocus(true),
          autoComplete: "off",
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: currentRefinement ? (
            <InputAdornment onClick={() => refine('')} position="end" style={{cursor: 'pointer'}}>
              <Close />
            </InputAdornment>
          ) : ''
        }}
      />
      <Fade in={focused}>
        <ul className={classes.ul}>
          {hits.map((hit, _) => {
            let hls = [];
            for (let key in hit._highlightResult) {
              if (hit._highlightResult[key].matchLevel !== 'none') {
                hls.push(<span key={key} className={classes.hl} dangerouslySetInnerHTML={{__html: hit._highlightResult[key].value}} />)
              }
            }
            
            return (
              <li onClick={() => {
                setFocus(false);
                refine(hit.source_extended_id);
              }} className={classes.liItem} key={hit.objectID}>
                {hls.map((v) => v)}
                <span>{hit.source_extended_id}</span>
              </li>
            )
          })}
        </ul>
      </Fade>
  </div>
)
};

const CustomAutocomplete = connectAutoComplete(AlgoliaAutocomplete);

export default CustomAutocomplete;