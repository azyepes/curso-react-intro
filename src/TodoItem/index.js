import React from "react";
import "./TodoItem.css";
import { TodoContext } from "../TodoContext";

function TodoItem( { text, completed, onComplete, onDelete } ) {
  const { onEdit, onSaveEdit, editContent } = React.useContext(TodoContext)
  

  return (
    <li className="list">
      <button onClick={onComplete}>
        <i className={`fa-solid fa-check ${completed && "fa-check--complete"}`}></i>
      </button>
      <p 
        id="myP"
        suppressContentEditableWarning={true}
        contentEditable={false}
        className={`todoItem ${completed && "todoItem--complete"} `}  //${editContent && 'todoItem--editable'}
      >
        {text}
      </p>
      <button 
        onClick={()=>{onEdit(text)}} 
        disabled={editContent}  
        >
        <i 
          className={"fa-solid fa-pen"}
          ></i>
         
      </button>
      <button 
        // disabled={editContent}  
        onClick={editContent ? ()=>{onSaveEdit(text)} : onDelete}>
        <i className={`fa-solid fa-trash`} //${editContent ? "fa-floppy-disk" : "fa-trash"}
        ></i>
      </button>
    </li>
  );
}

export { TodoItem };