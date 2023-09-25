import '../css/ModalNewTodo.css'

function ModalNewTodo() {
  return (
    <div className="modal">
      <input type={"text"} placeholder={'Añade un nuevo TODO...'}></input>
      <button className="addBtn">+</button>
    </div>
  )
}

export { ModalNewTodo }