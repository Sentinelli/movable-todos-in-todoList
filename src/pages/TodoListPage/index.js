import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { randomColor } from 'randomcolor';

import { TodoListView } from './TodoListView';
import './style.css';

const TodoListContainer = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('CurrentTodos')) || []
  );

  const onChangeValue = event => setValue(event.target.value);

  const addTodo = () => {
    if (value) {
      const newTodo = {
        id: uuidv4(),
        text: value,
        color: randomColor({ luminosity: 'light' }),
        defaultPos: { x: -20, y: -100 }
      }
      setTodos([...todos, newTodo]);
    } else {
      alert('The field is not filled');
    }
    setValue('');
  };

  const deleteTodo = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const updatePositionTodo = (data, index) => {
    const currentTodos = [...todos];
    currentTodos[index].defaultPos = { x: data.x, y: data.y }; 
    setTodos(currentTodos);
  };

  useEffect(() => {
    localStorage.setItem('CurrentTodos', JSON.stringify(todos));
  }, [todos]);
   
  return (
    <TodoListView
      value={value}
      todos={todos}

      addTodo={addTodo}
      deleteTodo={deleteTodo}
      onChangeValue={onChangeValue}
      updatePositionTodo={updatePositionTodo}
    />
  )
}

export { TodoListContainer };