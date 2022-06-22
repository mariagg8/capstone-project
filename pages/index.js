import BooksCard from '../component/booksCard';

import { SearchBar } from '../component/searchBar';
import { useState } from 'react';
import useStore from '../hooks/useStore';

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

      <SearchBar onSubmit={handleSubmit} />
      <div>
        <button
          type="button"
          onClick={() => {
            setCategory('fiction');
          }}
        >
          Fiction
        </button>
        <button
          type="button"
          onClick={() => {
            setCategory('nonfiction');
          }}
        >
          nonFiction
        </button>
      </div>
      <BooksCard search={search} />
    </>
  );
}
