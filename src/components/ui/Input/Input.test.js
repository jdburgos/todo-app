/** React core **/
import React from 'react';
import ReactDOM from 'react-dom';

/** Components **/
import Input from './Input';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Input
      className={'test'}
      input={{
        id: 'todo-add',
        type: 'text',
      }}
      error={false}
      onChange={() => {}}
      onKeyUp={() => {}}
    />,
    div,
  );
});
