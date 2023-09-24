// import React from 'react' <i className={"fa-solid fa-circle-plus"}></i>

const openModal = () => {
  const plusBtn = document.querySelector('.plusButton')
  const plus = document.querySelector('.fa-plus')

  if (plusBtn.style.bottom === '0rem') {

    plusBtn.style.bottom = '20rem';
    plusBtn.style.backgroundColor = 'hsla(0, 99%, 59%, 1)';
    plusBtn.style.boxShadow = '0px 5px 25px 0px hsla(0, 99%, 59%, 1)'

    plus.style.transform = 'rotate(225deg)'
    plus.style.color = 'hsla(0, 0%, 98%, 1)'

  } else {

    plusBtn.style.backgroundColor = 'hsla(193, 94%, 68%, 1)'
    plus.style.transform = 'rotate(0deg)'
    plusBtn.style.bottom = '0rem';
    plusBtn.style.boxShadow = '0px 5px 25px 0px hsla(193, 94%, 68%, 0.5)'
  }

}

const animationFnt = () => {
  const plusBtn = document.querySelector('.plusButton')
  const plus = document.querySelector('.fa-plus')

  plusBtn.style.height = '6.5rem'
  plus.style.fontSize = '4rem';
  plus.style.fontWeight = '700';

}

const animationFntOut = () => {
  const plusBtn = document.querySelector('.plusButton')
  const plus = document.querySelector('.fa-plus')

  plusBtn.style.height = '6rem';
  plus.style.fontSize = '2.5rem';
  plus.style.fontweight = '400';
}

function CreateTodoButton() {
  return (
    <button 
      className="plusButton"
      onClick={openModal}
      onMouseOut={animationFntOut}
      onMouseOver={animationFnt}>
      <i className="fa-solid fa-plus"></i>
    </button>
  )
}

export { CreateTodoButton }