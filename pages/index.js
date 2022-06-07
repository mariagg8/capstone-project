import BooksCard from '../component/booksCard';
import { SearchBar } from '../component/searchbar';
import { useState } from 'react';

export default function Home() {
  //const addToWishList = useStore(state => state.addToWishList);
  const [searchUrl, setSearchUrl] = useState('');

  console.log(searchUrl);
  const handleSubmit = inputValue => {
    setSearchUrl(inputValue);
  };

  return (
    <>
      <h1>My Book App </h1>
      <SearchBar onSubmit={handleSubmit} />
      {/*<h1>WishList: {wishList}</h1>*/}
      <BooksCard />
    </>
  );
}
