import './App.css';
import React from 'react';
import { CreateTodoButton } from './Componets/CreateTodoButton';
import { TodoCounter } from './Componets/TodoCounter';
import { TodoItem } from './Componets/TodoItem';
import { TodoList } from './Componets/TodoList';
import { TodoSearch } from './Componets/TodoSearch';
import { TodoContext, TodoProvider } from './Hooks/TodoContex';
import { Loading } from './Componets/Loading';
import { Modal } from './Componets/Modal';
import {InputCreateTodo} from './Componets/InputCreateTodo';

function App() {
 
  return (
    <TodoProvider>
      <div className="App">
        <TodoContext.Consumer>
          {({
            loading,
            searchedTodos,
            error, 
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal
          })=>(
            <div>
              {!loading? <>
              <TodoSearch />  
              {!searchedTodos.length>0? <></>: <TodoCounter/>}    
                <TodoList>
                  {error && <p>We have an error. Refresh please!</p>}
                  {!loading && !searchedTodos.length>0 && <p>Make your first TODO!</p>}
                  {searchedTodos.map(todo=>(
                    <TodoItem
                    key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=>completeTodos(todo.text)} onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}
                </TodoList>
                <CreateTodoButton/>
                {openModal &&
                  <Modal>
                   <InputCreateTodo/>
                  </Modal>
                }
                </>: <Loading/>}
            </div>
 
          )}
       
            </TodoContext.Consumer>
      </div>
    </TodoProvider>
  );
}


export default App;
