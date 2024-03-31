
## install and start
```
yarn install
yarn start
```
In the project directory,Runs the app in the development mode Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

![image](./public/filterTable.png)


## useFilterHooks
useFilterHooks is hooks function，written in react

## main api
```
import React, { useState } from 'react';
 
// 自定义钩子，用于过滤数据
function useFilterableData(initialData) {
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
 
  // 当过滤文本改变时，更新过滤后的数据
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

## Use in fre and react
```
import useFilterableData from '../hooks/useFilterableData'
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
  };

  const thStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const trStyle = (index) => ({
    backgroundColor: index % 2 ? '#f2f2f2' : 'white',
  });

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    fontSize: '16px',
    width: '98%',
  };

function DataTable({ data }) {
  const { filteredData, filterText, handleFilterChange } = useFilterableData(data);
  return (
    <div>
      <input 
        style={inputStyle} 
        type="text" 
        placeholder="Filter" 
        value={filterText}
        onChange={handleFilterChange}
      />
      <table style={tableStyle}>
        <thead>
          <tr key={111}>
            {Object.keys(data[0]).map((key) => (
              <th style={thStyle} key={key}>
                {key} 
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr style={trStyle(index)} key={item.id}>
              {Object.values(item).map((val, idx) => (
                <td style={tdStyle} key={idx}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default DataTable

```


