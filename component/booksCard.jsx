import useStore from '../hooks/useStore';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function BooksCard({ apikey }) {
  const fetchApi = useStore(state => state.fetchApi);
  const fetchedData = useStore(state => state.fetchedData);

  useEffect(() => {
    fetchApi(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apikey}`
    );
  }, [fetchApi]);

  return (
    <CardWrapper>
      {fetchedData?.results?.books !== undefined ? (
        fetchedData.results.books.map(book => {
          return (
            <StyledCard key={book.book_uri}>
              <article>
                <Styledimage src={book.book_image} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </article>
            </StyledCard>
          );
        })
      ) : (
        <article>loading</article>
      )}
    </CardWrapper>
  );
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bbd1e1;
  padding: 20px;
  text-align: justify;
  border-radius: 25px;
`;

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
`;

const Styledimage = styled.img`
  width: 100%;
`;
