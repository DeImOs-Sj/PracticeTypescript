
import './App.css'
import TodoItem from './Components/TodoItem'
import {dummyData} from "./data/todos"
 console.log(dummyData)
function App() {

  function setTodosCompleted(id: number, completed: boolean) {
    alert(`todo with id ${id} is now ${completed?"completed":"not"}`)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <h1 className='text-center'>TODO LIST</h1>
      <div className='mx-auto text-center'>
        {dummyData.map((todo) => (
          <TodoItem todo={todo}
            key={todo.id}
            onCompletedChange={setTodosCompleted} />
          )
        )}
        </div>
        </div>
</div>
  )
}

export default App
