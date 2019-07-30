import React from 'react';
import './person.css';

function Person(props){
  console.log(props);
  let status = '';
  if (props.onStage)
    status = 'on stage';
  else 
    status = 'in session'
  if (props.inSession){
    return (
     <div className= "person">
       < img className = 'img-person'
       src = {
         props.avatar
       }
       />
       <div className = "info">
         <h3>{props.name}</h3>
         <p><img className = "dot"/>{status}</p>
       </div>
     </div>
    );
  } else {
    return null;
  }
}

export default Person;