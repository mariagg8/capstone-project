import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useStore from '../../hooks/useStore';
import Link from 'next/link';

export default function Books() {
  const { query } = useRouter();
  const [book, setBook] = useState(null);
  const isbn = query.isbn;
  useEffect(() => {
    if (isbn) {
      fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&isbn=${isbn}`
      )
        .then(response => response.json())
        .then(data => {
          const book = data.results.books.find(
            book_ => book_.primary_isbn13 === isbn
          );
          setBook(book);
        });
    }
  }, [isbn]);

  return (
    <div>
      <Link href="/">Back</Link>
      <img src={book?.book_image} alt="book cover" />
      <h1>Book id:{query.isbn}</h1>
      <h1>Rank: {book?.rank}</h1>
      <h2>Title: {book?.title}</h2>
      <h3>Author: {book?.author}</h3>
      <p>Description: {book?.description}</p>
    </div>
  );
}
