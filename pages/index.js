import BooksCard from '../component/booksCard';
import { SearchBar } from '../component/searchBar';
import { useState } from 'react';

export default function Home() {
  const [searchUrl, setSearchUrl] = useState('');

  console.log(searchUrl);
  const handleSubmit = inputValue => {
    setSearchUrl(inputValue);
  };

  return (
    <>
      <h1>My Book App </h1>
      <SearchBar onSubmit={handleSubmit} />
      <BooksCard />
    </>
  );
}
