import {
  CATEGORY_ITEMS_ITEM_KEYS,
  CONSULT_TABS_ITEM_KEYS,
  CONSULT_TABS_NAME,
  USAGE_TABS_ITEM_KEYS,
  USAGE_TABS_NAME,
} from './constants';

export interface FAQCategory {
  categoryId: number;
  name: string;
}

export interface FAQItem {
  id: number;
  categoryName: CONSULT_TABS_NAME | USAGE_TABS_NAME;
  subCategoryName: string;
  question: string;
  /**
   * html 형식으로 지정되어 있음
   */
  answer: string;
}

export interface PageInfo {
  totalRecord: number;
  offset: number;
  limit: number;
  prevOffset: number;
  nextOffset: number;
}

export interface FAQRequestParams<K extends CATEGORY_ITEMS_ITEM_KEYS> {
  limit: string;
  offset: string;
  tab: K;
  question?: string;
  faqCategoryID?: K extends 'CONSULT' ? CONSULT_TABS_ITEM_KEYS : USAGE_TABS_ITEM_KEYS;
}

export interface FAQResponse {
  pageInfo: PageInfo;
  items: FAQItem[];
}
