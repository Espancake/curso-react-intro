import React from 'react';
import { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch( ) {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext)

  return (
    <input
      placeholder="Nuevo Todo"
      className="TodoSearch"
      value={searchValue} 
      onChange={(e)=>{
        setSearchValue(e.target.value)
      }}
    />
  );
}

export { TodoSearch };