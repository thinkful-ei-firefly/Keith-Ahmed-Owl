import React from 'react';
import logo from './logo.svg';
import './App.css';
import Online from './online';
import parts from './participants';

function App() {
  return (
    <div className = 'parts'>
      <Online list = {parts} />
    </div>
  );
}

export default App;
