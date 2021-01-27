
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';

import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Dispatch, SetStateAction} from 'react';


// No idea why the by type is crossover on focus.
const useStyles = makeStyles(() => (
  {
    typeRange: {
      '& .MuiFormLabel-root': {
        color: 'white'
      },
      '& .MuiSelect-iconOutlined ': {
        color: 'white'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
      },
      '& .MuiSelect-outlined.MuiSelect-outlined': {
        color: 'white'
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
      width: '100%',
      color: 'white'
    }
  }
));

interface IFilterProps {
  attribute: string,
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: Array<Record<string, any>>;
}

const Filter: NextPage<IFilterProps> = ({attribute, value, setValue, options}) => {

  const classes = useStyles();

  return (
    <FormControl className={classes.typeRange} variant="outlined">
      <InputLabel>{`Filter by ${attribute}:`}</InputLabel>
      <Select
        labelId={`filter-on-${attribute}`}
        value={value || ""}
        onChange={(e) => setValue((e.target.value as string))}
        label={attribute}
      >
        {options.map((v) => <MenuItem key={v.value} value={v.value}><em>{v.label}</em></MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default Filter;