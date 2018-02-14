import React from "react";
import FontAwesome from "react-fontawesome";

const TodoForm = ({ addTodo }) => {
    let input;

    return (
        <form
            className="style"
            onSubmit={e => {
            e.preventDefault();

            if (input.value !== "") {
            addTodo(input.value);
            input.value = "";
            }
        }}>
            <input ref={el => { input = el;}}
                placeholder="Enter a todo"/>       
            <button type="submit"><FontAwesome className="FontAwesome" name="plus" /></button> 
        </form>
  );
};

export default TodoForm;
