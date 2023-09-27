import "./TodoCounter.css";
// const estilos = {
//     backgroundColor: 'red',
// }

function TodoCounter({ total, completed }) {
  return (
    
      completed < total ?
      <h1 id="titleId" className="title">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
      : total === 0 ?
      <h1 id="titleId" className="title">
        Agrega un nuevo TODO
      </h1>
      : 
      <h1 id="titleId" className="title">
        Felicidades completastes tus TODOS
      </h1>
    
  );
}

export { TodoCounter };
