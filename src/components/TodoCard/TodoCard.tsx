import React, { FC } from 'react'
import Draggable from 'react-draggable';

import './styles.css'
import { TodoCardProps } from './types';

const TodoCard: FC<TodoCardProps> = ({ 
  item,
  index, 
  updatePositionTodo,
  deleteTodo,
}) => {
  return (
    <Draggable
      defaultPosition={item.defaultPos}
      onStop={(_, data) => updatePositionTodo(data, index)}>
        
      <div className="todo__item" style={{ backgroundColor: item.color }}>
        <p className="todo__item-text">{item.text}</p>
        <button className="todo__item-closebtn" onClick={() => deleteTodo(index)}>&times;</button>
      </div>
    </Draggable>
  )
}

export default TodoCard;