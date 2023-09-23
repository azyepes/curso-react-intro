

const iconColor = {
  color: "hsla(0, 0%, 77%, 1)"
};

function TodoItem( props ) {
    return (
      <li>
        <span><i className={"fa-solid fa-check"}></i></span>
        <p>{props.text}</p>
        <span><i className={"fa-solid fa-pen"}></i></span>
        <span><i className={"fa-solid fa-trash"}></i></span>
      </li>
    );
  }

export  { TodoItem }