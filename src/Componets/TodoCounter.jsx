import React, { useContext } from 'react'
import '../styles/TodoCounter.css'
import { TodoContext } from '../Hooks/TodoContex'
function TodoCounter() {
  const {completedTodos,totalTodos}=useContext(TodoContext)
  return (
    <div className='TodoCounter'>   
      <h1>Has completado {completedTodos} de {totalTodos} TODOS</h1>
    </div>
  )
}

export  {TodoCounter}