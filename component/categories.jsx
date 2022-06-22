import useStore from '../hooks/useStore';
import styled from 'styled-components';
export default function Categories() {
  const setCategory = useStore(state => state.setCategory);
  return (
    <StyleButtonWrapper>
      <StyledButton
        type="button"
        onClick={() => {
          setCategory('fiction');
        }}
      >
        Fiction
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => {
          setCategory('nonfiction');
        }}
      >
        Non Fiction
      </StyledButton>
    </StyleButtonWrapper>
  );
}

const StyledButton = styled.button`
  background-color: #4a82c2;
  height: 2rem;
  color: white;
  padding: 10px;
  box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
  border: none;
  &:hover {
    color: yellow;
  }
`;

const StyleButtonWrapper = styled.div`
  position: fixed;
  top: 130px;
  right: 0;
  z-index: 1;
`;
