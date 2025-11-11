import React, { useState } from 'react';
import AddTodo from './AddTodo';

export default function Todo() {

  const [todos, setTodos] = useState([]);
  const addTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };
  const deleteTodo = (indexToDelete)=>{
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  }


  return (
    <div>
        <h2>My Todo List</h2>
        <AddTodo onAdd={addTodo} />
        <ol>
            {
                todos.map((todo, index)=>(
                    <li key={index}>
                        {todo}
                        <button onClick={()=> deleteTodo(index)}>Delete</button>
                    </li>
                ))
            }
        </ol>
      
    </div>
  )
}
