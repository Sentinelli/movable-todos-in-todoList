import React, { useState, useEffect } from 'react';

import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import { randomColor } from 'randomcolor';

import './style.css';

const TodoList = () => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('CurrentTodos')) || []
    );

    useEffect(() => {
        localStorage.setItem('CurrentTodos', JSON.stringify(todos));
    }, [todos]);

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }

    const addNewTodo = () => {
        if(value !== '') {
            const newTodo = {
                id: uuidv4(),
                text: value,
                color: randomColor({ luminosity: 'light' }),
                defaultPos: {x: -20, y: -100}
            }
            setTodos([...todos, newTodo]);
            setValue('');
        } else {
            alert('The field is not filled');
            setValue('');
        }
    }

    const deleteTodo = (index) => {
        todos.splice(index, 1);
        setTodos([...todos]);
    }

    const updatePositionTodo = (data, index) => {
        let currentTodos = [...todos];
        currentTodos[index].defaultPos = {x: data.x, y: data.y}; 
        setTodos(currentTodos);
    }
   
    return (
        <div className="wrapper">
            <div className="todo__list-content"> 
                <input  className="form__field" type="text" placeholder="Enter something" onKeyPress={() => {}} onChange={(event) => onChangeValue(event)} value={value}></input>
                <button className="content__btn content__btn--primary content__btn--inside" onClick={addNewTodo}>Add todo</button>
            </div>
           
            {todos.map((item, index) => {
                return (
                    <Draggable
                        key={index}
                        defaultPosition={item.defaultPos}
                        onStop={(_, data) => {updatePositionTodo(data, index)}}>
                        
                        <div className="todo__item" style={{backgroundColor: item.color}}>
                            <p className="todo__item-text">{item.text}</p>
                            <button className="todo__item-closebtn" onClick={() =>{deleteTodo(index)}}>&times;</button>
                        </div>
                    </Draggable>
                )
            })}
        </div>
    )
}

export { TodoList };