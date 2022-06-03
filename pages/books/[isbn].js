import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
    <StyledCard>
      <Link passHref href="/">
        <a>← Back</a>
      </Link>
      <img src={book?.book_image} alt="book cover" width="350px" />
      <h1>Title: {book?.title}</h1>
      <h3>Author: {book?.author}</h3>
      <p>Rank: {book?.rank}</p>
      <p>Book id:{query.isbn}</p>
      <p>Description: {book?.description}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
