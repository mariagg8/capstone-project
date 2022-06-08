import useStore from '../hooks/useStore';
import { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function BooksCard({ apikey }) {
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
        fetchedData.results.books.map(book => {
          const isinwishlist = wishList.includes(book.primary_isbn13);
          //wishList.filter(book.primary_isbn13);

          return (
            <StyledCard key={book.primary_isbn10}>
              <StyledBookCover>
                <Styledimage src={book.book_image} />
              </StyledBookCover>
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <Link href={`/books/${book.primary_isbn13}`}>
                  <a>More details → </a>
                </Link>

                {isinwishlist ? (
                  <button
                    onClick={() => {
                      //implement remove here
                      deleteFromWishList(book.primary_isbn13);
                    }}
                  >
                    Remove from Wishlist
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      addToWishList(book.primary_isbn13);
                    }}
                  >
                    Add to Wish List
                  </button>
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
