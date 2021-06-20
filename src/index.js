import React from 'react';
import ReactDOM from 'react-dom';

import { TodoList } from './components/todosList';

import './index.css';

ReactDOM.render(
  <>
    <TodoList />
  </>,
  document.getElementById('root')
);