// import { Component } from "react";
import "../css/TodoCounter.css";
// const estilos = {
//     backgroundColor: 'red',
// }

function TodoCounter({ total, completed, header, setHeader }) {

  // Función para actualizar header
  const UpdateHeader = () => {
    if (total === 0) {
      // let title = `Agrega un nuevo TODO`
      setHeader(`Agrega un nuevo TODO`)
    } else if (completed < total) {
      // let title = `Has completado ${completed} de ${total} TODOs`
      setHeader(`Has completado ${completed} de ${total} TODOs`)
    } else if (completed === total) {
      // let title = `Felicidades`
      setHeader(`Felicidades`)
    }
    return header
  }

  

  return (
    <div className="header">
      <h1 id="titleId" className="title" >
        {/* Has completado <span>{completed}</span> de <span>{total}</span> TODOs */}
        <UpdateHeader />
      </h1>
    </div>
  );
}

export { TodoCounter };