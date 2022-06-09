import styled from 'styled-components';
import { FaSwatchbook } from 'react-icons/fa';

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <FaSwatchbook style={{ color: '#4a82c2', fontSize: '60px' }} /> My Book
        App
      </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #bbd1e1;
  padding: 2rem;
  color: #223d67;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
