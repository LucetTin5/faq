import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { Nav } from './Nav';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <HeaderWrapper $scrolled={scrolled}>
      <HeaderContent>
        <Logo />
        <Nav />
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0 48px;
  margin: 0 auto;
  background-color: white;
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  z-index: 10;
`;

const HeaderContent = styled.div`
  max-width: 1660px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
