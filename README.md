
## install and start
```
yarn install

yarn start
```
Runs the app in the development mode Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 1.useFilterableData api

<img src="./public/filterTable.png" width="50%">

```
import React, { useState } from 'react';
 
// custome hooks, filter data
function useFilterableData(initialData) {
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
 
  // update data when filter text changes
  const handleFilterChange = (event) => {
    const filterText = event.target.value;
    const filteredItems = initialData.filter((item) =>item.name.toLowerCase().includes(filterText.toLowerCase()))
    setFilterText(filterText);
    setFilteredData(filteredItems);
  };
  return { filterText, filteredData, handleFilterChange };
}

export default useFilterableData
```

