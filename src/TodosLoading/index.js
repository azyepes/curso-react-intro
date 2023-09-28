import React from 'react'
import './TodosLoading.css'

function TodosLoading( { todos } ) {

  return (
    <React.Fragment>
      {Array.from( { length: todos }, (_, index) => (
        <li className="list" key={index}>
          <i className="fa-solid fa-spinner fa-spin" style={{color: "#7d7d7d"}}></i>
        </li>
      ))}
    </React.Fragment>
  )
}

export { TodosLoading }

