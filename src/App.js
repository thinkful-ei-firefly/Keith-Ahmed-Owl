import React from 'react';
import logo from './logo.svg';
import './App.css';
import Online from './online';
import parts from './participants';
import Stage from './stage';
import ChatBox from './ChatBox';
import chatEvents from './chatEvents';

function App() {
  return (
    <div className = 'parts'>
      <Online list = {parts} />
      <ChatBox list = {chatEvents} />
      <Stage list = {parts} />
    </div>
    
  );
}

export default App;
