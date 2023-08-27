import React from 'react';
import { useState } from 'react';
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  

  const defaultTodos = [
    { text: 'cortar cebolla', completed: true,},
    { text: 'Tomar el curso de intro a React.js', completed: false,},
    { text: 'Llorar con la Llorona', completed: false,},
    { text: 'LA la land', completed: false,},
    { text: 'usar estados derivados', completed: true,}
  ]

  const [searchValue, setSearchValue]= useState('')
  const [todos, setTodos] = useState(defaultTodos)

  const completedTodos= todos.filter(todo=> !!todo.completed).length
  const totalTodos= todos.length;

  const searchedTodos = todos.filter(
      (todo)=>{
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
      }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList>
            {searchedTodos.map((todo)=>(
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.text)}
              onDelete={()=> deleteTodo(todo.text)}
              />
            ))}
        </TodoList>
        <CreateTodoButton/>
    </React.Fragment>
)}




export default App;
