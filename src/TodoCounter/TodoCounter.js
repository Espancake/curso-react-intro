import React from "react";
import { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter (){
  const {
    completedTodos,
    totalTodos
  } = useContext(TodoContext)

    return(
      <h1 className="TodoCounter">
        Has Completado {completedTodos} de {totalTodos} Todo's
        
      </h1>
    )
  }

  export  {TodoCounter}