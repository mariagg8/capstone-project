import BooksCard from '../component/booksCard';
import Header from '../component/header';
import { SearchBar } from '../component/searchBar';
import { useState } from 'react';
//const urlfiction = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`;
//const urlnonfiction = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`;

export default function Home() {
  const [search, setSearch] = useState('');
  //const [url, setUrl] = useState(urlfiction);

  console.log(search);
  const handleSubmit = inputValue => {
    setSearch(inputValue);
  };

  return (
    <>
      <Header />
      <h2>Best Sellers</h2>
      {/*<button
        onClick={() => {
          setUrl(urlfiction);
        }}
      >
        Fiction
      </button>
      <button
        onClick={() => {
          setUrl(urlnonfiction);
        }}
      >
        NonFiction
      </button>*/}
      <SearchBar onSubmit={handleSubmit} />
      <BooksCard search={search} />
      {/*<BooksCard search={search} url={url} />*/}
    </>
  );
}
