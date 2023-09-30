import React from 'react'
import './ModalNewTodo.css'
import { createPortal } from 'react-dom'
import { TodoContext } from '../TodoContext'

function ModalNewTodo() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext)
  const [ newTodoValue, setNewTodoValue ] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setOpenModal(false)  
    addTodo(newTodoValue)
  }

  const onCancel = () => {setOpenModal(false)}

  const onChange = (event) => {setNewTodoValue(event.target.value)}

  return createPortal(
    <div  className="modalContainer">
      <form 
        className="modal hide-modal" 
        onSubmit={onSubmit} 
      >
        <textarea 
          className="textarea" 
          placeholder={'Añade un nuevo TODO...'}
          value={newTodoValue}
          onChange={onChange}
        ></textarea>
        <div className='btnContainer'>
          <button type="button" className="closeBtn" onClick={onCancel} >Cancelar</button>
          <button type="submit" className="addBtn" >Añadir</button>
        </div>
      </form>
    </div>, 
    document.getElementById('modal')
  )
}

export { ModalNewTodo }

    