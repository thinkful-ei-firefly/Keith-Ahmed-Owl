import ChatItem from './ChatItem';
import React from 'react';
import './ChatBox.css';

function ChatBot(props){
  const messages = props.list.map(msg => 
    <ChatItem type = {msg.type} participantId = {msg.participantId}
    message = {msg.message} timestamp = {msg.timestamp} key = {msg.timestamp} />
  );
  return(
    <section className = "Chat">
      {messages}
    </section>
  );
}

export default ChatBot;