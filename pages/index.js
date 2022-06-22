import BooksCard from '../component/booksCard';

import { SearchBar } from '../component/searchBar';
import { useState } from 'react';
import useStore from '../hooks/useStore';
import styled from 'styled-components';

export default function Home() {
  const [search, setSearch] = useState('');
  const setCategory = useStore(state => state.setCategory);

  console.log(search);
  const handleSubmit = inputValue => {
    setSearch(inputValue);
  };

  return (
    <>
      <h2>Best Sellers</h2>
      <StyleButtonWrapper>
        <StyledButton
          type="button"
          onClick={() => {
            setCategory('fiction');
          }}
        >
          Fiction
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => {
            setCategory('nonfiction');
          }}
        >
          Non Fiction
        </StyledButton>
      </StyleButtonWrapper>

      <SearchBar onSubmit={handleSubmit} />
      <BooksCard search={search} />
    </>
  );
}

const StyledButton = styled.button`
  background-color: #4a82c2;
  height: 2rem;
  //color: white;
  padding: 10px;
  box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
  border: none;
  color: ${({ isActive }) => (isActive ? 'red' : 'white')};
`;

const StyleButtonWrapper = styled.div`
  position: fixed;
  top: 130px;
  right: 0;
  z-index: 1;
`;
