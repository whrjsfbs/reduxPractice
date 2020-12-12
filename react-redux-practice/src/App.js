import React from 'react';
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
