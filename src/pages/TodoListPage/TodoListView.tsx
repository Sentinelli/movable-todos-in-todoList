import React, { FC } from 'react';

import TodoCard from '../../components/TodoCard/TodoCard';
import { Todo, TodoListViewProps } from './types';

import './style.css';

const TodoListView: FC<TodoListViewProps> = props => {

  return (
    <div className="wrapper">
      <div className="todo__list-content"> 
        <input 
          type="text"
          className="form__field"
          placeholder="Enter something"
          onChange={event => props.onChangeValue(event)}
          value={props.value} />
        <button 
          className="content__btn content__btn--primary content__btn--inside" 
          onClick={props.addTodo}>
          Add todo
        </button>
      </div>
        
      {props.todos.map((item: Todo, index: number) => {
        return (
          <TodoCard 
            key={index}
            item={item} 
            index={index}
            updatePositionTodo={props.updatePositionTodo}
            deleteTodo={props.deleteTodo}
          />
        )
      })}
    </div>
  )
}

export { TodoListView };