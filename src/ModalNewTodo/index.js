import React from 'react'
import './ModalNewTodo.css'
import { createPortal } from 'react-dom'
import { TodoContext } from '../TodoContext'

function ModalNewTodo( { children } ) {
  const { setOpenModal } = React.useContext(TodoContext)

  return createPortal(
    <div  className="modalContainer">
      <div className="modal hide-modal">
        <input type={"text"} placeholder={'Añade un nuevo TODO...'}></input>
        <div className='btnContainer'>
          <button className="closeBtn" onClick={() => setOpenModal(false)} >Cancel</button>
          <button className="addBtn" >Add</button>
        </div>
      </div>
    </div>, 
    document.getElementById('modal')
  )
}

export { ModalNewTodo }

    