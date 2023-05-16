import React, { useState } from 'react';
import unCheck from '../Assets/unCheck.svg';
import checked from '../Assets/Cheked.svg';
import trash from '../Assets/delete.svg';
import '../styles/TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete}) {
  const [isCheck, setIsCheck] = useState(completed ? checked : unCheck);

  const toggleCheck = () => {
    const newCheckImage = isCheck === checked ? unCheck : checked;
    setIsCheck(newCheckImage);
  };
 
  return (
    <div className='TodoItem'>
      <div className='todoLeft'>
        <img src={isCheck} alt="Completado" onClick={() => {
  toggleCheck();
  onComplete();
}} />
        <h1>{text}</h1>
      </div>
      <div className='todoRight'>
        <button>
          <img src={trash} alt="Delete" onClick={onDelete} />
        </button>
      </div>
    </div>
  );
}

export { TodoItem };
