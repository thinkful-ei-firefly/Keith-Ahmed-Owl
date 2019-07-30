import React from 'react';
import Person from './stage_person';
import './stage.css'
function Stage (props) {
    const people = props.list.map(person => 
    <Person name = {person.name} avatar = {person.avatar} 
    inSession = {person.inSession} onStage = {person.onStage} key = {person.id} />);
  return (
    <section class='stage'> 
    {people}
    </section>
  );

}

export default Stage
