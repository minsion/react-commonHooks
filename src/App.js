import React from 'react'
import DataTable from './components/DataTable'

function App() {
  const userData = [
    { id: '1', name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: '2', name: 'Jane Doe', age: 25, email: 'jane@example.com' },
    { id: '3', name: 'Bob Smith', age: 35, email: 'bob@example.com' },
  ];
  return (
      <div style={{width: "600px", margin: "20px"}}>
        <h1>table filter hooks</h1>
        <DataTable data={userData} />
      </div>
  );
}

export default App;