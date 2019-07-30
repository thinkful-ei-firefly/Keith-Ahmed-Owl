import React from 'react';
import './stage_person.css';

function Person(props){
  
    if (props.onStage) {
        return (
            <div className= 'stagePerson'>
                <div className = "stageinfo">
                <h3 className='stageName'>{props.name}</h3>
                <img className='stageImg' src = {props.avatar} />

                </div>
            </div>
        );
    } else {return null}

}

export default Person;