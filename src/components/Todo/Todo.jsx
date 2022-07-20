import React from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
  return (
    <div className="todo-app">
      <div className="todo-content">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default Todo