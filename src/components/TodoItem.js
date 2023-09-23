import '../css/TodoItem.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// icon({name: 'user', family: 'classic', style: 'solid'})

{/* <FontAwesomeIcon icon={solid("check")} /> */}

function TodoItem( props ) {
    return (
      <li>
        <span>V</span>
        <p>{props.text}</p>
        <span>E</span>
        <span>X</span>
      </li>
    );
  }

export  { TodoItem }