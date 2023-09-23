import '../css/TodoCounter.css'
// const estilos = {
//     backgroundColor: 'red',
// }

function TodoCounter({ total, completed }) {
    return (
      <div className='header'>
        <h1>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
      </div>
    );
  }

  export { TodoCounter }