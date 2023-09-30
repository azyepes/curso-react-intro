import React from "react";
import "./TodoItem.css";
import { TodoContext } from "../TodoContext";

function TodoItem( { text, completed, onComplete, onDelete } ) {
  const { onEdit, onSaveEdit, editContent } = React.useContext(TodoContext)
  

  return (
    <li className="list">
      <span onClick={onComplete}>
        <i className={`fa-solid fa-check ${completed && "fa-check--complete"}`}></i>
      </span>
      <p 
        id="myP"
        suppressContentEditableWarning={true}
        contentEditable={editContent}
        className={`todoItem ${completed && "todoItem--complete"} ${editContent && 'todoItem--editable'}`} 
      >
        {text}
      </p>
      <span onClick={()=>{onEdit(text)}} >
        <i className={"fa-solid fa-pen"}></i>
      </span>
      <span onClick={editContent ? ()=>{onSaveEdit(text)} : onDelete}>
        <i className={`fa-solid ${editContent ? "fa-floppy-disk" : "fa-trash"}`}></i>
      </span>
    </li>
  );
}

export { TodoItem };