import { useInfiniteQuery } from '@tanstack/react-query';

import { CATEGORY_ITEMS_ITEM_KEYS, CONSULT_TABS_ITEM_KEYS, USAGE_TABS_ITEM_KEYS } from '../common/constants';
import { FAQResponse } from '../common/faq';
import { httpRequest } from '../common/httpRequest';

interface Props {
  tab: CATEGORY_ITEMS_ITEM_KEYS;
  question?: string;
  faqCategoryID?: USAGE_TABS_ITEM_KEYS | CONSULT_TABS_ITEM_KEYS;
  isSubmitting?: boolean;
}

export const useFAQ = ({ tab, question, faqCategoryID, isSubmitting }: Props) => {
  const { data, isLoading, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery<FAQResponse>({
    queryKey: ['faq', tab, faqCategoryID],
    async queryFn({ pageParam = 0 }) {
      let queryString = `limit=10&offset=${pageParam}&tab=${tab}`;
      if (question) {
        queryString += `&question=${question}`;
      }
      if (faqCategoryID && faqCategoryID !== 'all') {
        queryString += `&faqCategoryID=${faqCategoryID}`;
      }
      const response = await httpRequest.get<FAQResponse>(`/faq?${queryString}`);
      return response.data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.nextOffset + lastPage.pageInfo.limit >= lastPage.pageInfo.totalRecord) {
        return undefined;
      }
      return lastPage.pageInfo.nextOffset;
    },
    initialPageParam: 0,
    enabled: !!tab && !!isSubmitting,
  });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
};
