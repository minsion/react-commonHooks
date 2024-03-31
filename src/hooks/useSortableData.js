import { useState } from 'react';

// custome hooks, sort data
function useSortableData(initialData, initialKey = 'id', initialDirection = 'asc') {
  const [sortData, setData] = useState(initialData);
  const sortedDataByKey = (initKey, initDirection = 'asc') => {
    const sortedData = [...initialData].sort((a, b) => initDirection === 'asc' ? a[initKey] - b[initKey] : b[initKey] - a[initKey]);
    setData(sortedData);
  };

  return { sortData, sortedDataByKey };
}

export default useSortableData