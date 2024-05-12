import React from 'react'
import {todoItem} from "../types/todoItem"

const TodoItem = ({ todo,onCompletedChange,onDelete }:todoItem) => {
  return (
      <div className='m-3'>
          <input type="checkbox"
              checked={todo.completed} onChange={(e) => onCompletedChange(todo.id,e.target.checked)}
              className='scale-125' name="" id="" />
      <span className={todo.completed ? "line-through text-gray-800" : ""}>{todo.title}</span>
      
      <button className='mx-3' onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
