import { useState } from 'react';

export const useSelectedFAQ = () => {
  const [selectedFAQId, setSelectedFAQId] = useState<number | null>(null);

  const handleFAQClick = (id: number) => {
    if (selectedFAQId === id) {
      setSelectedFAQId(null);
    } else {
      setSelectedFAQId(id);
    }
  };

  return { selectedFAQId, handleFAQClick };
};
