import React from "react";
import './TodoCounter.css';

function TodoCounter ({total , completed}){
    return(
      <h1 className="TodoCounter">
        Has Completado {completed} de {total} Todo's
      </h1>
    )
  }

  export  {TodoCounter}