import styled from 'styled-components';
import Link from 'next/link';
import { ImHome } from 'react-icons/im';
import { BiBookHeart } from 'react-icons/bi';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link passHref href="/">
        <a>
          <ImHome
            style={{
              color: '#4a82c2',
              fontSize: '40px',
              verticalAlign: 'bottom',
            }}
          />
          Home
        </a>
      </Link>
      <Link passHref href="/wishlist">
        <a>
          <BiBookHeart
            style={{
              color: '#4a82c2',
              fontSize: '40px',
              verticalAlign: 'bottom',
            }}
          />
          My Wishlist
        </a>
      </Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #bbd1e1;
  padding: 1rem;
  list-style: none;
  color: #223d67;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;
