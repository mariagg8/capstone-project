import useStore from '../hooks/useStore';
import { useEffect } from 'react';
import styled from 'styled-components';

const Api = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

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
        fetchedData.results.books.map((book, index) => {
          return (
            <StyledCard key={index}>
              <article>
                <img src={book.book_image}></img>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.description}</p>
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
  padding: 30px;
  text-align: justify;
  border-radius: 25px;
`;

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  justify-content: center;
`;
