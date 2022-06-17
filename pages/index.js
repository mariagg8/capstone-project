import BooksCard from '../component/booksCard';
import Header from '../component/header';
import { SearchBar } from '../component/searchBar';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  console.log(search);
  const handleSubmit = inputValue => {
    setSearch(inputValue);
  };

  return (
    <>
      {/*<Header />*/}
      <h2>Best Sellers</h2>

      <SearchBar onSubmit={handleSubmit} />
      <BooksCard search={search} />
    </>
  );
}
