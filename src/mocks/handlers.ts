import { DefaultBodyType, http, HttpResponse } from 'msw';

import {
  CATEGORY_ITEMS_ITEM_KEYS,
  CONSULT_TABS_ITEM_KEYS,
  CONSULT_TABS_NAME_MAP,
  USAGE_TABS_ITEM_KEYS,
  USAGE_TABS_NAME_MAP,
} from '../common/constants';
import { FAQRequestParams, FAQResponse } from '../common/faq';

import { consultTabs } from './data/category/consult';
import { usageTabs } from './data/category/usage';
import { faqConsultItems } from './data/faq/consult';
import { faqUsageItems } from './data/faq/usage';

const parseLimitOffset = (limit: string, offset: string) => {
  const _limit = parseInt(limit, 10);
  const _offset = parseInt(offset, 10);

  return {
    _limit,
    _offset,
  };
};

export const handlers = [
  http.get<{ category: CATEGORY_ITEMS_ITEM_KEYS }>('/api/category', ({ request }) => {
    const params = new URLSearchParams(request.url.split('?')[1]);
    const category = params.get('category')!;
    if (category === 'CONSULT') {
      return HttpResponse.json(consultTabs);
    }
    if (category === 'USAGE') {
      return HttpResponse.json(usageTabs);
    }
    return HttpResponse.json([]);
  }),
  http.get<FAQRequestParams<CATEGORY_ITEMS_ITEM_KEYS>, DefaultBodyType, FAQResponse>(
    '/api/faq',
    async ({ request }) => {
      const params = new URLSearchParams(request.url.split('?')[1]);
      const limit = params.get('limit')!;
      const offset = params.get('offset')!;
      const tab = params.get('tab')!;
      const question = params.get('question') as FAQRequestParams<CATEGORY_ITEMS_ITEM_KEYS>['question'] | undefined;
      const faqCategoryID = params.get('faqCategoryID') as
        | FAQRequestParams<CATEGORY_ITEMS_ITEM_KEYS>['faqCategoryID']
        | undefined;
      const { _limit, _offset } = parseLimitOffset(limit, offset);

      const getFilteredItems = <K extends CATEGORY_ITEMS_ITEM_KEYS>(
        items: FAQResponse['items'],
        faqCategoryID?: K extends 'CONSULT' ? CONSULT_TABS_ITEM_KEYS : USAGE_TABS_ITEM_KEYS,
        question?: string,
      ) => {
        let filteredItems = items.slice();

        if (faqCategoryID) {
          if (tab === 'CONSULT') {
            filteredItems = filteredItems.filter(
              (item) => item.categoryName === CONSULT_TABS_NAME_MAP[faqCategoryID as CONSULT_TABS_ITEM_KEYS],
            );
          }
          if (tab === 'USAGE') {
            filteredItems = filteredItems.filter(
              (item) => item.categoryName === USAGE_TABS_NAME_MAP[faqCategoryID as USAGE_TABS_ITEM_KEYS],
            );
          }
        }

        if (question) {
          filteredItems = filteredItems.filter(
            (item) =>
              item.question.includes(question) ||
              item.categoryName.includes(question) ||
              item.subCategoryName.includes(question) ||
              item.answer.includes(question),
          );
        }

        return filteredItems;
      };

      if (tab === 'CONSULT') {
        const filteredItems = getFilteredItems(faqConsultItems, faqCategoryID, question);
        return HttpResponse.json({
          pageInfo: {
            limit: _limit,
            offset: _offset,
            totalRecord: filteredItems.length,
            prevOffset: _offset - _limit,
            nextOffset: _offset + _limit,
          },
          items: filteredItems.slice(0, 10),
        });
      }

      if (tab === 'USAGE') {
        const filteredItems = getFilteredItems(faqUsageItems, faqCategoryID, question);
        return HttpResponse.json({
          pageInfo: {
            totalRecord: filteredItems.length,
            offset: _offset,
            limit: _limit,
            prevOffset: _offset - _limit,
            nextOffset: _offset + _limit,
          },
          items: filteredItems.slice(_offset, _offset + _limit),
        });
      }
    },
  ),
];
