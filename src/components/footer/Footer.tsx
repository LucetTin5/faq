import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <ContentContainer>
        <Left>&copy; 2023 KIA CORP. ALL Rights Reserved.</Left>
        <Information>
          <Links>
            <a href="#">개인정보 처리방침</a>
            <a href="#">이용약관</a>
          </Links>
          <Address>
            <span>서울특별시 서초구 헌릉로 12</span>
            <span>기아㈜</span>
            <span>대표: 송호성, 최준영</span>
            <span>사업자등록번호: 119-81-02316</span>
            <span>통신판매번호: 2006-07935</span>
            <span>고객센터: 1833-4964</span>
            <span>
              제휴문의: <a href="mailto:wible.biz@kia.com">wible.biz@kia.com</a>
            </span>
          </Address>
        </Information>
      </ContentContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.night900};

  display: flex;
  align-items: center;
  height: 180px;

  font-size: 14px;
  line-height: 24px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1660px;
  margin: 0 auto;
  height: 80px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 14px;
  &::before {
    background-image: url('/logo_kia.svg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: 56px;
    margin-bottom: 2px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  a {
    font-weight: 600;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray10};
  }
  justify-content: flex-end;
  align-items: center;
`;

const Address = styled.address`
  font-style: normal;
  span,
  a {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray400};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
