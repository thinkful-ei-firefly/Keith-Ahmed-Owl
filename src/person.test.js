import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Person from './person';

describe('<Person />', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Person name = {'person.name'} avatar = {'person.avatar'} inSession = {true} onStage = {true} key = {'person.id'}/>, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div); 
  });
});