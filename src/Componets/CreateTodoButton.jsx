import React, { useContext } from 'react'
import addTodo from '../Assets/add.svg'
import '../styles/CreateTodoButton.css'
import { TodoContext } from '../Hooks/TodoContex'
function CreateTodoButton() {
  const {setOpenModal}=useContext(TodoContext)
  const handleCreateButton=()=>{
    setOpenModal((state)=>!state)
  }
  return (
    <div className='CreateTodoButton'>
    <button onClick={handleCreateButton}><img src={addTodo} alt="Add Todo"/></button>
    </div>
  )
}

export {CreateTodoButton}