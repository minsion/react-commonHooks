import { useState } from 'react';
// common hooks for filtering data
function useFilterableData(initialData) {
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
 
  // when filter text change, update filtered data
  const handleFilterChange = (event) => {
    const filterText = event.target.value;
    const filteredItems = initialData.filter((item) =>item.name.toLowerCase().includes(filterText.toLowerCase()))
    setFilterText(filterText);
    setFilteredData(filteredItems);
  };
  return { filterText, filteredData, handleFilterChange };
}

export default useFilterableData