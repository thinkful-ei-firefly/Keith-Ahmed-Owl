import React from 'react';
import logo from './logo.svg';
import './App.css';
import Online from './online';
import parts from './participants';
import Stage from './stage';

function App() {
  return (
    <div className = 'parts'>
      <Online list = {parts} />
      <Stage list = {parts} />
    </div>
    
  );
}

export default App;
