import styled from 'styled-components';

const GUIDE_STEPS = [
  {
    title: '문의 등록',
    content: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
    imgSrc: '/ic_process01.svg',
  },
  {
    title: '관리자 설정',
    content: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
    imgSrc: '/ic_process02.svg',
  },
  {
    title: '임직원 가입',
    content: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
    imgSrc: '/ic_process03.svg',
  },
  {
    title: '서비스 이용',
    content: '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
    imgSrc: '/ic_process04.svg',
  },
];

export const Guide = () => {
  return (
    <GuideWrapper>
      <Title>이용 프로세스 안내</Title>
      <StepWrapper>
        {GUIDE_STEPS.map((step, index) => (
          <Step key={index}>
            <StepImage src={step.imgSrc} />
            <StepTitle>
              {index + 1}. {step.title}
            </StepTitle>
            <StepContent>{step.content}</StepContent>
          </Step>
        ))}
      </StepWrapper>
    </GuideWrapper>
  );
};

const GuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 64px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 24px;
`;

const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Step = styled.div`
  position: relative;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  &:not(:first-child):before {
    position: absolute;
    content: '';
    background-image: url('/ic_step_arrow.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
    width: 24px;
    height: 24px;
    top: 50%;
    left: -12px;
  }
`;

const StepImage = styled.img`
  width: 56px;
  height: 56px;
`;

const StepTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const StepContent = styled.p`
  font-size: 16px;
`;
