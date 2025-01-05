import styled from 'styled-components';

import { NAV_ITEMS } from '../../common/constants';

export const Nav = () => {
  // 현재 활성화된 메뉴 아이템
  // const [activeItem, setActiveItem] = useState<NAV_ITEM_KEYS | null>("자주 묻는 질문");

  return (
    <NavWrapper>
      <NavList>
        {NAV_ITEMS.map((item) => (
          <NavItemWrapper key={item.label}>
            <NavItem href={item.href} $isActive={item.label === '자주 묻는 질문'}>
              {item.label}
            </NavItem>
          </NavItemWrapper>
        ))}
      </NavList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
`;

/* Nav on wide */
const NavList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const NavItemWrapper = styled.li`
  display: flex;
  height: 100%;
  margin: 0 16px;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.a<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 4px;
  height: 100%;
  font-weight: 600;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.mint900 : 'transparent')};
  }
`;
