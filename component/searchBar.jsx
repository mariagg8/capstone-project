import styled from 'styled-components';
import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  return (
    <StyledSearchbar>
      <input
        placeholder="Search Book"
        type="text"
        value={search.toUpperCase()}
        onChange={event => {
          setSearch(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          onSubmit(search);
        }}
      >
        Search
      </button>
    </StyledSearchbar>
  );
}

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
