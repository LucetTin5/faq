import { useQuery } from '@tanstack/react-query';

import { CATEGORY_ITEMS_ITEM_KEYS, CONSULT_TABS, USAGE_TABS } from '../common/constants';
import { httpRequest } from '../common/httpRequest';

export const useCategory = (tab: CATEGORY_ITEMS_ITEM_KEYS) => {
  const { data, isLoading } = useQuery<typeof CONSULT_TABS | typeof USAGE_TABS>({
    queryKey: ['CATEGORY', tab],
    async queryFn() {
      const searchParams = new URLSearchParams();
      searchParams.set('category', tab);
      const response = await httpRequest.get('/category', { params: searchParams });
      return response.data;
    },
  });
  return { data, isLoading };
};
