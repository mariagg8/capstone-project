import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <img src={'/icons8-study.png'} />
      <h1>My Book Tracking App</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #bbd1e1;
  padding: 2rem;
  color: #5b5858;
  display: flex;
  gap: 20px;
`;
