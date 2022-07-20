import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
}
const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
    addTodo(state,action){
      state.todos.push(action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo(state,action){
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleMark(state,action){
      const toggleTodo = state.todos.find((tood) => tood.id === action.payload)
      toggleTodo.isDone = !toggleTodo.isDone;
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  }
})


export const todoActons = todoSlice.actions

export default todoSlice