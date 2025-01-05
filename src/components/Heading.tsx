import styled from 'styled-components';

export const Heading = () => {
  return (
    <HeadingWrapper>
      자주 묻는 질문
      <span>궁금하신 내용을 빠르게 찾아보세요.</span>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.h1`
  width: 100%;
  margin: 0 auto;
  font-size: 56px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: 400;
  }
  padding: 56px 0;
`;
