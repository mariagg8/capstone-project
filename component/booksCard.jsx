import useStore from '../hooks/useStore';
import { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FcNext } from 'react-icons/fc';

export default function BooksCard({ search, url }) {
  const fetchApi = useStore(state => state.fetchApi);
  const fetchedData = useStore(state => state.fetchedData);
  const addToWishList = useStore(state => state.addToWishList);
  const wishList = useStore(state => state.wishList);
  const deleteFromWishList = useStore(state => state.deleteFromWishList);

  useEffect(() => {
    fetchApi(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
    );
  }, [fetchApi]);

  return (
    <CardWrapper>
      {fetchedData?.results?.books !== undefined ? (
        fetchedData.results.books
          .filter(book => {
            const matchingTitle = book.title
              .toLowerCase()
              .includes(search.trim().toLowerCase());

            const matchingAuthor = book.author
              .toLowerCase()
              .includes(search.trim().toLowerCase());

            return matchingTitle || matchingAuthor;
          })
          .map(book => {
            const isinwishlist = wishList.includes(book.primary_isbn13);

            return (
              <StyledCard key={book.primary_isbn10}>
                <StyledBookCover>
                  <Styledimage src={book.book_image} />
                </StyledBookCover>
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <Link href={`/books/${book.primary_isbn13}`}>
                    <a>
                      More details <FcNext />
                    </a>
                  </Link>

                  {isinwishlist ? (
                    <StyledButton
                      onClick={() => {
                        deleteFromWishList(book.primary_isbn13);
                      }}
                    >
                      Remove
                    </StyledButton>
                  ) : (
                    <StyledButton
                      onClick={() => {
                        addToWishList(book.primary_isbn13);
                      }}
                    >
                      Add
                    </StyledButton>
                  )}
                </div>
              </StyledCard>
            );
          })
      ) : (
        <article>loading</article>
      )}
    </CardWrapper>
  );
}

const StyledBookCover = styled.div`
  position: relative;
  width: 100%;
  background-color: red;
  padding-bottom: 150%;
`;

const StyledCard = styled.article`
  background-color: #bbd1e1;
  padding: 20px;
  border-radius: 25px;
  position: relative;
  max-width: 350px;
  a {
    position: absolute;
    right: 5px;
  }
`;

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0 20px;
`;

const Styledimage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButton = styled.button`
  background-color: #4a82c2;
  height: 2rem;
  color: white;
  padding: 10px;
  box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
  border: none;
  cursor: pointer;
`;
