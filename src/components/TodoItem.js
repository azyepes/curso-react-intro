import "../css/TodoItem.css";

function TodoItem( { text, completed, onComplete, onDelete } ) {

  return (
    <li>
      <span onClick={onComplete}>
        <i className={`fa-solid fa-check ${completed && "fa-check--complete"}`}></i>
      </span>
      <p className={`todoItem ${completed && "todoItem--complete"}`}>
        {text}
      </p>
      <span>
        <i className={"fa-solid fa-pen"}></i>
      </span>
      <span onClick={onDelete}>
        <i className={"fa-solid fa-trash"}></i>
      </span>
    </li>
  );
}

export { TodoItem };
