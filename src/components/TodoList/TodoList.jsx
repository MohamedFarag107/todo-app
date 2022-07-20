import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const todos = useSelector(state=>state.todos)
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} id = {todo.id} isDone={todo.isDone} task={todo.task} />
        ))
      ) : (
        <li>No Todos</li>
      )}
    </ul>
  );
}

export default TodoList