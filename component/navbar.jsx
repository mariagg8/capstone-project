import styled from 'styled-components';
import Link from 'next/link';
import { ImHome } from 'react-icons/im';
import Icon from '@mdi/react';
import { mdiNotebookHeartOutline } from '@mdi/js';
import { BiBookHeart } from 'react-icons/bi';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link passHref href="/">
        <a>
          <ImHome style={{ color: '#4a82c2', fontSize: '40px' }} />
          Home
        </a>
      </Link>
      <Link passHref href="/wishlist">
        <a>
          <BiBookHeart size={'45px'} color="#4a82c2" />
          {/*<Icon path={mdiNotebookHeartOutline} size={1.7} color="#4a82c2" />*/}
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
