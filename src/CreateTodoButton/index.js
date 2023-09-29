import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";



// const openModal = () => {
//   const plusBtn = document.querySelector(".plusButton");
//   const plus = document.querySelector(".plus");
//   const modal = document.querySelector(".modal");

//   if (plusBtn.classList[1] === "plusButton--clicked") {
//     plusBtn.classList.remove("plusButton--clicked");
//     plus.classList.remove("plus--clicked");
//     modal.classList.remove("modal-plusButton--clicked");
//     modal.classList.add('hide-modal')
//   } else {
//     plusBtn.classList.add("plusButton--clicked");
//     plus.classList.add("plus--clicked");
//     modal.classList.add("modal-plusButton--clicked");
//     modal.classList.remove('hide-modal')
//   }
// };

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext)
  return (
    <button className="plusButton" onClick={() => setOpenModal(state => !state)}  >
      <div className="plus">+</div>
    </button>
  );
}

export { CreateTodoButton };
