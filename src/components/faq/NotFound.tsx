import styled from 'styled-components';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundIcon src="/ic_nodata.svg" alt="Not Found" />
      <NotFoundText>검색결과가 없습니다.</NotFoundText>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  width: 100%;
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 2px solid black;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  margin-bottom: 64px;
`;

const NotFoundIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const NotFoundText = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.gray500};
`;
