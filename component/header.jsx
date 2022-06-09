import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <Styledimg src={'/icons8-study.png'} />
      <h1>My Book App</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #bbd1e1;
  padding: 2rem;
  color: #5b5858;
  display: flex;
  flex-direction: row;
  //gap: 20px;
  //text-align: center;
`;

const Styledimg = styled.img`
  //position: fixed;
  //top: 40px;
  //left: 0;
  margin: 10px;
  padding: 5px;
  width: 35px;
`;
