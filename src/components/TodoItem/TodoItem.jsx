import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { todoActons } from '../../store/todoSlice';
import { BsFillTrashFill } from "react-icons/bs";

function TodoItem(props) {
  const dispatch = useDispatch()
  const deleteTodo = (id)=>{
    dispatch(todoActons.deleteTodo(id))
  }
  const toggleTodo = (id)=>{
    dispatch(todoActons.toggleMark(id))
  }
  return (
    <li className="todo-item">
      <div className="todo-text">
        <input
          onClick={() => toggleTodo(props.id)}
          defaultChecked={props.isDone}
          type="checkbox"
          name="todo-check"
          id="todo-check"
        />
        <h1 className={`todo-name ${props.isDone ? "checked" : ""}`}>
          {props.task}
        </h1>
      </div>
      <button onClick={() => deleteTodo(props.id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}

export default TodoItem