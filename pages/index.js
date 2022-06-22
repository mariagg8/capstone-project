import BooksCard from '../component/booksCard';

import { SearchBar } from '../component/searchBar';
import { useState } from 'react';
import Categories from '../component/categories';

export default function Home() {
  const [search, setSearch] = useState('');

  console.log(search);
  const handleSubmit = inputValue => {
    setSearch(inputValue);
  };

  return (
    <>
      <h2>Best Sellers</h2>
      <Categories />

      <SearchBar onSubmit={handleSubmit} />
      <BooksCard search={search} />
    </>
  );
}
