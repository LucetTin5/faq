import styled from 'styled-components';

interface Props {
  totalCount: number;
  onReset: () => void;
}

export const SearchInfo = ({ totalCount, onReset }: Props) => {
  return (
    <SearchInfoWrapper>
      <SearchInfoText>
        검색결과 총 <span>{totalCount}</span>건
      </SearchInfoText>
      <ResetButton onClick={onReset}>검색 초기화</ResetButton>
    </SearchInfoWrapper>
  );
};

const SearchInfoWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInfoText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.night900};
  span {
    color: ${({ theme }) => theme.colors.mint900};
  }
`;

const ResetButton = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.night900};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-image: url('/ic_reset.svg');
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
