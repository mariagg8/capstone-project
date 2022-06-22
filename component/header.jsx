import styled from 'styled-components';
import { FaSwatchbook } from 'react-icons/fa';
import useStore from '../hooks/useStore';

export default function Header() {
  {
    /*const category = useStore(state => state.category);*/
  }
  return (
    <StyledHeader>
      <h1>
        <FaSwatchbook style={{ color: '#4a82c2', fontSize: '60px' }} /> My Book
        App
      </h1>
      {/*<h2>{category}</h2>*/}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #bbd1e1;
  padding: 10px;
  color: #223d67;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
`;
