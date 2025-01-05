import DOMPurify from 'dompurify';
import styled from 'styled-components';

import { CATEGORY_ITEMS_ITEM_KEYS } from '../../common/constants';
import { FAQItem } from '../../common/faq';

interface FAQProps extends FAQItem {
  category: CATEGORY_ITEMS_ITEM_KEYS;
  isActive: boolean;
  onClick: (id: number) => void;
}

export const FAQ = ({ category, id, categoryName, subCategoryName, question, answer, isActive, onClick }: FAQProps) => {
  return (
    <FAQWrapper>
      <FAQButton $isActive={isActive} onClick={() => onClick(id)}>
        <CategoryName>{categoryName}</CategoryName>
        {category === 'USAGE' && <SubCategoryName>{subCategoryName}</SubCategoryName>}
        <Question>{question}</Question>
      </FAQButton>
      {isActive && <Answer dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer) }} />}
    </FAQWrapper>
  );
};

const FAQWrapper = styled.li`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FAQButton = styled.button<{ $isActive: boolean }>`
  position: relative;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.gray10 : 'transparent')};
  width: 100%;
  height: 76px;
  padding: 0 108px 0 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  &::after {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    background-image: url('/ic_arrow.svg');
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: center;
    right: 24px;
    top: 50%;
    transform: translateY(-50%) rotate(${({ $isActive }) => ($isActive ? '180deg' : '0deg')});
    transition: transform 0.3s ease-in-out;
  }
`;

const CategoryName = styled.div`
  padding: 0 24px;
  width: 208px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const SubCategoryName = styled(CategoryName)`
  width: 168px;
`;

const Question = styled.p`
  padding: 0 24px;
  flex: 1;
  text-align: left;
`;

const Answer = styled.div`
  height: max-content;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray100}`};
  overflow: hidden;
  padding: 32px 40px;
  font-weight: 400;
`;
