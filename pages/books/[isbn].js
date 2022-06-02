import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import Link from 'next/link';

export default function Books() {
  const { query } = useRouter();
  const fetchedData = useStore(state => state.fetchedData);
  const [book, setBook] = useState(null);

  //function fetchBook(isbn) {
  // fetch(
  //  `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apikey}`
  // );
  //}

  useEffect(() => {
    const book = fetchedData?.results?.books?.find(
      book_ => book_.primary_isbn10 === query.isbn
    );
    setBook(book);
  }, [query]);

  //console.log(fetchedData);
  //return null;

  return (
    <div>
      <Link href="/">Back</Link>
      <img src={book?.book_image} />
      <h1>Book id:{query.isbn}</h1>
      <h1>Rank: {book?.rank}</h1>
      <h2>Title: {book?.title}</h2>
      <h3>Author: {book?.author}</h3>
      <p>Description: {book?.description}</p>
    </div>
  );
}
