import styled from 'styled-components';
import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  return (
    <section>
      <StyledSearchbar>
        <StyledInput
          placeholder="Search Book"
          type="text"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
          }}
        />
        <StyledButton
          type="submit"
          onClick={() => {
            onSubmit(search);
          }}
        >
          Search
        </StyledButton>
      </StyledSearchbar>
      <StyledText>You can search for book title and author.</StyledText>
    </section>
  );
}

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const StyledButton = styled.button`
  background-color: #4a82c2;
  height: 2rem;
  color: white;
  padding: 10px;
  box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
  border: none;
`;

const StyledInput = styled.input`
  background-color: #eee;
  width: 50%;
  height: 2rem;

  border: 2px solid #4a82c2;
  box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
  padding: 10px 15px;
  &:focus {
    outline: none;
  }
`;

const StyledText = styled.p`
  margin: 20px;
  padding: 10px;
`;
