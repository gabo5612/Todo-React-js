import React, { useContext } from 'react'
import searchIcon from '../Assets/search.svg'
import '../styles/TodoSearch.css'
import { TodoContext } from '../Hooks/TodoContex'
function TodoSearch() {

  const {searchValue, setSearchValue}=useContext(TodoContext)
const handleInputChange=(event)=>{
  setSearchValue(event)
  console.log(searchValue)
}
  return (
    <div className='TodoSearch'>
      <input type="text" value={searchValue} placeholder="Search Todo's" 
      onChange={(event)=> handleInputChange(event.target.value)}
      />
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    
    </div>
  )
}

export {TodoSearch}