import useStore from '../hooks/useStore';
import styled from 'styled-components';

export default function Wishlist() {
  const wishList = useStore(state => state.wishList);
  const fetchedData = useStore(state => state.fetchedData);
  return (
    <div>
      <h2>My Wishlist:</h2>
      <Wrapper>
        {wishList.map(bookId => {
          const book = fetchedData.results.books.find(
            book_ => book_.primary_isbn13 === bookId
          );
          //console.log(book);
          return (
            <>
              <StyledCard>
                <Cover>
                  <StyledImage src={book.book_image} />
                </Cover>
                <h3 key={bookId}> Title: {book.title}</h3>
                <h3>{book.author}</h3>
              </StyledCard>
            </>
          );
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0 20px;
`;

const StyledCard = styled.div`
  background-color: #bbd1e1;
  padding: 20px;
  border-radius: 25px;
`;

const Cover = styled.div`
  position: relative;
  width: 100%;
  background-color: red;
  padding-bottom: 150%;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
