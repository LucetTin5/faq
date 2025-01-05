import styled from 'styled-components';

import {
  CATEGORY_ITEMS_ITEM_KEYS,
  CONSULT_TABS,
  USAGE_TABS,
  CONSULT_TABS_ITEM_KEYS,
  USAGE_TABS_ITEM_KEYS,
} from '../../common/constants';
import { FAQItem } from '../../common/faq';

import { FAQ } from './FAQ';
import { Loading } from './Loading';
import { NotFound } from './NotFound';
import { useSelectedCategory } from './useSelectedCategory';
import { useSelectedFAQ } from './useSelectedFAQ';

interface Props {
  category: CATEGORY_ITEMS_ITEM_KEYS;
  categoryData: typeof CONSULT_TABS | typeof USAGE_TABS;
  data: FAQItem[];
  hasNextPage: boolean;
  isLoading: boolean;
  onTabClick: (key: CONSULT_TABS_ITEM_KEYS | USAGE_TABS_ITEM_KEYS) => void;
  fetchNextPage: () => void;
}

export const FAQTabs = ({ category, categoryData, data, hasNextPage, onTabClick, fetchNextPage, isLoading }: Props) => {
  const { selectedCategoryID, handleCategoryClick } = useSelectedCategory<typeof categoryData>({
    onTabClick,
  });
  const { selectedFAQId, handleFAQClick } = useSelectedFAQ();
  return (
    <>
      <FAQTabsWrapper>
        <Tab $isActive={selectedCategoryID === 'all'} onClick={() => handleCategoryClick('all')}>
          <TabInput value="all" />
          전체
        </Tab>
        {categoryData.map((category) => (
          <Tab
            key={category.categoryID}
            $isActive={category.categoryID === selectedCategoryID}
            onClick={() => handleCategoryClick(category.categoryID)}
          >
            <TabInput value={category.categoryID} />
            {category.name}
          </Tab>
        ))}
      </FAQTabsWrapper>
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <FAQContentWrapper>
            {data.map((item) => (
              <FAQ
                category={category}
                key={item.id}
                {...item}
                isActive={item.id === selectedFAQId}
                onClick={handleFAQClick}
              />
            ))}
          </FAQContentWrapper>
          {hasNextPage && (
            <NextButton onClick={fetchNextPage}>
              <Icon />
              더보기
            </NextButton>
          )}
        </>
      )}
    </>
  );
};

const FAQTabsWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 8px;
`;

const Tab = styled.label<{ $isActive: boolean }>`
  position: relative;
  cursor: pointer;
  display: flex;
  min-width: 72px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.mint900 : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  font-size: 18px;
  font-weight: 600;
`;

const TabInput = styled.input.attrs({ type: 'radio', name: 'filter' })`
  display: none;
`;

const FAQContentWrapper = styled.ul`
  width: 100%;
  border-top: 2px solid black;
`;

const NextButton = styled.button`
  margin: 40px auto 0 auto;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
`;

const Icon = styled.i`
  position: relative;
  width: 14px;
  height: 14px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: black;
  }
  &::before {
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &::after {
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
