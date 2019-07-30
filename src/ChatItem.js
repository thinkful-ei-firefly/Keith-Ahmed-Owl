import React from 'react';
import parts from './participants'

function ChatItem(props){
  console.log(props);
  const user = parts[props.participantId - 1];
  console.log(user);
  if (props.type === 'message'){
    const time = new Date(props.timestamp);
    return (
      <div className = "chatItem">
        <img src = {user.avatar} className = "chatImg" />
        <div className = "message">
          <h3>{user.name}</h3>
           <p className = "time">{time.toString()}</p>
          <p>{props.message}</p>
        </div>
      </div>
    );
  } else {
    switch(props.type){
      case 'thumbs-up':
        return (<div className = "message">
          <p className = "log">{user.name} gave a thumbs up</p>
          </div>);
      case 'thumbs-down':
          return (<div className = "message">
          <p className = "log">{user.name} gave a thumbs down</p>
          </div>);
      case 'raise-hand':
          return (<div className = "message">
          <p className = "log">{user.name} raised their hand</p>
          </div>);
      case 'clap':
          return (<div className = "message">
          <p className = "log">{user.name} clapped</p>
          </div>);
      case 'join':
          return (<div className = "message">
          <p className = "log">{user.name} joined</p>
          </div>);
      case 'leave':
          return (<div className = "message">
          <p className = "log">{user.name} left</p>
          </div>);
      case 'join-stage':
          return (<div className = "message">
          <p className = "log">{user.name} joined the stage</p>
          </div>);
      case 'leave-stage':
          return (<div className = "message">
          <p className = "log">{user.name} left the stage</p>
          </div>);
      default:
          return (<div className = "message">
          <p className = "log">{user.name} gave an unsupported type</p>
          </div>);
    }
  }
}

export default ChatItem;