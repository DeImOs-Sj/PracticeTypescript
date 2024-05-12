
import { useState } from 'react'
import AddTodoForm from "./Components/AddTodoForm"
import './App.css'
import TodoItem from './Components/TodoItem'
import {dummyData} from "./data/todos"
import TodoList from './Components/TodoList'
 console.log(dummyData)
function App() {

  const [todos, setTodos] = useState(dummyData) 
  function setTodosCompleted(id: number, completed: boolean) {
    // alert(`todo with id ${id} is now ${completed?"completed":"not"}`)
    setTodos((todos) => todos.map(todo => (
      
      todo.id===id ?{...todo,completed}:todo
    )  
        ,    console.log("whats",todos)

    )
      
    )
    
  }
  
  function addTodo(title: string) {
    console.log(setTodos)
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed:false
      },
      ...prevTodos

    ])
  
}

  
  function deleteTodo(id:number) {

    setTodos((prevTodos)=> prevTodos.filter(todo => todo.id !== id))
    
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <h1 className='text-center'>TODO LIST</h1>
     <AddTodoForm onSubmit={addTodo} />

        <TodoList
        
          todos={todos}
          onCompletedChange={setTodosCompleted}
                      onDelete={deleteTodo}

        />
        </div>
</div>
  )
}

export default App
