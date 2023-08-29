import React from 'react'
import { useState } from 'react'
import './TodoForm.css'
import {TodoContext} from '../TodoContext/TodoContext'
function TodoForm (){
    const {
        setOpenModal,
        addTodo,

    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)

    }

    const onCancel = ()=>{

        setOpenModal(false)
    }

    const onChange = (e)=>{

        setNewTodoValue(e.target.value)
    }
    

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='crea tu nuevo todo'/>


            <div className='TodoForm-buttonContainer'>
            <button
            onClick={onCancel}
            type='button'
            className='TodoForm-button TodoForm-button--cancel'
            >Cancelar</button>

            <button
            className='TodoForm-button TodoForm-button--add'
            >Añadir</button>
            </div>

        </form>
    )
}

export {TodoForm}