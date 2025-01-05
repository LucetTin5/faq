import styled from 'styled-components';

export const Inquiry = () => {
  return (
    <InquiryWrapper>
      <Title>서비스 문의</Title>
      <ButtonWrapper>
        <Button>
          <ButtonIcon src="/ic_download.svg" />
          <span>상품제안서 다운로드</span>
        </Button>
        <Button>
          <ButtonIcon src="/ic_write.svg" />
          <span>상담문의 등록하기</span>
        </Button>
        <Button>
          <ButtonIcon src="/ic_download.svg" />
          <KakaoTalkWrapper>
            <span>카톡으로 문의하기</span>
            <span>ID: Wible Biz(위블 비즈)</span>
          </KakaoTalkWrapper>
        </Button>
      </ButtonWrapper>
    </InquiryWrapper>
  );
};

const InquiryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 64px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Button = styled.button`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  span {
    font-size: 18px;
    font-weight: 600;
  }
  border: 1px solid black;
  cursor: pointer;
  gap: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray10};
  }
`;

const ButtonIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const KakaoTalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span:last-child {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
