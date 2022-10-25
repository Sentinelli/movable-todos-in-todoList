import React, { FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { randomColor } from 'randomcolor';

import { TodoListView } from './TodoListView';
import { EventProps, Position, Todo } from './types';
import './style.css';

const TodoListContainer: FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<any>(
    JSON.parse(localStorage.getItem('CurrentTodos')) || []
  );

  const onChangeValue = (event: EventProps ) => setValue(event.target.value);

  const addTodo = () => {
    if (!value) {
      alert('The field is not filled');
      return;
    }
   
    const newTodo: Todo = {
      id: uuidv4(),
      text: value,
      color: randomColor({ luminosity: 'light' }),
      defaultPos: { x: -20, y: -100 }
    }

    setTodos([...todos, newTodo])
    setValue('');
  };

  const deleteTodo = (index: number) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const updatePositionTodo = (data: Position, index: number) => {    
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