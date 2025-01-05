import { useState } from 'react';

import { CONSULT_TABS, USAGE_TABS } from '../../common/constants';

interface Props {
  onTabClick: (
    categoryID: (typeof CONSULT_TABS)[number]['categoryID'] | (typeof USAGE_TABS)[number]['categoryID'],
  ) => void;
}

export const useSelectedCategory = <T extends typeof CONSULT_TABS | typeof USAGE_TABS>({ onTabClick }: Props) => {
  const [selectedCategoryID, setSelectedCategoryID] = useState<T[number]['categoryID']>('all');

  const handleCategoryClick = (categoryID: T[number]['categoryID']) => {
    setSelectedCategoryID(categoryID);
    onTabClick(categoryID);
  };

  return {
    selectedCategoryID,
    handleCategoryClick,
  };
};
