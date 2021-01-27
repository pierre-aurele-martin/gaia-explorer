
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import StyledButton from '../css/button';
import ClearAllIcon from '@material-ui/icons/ClearAll';

const ClearRefinements = ({items, refine, filtersToClear}) => {

  return <StyledButton
          onClick={() => {
            items.length ? refine(items) : null
            filtersToClear ? filtersToClear() : null
          }}
          disabled={!items.length && !filtersToClear}
          startIcon={<ClearAllIcon />}
        >
        Clear all refinements
  </StyledButton>
}

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);
export default CustomClearRefinements;