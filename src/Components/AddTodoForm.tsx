import React, { useState } from 'react'

interface AddTodoProps{
    onSubmit:(title:string)=>void
}

const AddTodoForm = ({ onSubmit}:AddTodoProps) => {

    const [input, setInput] = useState("")
// In the handleSubmit function, correct the condition
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return; 

    onSubmit(input);
    setInput("");
}


  return (
    <div>
          <form action=""  className='border  border-emerald-300' onSubmit={handleSubmit}>
              <input type="text" onChange={(e) => { setInput(e.target.value)} } value={input} name="" id="" />
              <button className='bg-black text-white'>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
