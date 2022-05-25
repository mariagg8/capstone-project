import useStore from '../hooks/useStore';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function BooksCard() {
  const fetchSomething = useStore(state => state.fetchSomething);
  const fetchedData = useStore(state => state.fetchedData);

  useEffect(() => {
    fetchSomething(
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=K4DmlcZgA9tX4XL9GpN53d9u1JbR42rv'
    );
  }, [fetchSomething]);
  //console.log(fetchedData);
  return (
    <CardWrapper>
      <section>
        {fetchedData.results.books !== undefined ? (
          fetchedData.results.books.map((book, index) => {
            return (
              <StyledCard>
                <article key={index}>
                  <img src={book.book_image} style={{ width: '40%' }} />
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
      </section>
    </CardWrapper>
  );
}

const StyledCard = styled.div`
  background-color: #eaecf2;
  width: 250px;
  height: 250px;
  border-radius: 30px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
