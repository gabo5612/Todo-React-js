import React, { useContext, useState} from 'react'
import '../styles/InputCreateTodo.css'
import { TodoContext } from '../Hooks/TodoContex'

function InputCreateTodo() {
    const {setOpenModal, addTodo}=useContext(TodoContext)
    const [newTodoValue,setNewTodoValue]=useState('')

    const onSubmit=(event)=>{
            event.preventDefault()
            addTodo(newTodoValue)
            setOpenModal(false)
            
    }
    const onCancel=(event)=>{
        event.preventDefault()
        setOpenModal(false)
}   
const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
    
  return (
    <form className='InputCreateTodo' onSubmit={onSubmit}>
        <label >Write your TODO</label>
        <textarea type="text" value={newTodoValue}  onChange={onChange} />
        <div className='buttonSection'>
        <button className='createTodoButton cancelTodoButton'type='cancel' onClick={onCancel}>Cancel</button>
        <button className='createTodoButton enterTodoButton'type='submit'>Add TODO</button>
        </div>
        </form>
  )
}

export {InputCreateTodo}