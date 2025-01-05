import styled from 'styled-components';

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  background-image: url('/ic_spinner.svg');
  background-size: 64px;
  background-repeat: no-repeat;
  background-position: center;
  animation: spin 1s linear infinite;
`;
