import styled from 'styled-components';

export const Logo = () => {
  return <LogoAnchor href="/" />;
};

const LogoAnchor = styled.a`
  flex-shrink: 0;
  background-image: url('/logo_wible_lg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 160px;
  height: 100%;
  @media (max-width: 1024px) {
    width: 120px;
  }
`;
