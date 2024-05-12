import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../types/todo';

interface TodoListProps{
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void
    onDelete: (id: number) => void;
}

const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {
  const todosSorted = todos.sort((a, b) => { 
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 :-1
  })
    
  return (

      <>
            <div className='mx-auto text-center'>
        {todosSorted.map((todo) => (
          <TodoItem todo={todo}
            key={todo.id}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete }
          />
          )
        )}
        </div>
      {
        (todos.length === 0 && (
          <p>
            No Todos
          </p>
        ) )
      }
    </>
  )
}

export default TodoList
