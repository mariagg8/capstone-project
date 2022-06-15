import styled from 'styled-components';
import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');
  //const fetchedData = useStore(state => state.fetchedData);
  //const search = useStore(state => state.search)
  //const setSearch = UseStore(state => state.setSearch)

  return (
    <section>
      <StyledSearchbar>
        <StyledInput
          placeholder="Search Book"
          type="text"
          value={search.toLowerCase()}
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

      {/*<div>
      {fetchedData?.results?.books !== undefined ? (
        fetchedData.results.books.map(book => {  
         return(
              <img src={book.book_image} />
                </Cover>
                <h3 key={bookId}> Title: {book.title}</h3>
                <h3>{book.author}</h3>
         );
         </div>*/}
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
