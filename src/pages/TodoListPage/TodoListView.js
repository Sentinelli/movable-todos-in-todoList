import React from 'react';

import TodoCard from '../../components/TodoCard/TodoCard';
import './style.css';

const TodoListView = props => {

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
        
      {props.todos.map((item, index) => {
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