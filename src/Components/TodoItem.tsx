import React from 'react'
import {todoItem} from "../types/todoItem"

const TodoItem = ({ todo,onCompletedChange }:todoItem) => {
  return (
      <div className=''>
          <input type="checkbox"
              checked={todo.completed} onChange={(e) => onCompletedChange(todo.id,e.target.checked)}
              className='scale-125' name="" id="" />
          <span className={todo.completed ? "line-through text-gray-800" :""}>{todo.title}</span>
    </div>
  )
}

export default TodoItem
