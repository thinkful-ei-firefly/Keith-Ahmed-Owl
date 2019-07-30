import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ChatBox from './Chatbox';
import participants from './participants';
import chatEvents from './chatEvents'

describe('<ChatBox />', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ChatBox list ={chatEvents} />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div); 
  });
});

// describe('<ChatBox />', () => {
//   it('Renders this UI as expected', () => {
//     const tree = renderer.create(<ChatBox />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });