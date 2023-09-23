import '../css/TodoSearch.css'

function TodoSearch() {
  return (
    <div className='search-bar'>
      <input type={"search"} placeholder={"Buscar TODO..."}></input>
    </div>
  )
}

export { TodoSearch }