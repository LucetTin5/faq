export const CATEGORY_ITEMS = [
  {
    label: '서비스 도입',
    tab: 'CONSULT',
  },
  {
    label: '서비스 이용',
    tab: 'USAGE',
  },
] as const;
export type CATEGORY_ITEMS_ITEM_KEYS = (typeof CATEGORY_ITEMS)[number]['tab'];

export const CONSULT_TABS = [
  {
    name: '전체',
    categoryID: 'all',
  },
  {
    name: '서비스 상품',
    categoryID: 'PRODUCT',
  },
  {
    name: '도입 상담',
    categoryID: 'COUNSELING',
  },
  {
    name: '계약',
    categoryID: 'CONTRACT',
  },
] as const;
export type CONSULT_TABS_NAME = (typeof CONSULT_TABS)[number]['name'];
export type CONSULT_TABS_ITEM_KEYS = (typeof CONSULT_TABS)[number]['categoryID'];
export const CONSULT_TABS_NAME_MAP = CONSULT_TABS.reduce(
  (prev, cur) => {
    prev[cur.categoryID] = cur.name;
    return prev;
  },
  {} as Record<CONSULT_TABS_ITEM_KEYS, CONSULT_TABS_NAME>,
);

export const USAGE_TABS = [
  {
    name: '전체',
    categoryID: 'all',
  },
  {
    name: '가입문의',
    categoryID: 'SIGN_UP',
  },
  {
    name: '비즈니스(업무용)',
    categoryID: 'BUSINESS',
  },
  {
    name: '사고/보험',
    categoryID: 'ACCIDENT',
  },
  {
    name: '예약/결제',
    categoryID: 'RESERVATION',
  },
  {
    name: '차량문의',
    categoryID: 'VEHICLE',
  },
  {
    name: '충전',
    categoryID: 'REFUEL',
  },
  {
    name: '쿠폰/기타',
    categoryID: 'COUPON',
  },
] as const;
export type USAGE_TABS_ITEM_KEYS = (typeof USAGE_TABS)[number]['categoryID'];
export type USAGE_TABS_NAME = (typeof USAGE_TABS)[number]['name'];
export const USAGE_TABS_NAME_MAP = USAGE_TABS.reduce(
  (prev, cur) => {
    prev[cur.categoryID] = cur.name;
    return prev;
  },
  {} as Record<USAGE_TABS_ITEM_KEYS, USAGE_TABS_NAME>,
);

export const NAV_ITEMS = [
  {
    label: '서비스 소개',
    href: '/Guide',
  },
  {
    label: '자주 묻는 질문',
    href: '/FAQ',
  },
  {
    label: '새소식',
    href: '/News',
  },
  {
    label: '상담문의',
    href: '/Counsel',
  },
] as const;
// type NAV_ITEM_KEYS = typeof NAV_ITEMS[number]['label'];
