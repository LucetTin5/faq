import styled from 'styled-components';

export const Main = ({ children }: { children: React.ReactNode }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

const MainWrapper = styled.main`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 48px;
`;
