
import { connectPagination } from 'react-instantsearch-dom';
import StyledButton from '../css/button';
import { ButtonGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Paging = ({currentRefinement, nbPages, refine}) => {
  // hitsPerPAge: 1000, I got 7K+ objects but nbPages is 2 ? Strange...

  
  const [pages, setPages] = useState<number[]>([])
  useEffect(() => {
    // Algolia should do that alone like a big boy
    if (currentRefinement > nbPages) {
      return refine(1);
    }
    let pages = [];
    if (nbPages > 10 && currentRefinement > 6 && (currentRefinement + 5) <= nbPages) {
      for (let i = (currentRefinement - 4); i < (currentRefinement + 5); i++) {
        pages.push(i);
      }
    } else if(nbPages > 10 && currentRefinement > 6) {
      for (let i = (nbPages - currentRefinement - 1); i < (nbPages); i++) {
        pages.push(i);
      }
    } else {
      for (let i = 0; i < (nbPages > 10 ? 10 : nbPages); i++) {
        pages.push((i + 1));
      }
    }
    setPages(pages);
  }, [currentRefinement, nbPages])
  
  return (
    <ButtonGroup aria-label="paging">
      {pages.map((page) => {
        return <StyledButton className={page === currentRefinement ? 'selected' : ''} onClick={(_) => refine(page)}>{page}</StyledButton>;
      })}
    </ButtonGroup>
  );
}

const CustomPaging = connectPagination(Paging);
export default CustomPaging;