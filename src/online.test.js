import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Online from './online';
import parts from './participants';

describe('<Online />', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Online list = {parts}/>, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div); 
  });
});