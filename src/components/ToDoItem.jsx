import React from "react";

function ToDoItem(props) {
    
  return <li onMouseDown={ () => {
    props.onChecked(props.id);
  }}> {props.text} </li>

}

export default ToDoItem;




