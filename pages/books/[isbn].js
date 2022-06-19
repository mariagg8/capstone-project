import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

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
        <a>
          <BsFillArrowLeftSquareFill
            style={{ color: '#4a82c2', fontSize: '20px' }}
          />
          Back
        </a>
      </Link>

      <StyledCover src={book?.book_image} alt="book cover" width="300px" />
      <StyleArticle>
        <h3>Title: {book?.title}</h3>
        <h3>Author: {book?.author}</h3>
        <p>Rank: {book?.rank}</p>
        <p>Book id:{query.isbn}</p>
        <p>Description: {book?.description}</p>
      </StyleArticle>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: justify;
`;

const StyledCover = styled.img`
  border: 2px solid lightgray;
  padding: 20px;
  margin: 20px;
  align-self: center;
`;

const StyleArticle = styled.div`
  margin: 20px;
  // border: 3px solid #f9f9f9;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e6e6e6;
  padding: 10px;
`;
