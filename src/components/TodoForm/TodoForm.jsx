import React, { useRef } from "react";
import { MdLibraryAddCheck } from "react-icons/md";
import { useDispatch } from "react-redux/es/exports";
import { todoActons } from "../../store/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todoRef = useRef();
  const addTodo = () => {
    const todoValue = todoRef.current.value;
    if (todoValue) {
      const d = new Date();
      let key = d.getTime();
      dispatch(todoActons.addTodo({ id: key, isDone: false, task: todoValue }));

    }
  };
  return (
    <div className="todo-form">
      <input ref={todoRef} type="text" name="todo" id="todo" />
      <button onClick={addTodo}>
        <MdLibraryAddCheck />
      </button>
    </div>
  );
};

export default TodoForm;
