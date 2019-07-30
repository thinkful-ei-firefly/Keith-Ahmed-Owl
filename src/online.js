import React from 'react';
import Person from './person';

function Online(props){
  const people = props.list.map(person => 
    <Person name = {person.name} avatar = {person.avatar} 
    inSession = {person.inSession} onStage = {person.onStage} key = {person.id} />);
  return (
    <section className = "participants">
     {people}
    </section>
  );
}

export default Online;