import '../css/CreateTodoButton.css'

const openModal = () => {
  const plusBtn = document.querySelector('.plusButton')
  const plus = document.querySelector('.plus')
  
  // console.log('plusBtn', plusBtn.style);

  let bottomValue = plusBtn.style.getPropertyValue('bottom')
  console.log(bottomValue);



  if (bottomValue === '20rem') {
    plusBtn.style.background = 'var(--react-blue)';
    plusBtn.style.boxShadow = '0px 5px 25px 0px var(--react-blue)';
    plusBtn.style.bottom = '0rem'
    plus.style.transform = 'rotate(0)';

    console.log(bottomValue, 'if1', typeof(bottomValue));
  } else {
    plusBtn.style.background = 'var(--icon-delete)';
    plusBtn.style.boxShadow = '0px 5px 25px 0px var(--icon-delete)';
    plusBtn.style.bottom = '20rem'
    plus.style.transform = 'rotate(225deg)';

    
    console.log(bottomValue, 'if2');
  }
  

}

const animationFnt = () => {

}

const animationFntOut = () => {
  
}

function CreateTodoButton() {
  return (
    <button 
      className="plusButton"
      onClick={openModal}
      // onMouseOut={animationFntOut}
      // onMouseOver={animationFnt}
      >
      <div className='plus'>+</div>
    </button>
  )
}

export { CreateTodoButton }