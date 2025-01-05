import styled from 'styled-components';

import { CATEGORY_ITEMS, CATEGORY_ITEMS_ITEM_KEYS } from '../common/constants';

interface ServiceTabProps {
  currentTab: CATEGORY_ITEMS_ITEM_KEYS;
  onTabClick: (tab: CATEGORY_ITEMS_ITEM_KEYS) => void;
}

export const ServiceTab = ({ currentTab, onTabClick }: ServiceTabProps) => {
  const handleTabClick = (tab: CATEGORY_ITEMS_ITEM_KEYS) => {
    onTabClick(tab);
  };
  return (
    <ServiceTabWrapper>
      {CATEGORY_ITEMS.map((item) => (
        <ServiceTabButton key={item.tab} $isActive={item.tab === currentTab} onClick={() => handleTabClick(item.tab)}>
          {item.label}
        </ServiceTabButton>
      ))}
    </ServiceTabWrapper>
  );
};

const ServiceTabWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  margin-bottom: 60px;
`;

const ServiceTabButton = styled.button<{ $isActive: boolean }>`
  flex: 1;
  height: 100%;
  border: 1px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.night900 : theme.colors.night100)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.night900 : theme.colors.white)};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.white : theme.colors.night900)};
  font-size: 20px;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
`;
