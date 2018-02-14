import React from "react";
import FontAwesome from "react-fontawesome";

const Todo = ({todo, remove}) => {
  	return (
  		<div className="style">
	  		<li>{todo.text}
	  		</li><button onClick={() => {remove(todo.id)}}><FontAwesome name="trash-alt"/></button>
  		</div>
  	);
};

export default Todo;