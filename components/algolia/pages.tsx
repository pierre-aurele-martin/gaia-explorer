
import { connectPagination } from 'react-instantsearch-dom';
import StyledButton from '../css/button';
import { ButtonGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Paging = ({currentRefinement, nbPages, refine}) => {
  // hitsPerPAge: 1000, I got 7K+ objects but nbPages is 2 ? Strange...
  
  const [pages, setPages] = useState<number[]>([])
  useEffect(() => {
    // Algolia should do that alone like a big boy - or I missed something ?
    if (currentRefinement > nbPages) {
      return refine(1);
    }
    let pages = [];

    // currentRefinement: 96 nbPages: 100
    if (nbPages > 8 && currentRefinement > 4 && (currentRefinement + 5) < nbPages) {
      for (let i = (currentRefinement - 4); i < (currentRefinement + 4); i++) {
        pages.push(i);
      }
    } else if(nbPages > 8 && currentRefinement > 5) {
      for (let i = (nbPages - 7); i <= (nbPages); i++) {
        pages.push(i);
      }
    } else {
      for (let i = 0; i < (nbPages > 8 ? 8 : nbPages); i++) {
        pages.push((i + 1));
      }
    }
    setPages(pages);
  }, [currentRefinement, nbPages])
  
  return (
    <ButtonGroup aria-label="paging">
      {pages.map((page) => {
        return <StyledButton key={page} className={page === currentRefinement ? 'selected' : ''} onClick={(_) => refine(page)}>{page}</StyledButton>;
      })}
    </ButtonGroup>
  );
}

const CustomPaging = connectPagination(Paging);
export default CustomPaging;