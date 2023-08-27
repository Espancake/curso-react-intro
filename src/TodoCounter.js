import React from "react";
import './TodoCounter.css';

function TodoCounter ({total , completed}){
  if(completed===total){
    return <h1 style={{ display: 'flex',
      alignItems:"center",

    
    }} > felicitaciones completaste todos los todo's</h1>
  }

    return(
      <h1 className="TodoCounter">
        Has Completado {completed} de {total} Todo's
        
      </h1>
    )
  }

  export  {TodoCounter}