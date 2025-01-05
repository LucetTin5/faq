import styled from 'styled-components';

export const AppDownload = () => {
  return (
    <AppDownloadWrapper>
      <Title>
        위즐 비즈 App
        <span>&nbsp;지금 만나보세요!</span>
      </Title>
      <ButtonWrapper>
        <LinkButton href="#" $imgSrc="/logo_googleplay.svg">
          Google Play
        </LinkButton>
        <LinkButton href="#" $imgSrc="/logo_appstore.svg">
          App Store
        </LinkButton>
      </ButtonWrapper>
    </AppDownloadWrapper>
  );
};

const AppDownloadWrapper = styled.div`
  width: 100%;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 10px;
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mint900};
  span {
    color: black;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const LinkButton = styled.a<{ $imgSrc: string }>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  &::before {
    content: '';
    width: 32px;
    height: 100%;
    background-image: url(${({ $imgSrc }) => $imgSrc});
    background-size: 32px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
