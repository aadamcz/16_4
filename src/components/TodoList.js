import React from "react";
import Todo from "./Todo";
import style from "./TodoList.css";

const TodoList = ({ data, remove }) => {
	const todoItems = data.map(todo => {
		return <Todo todo={todo} key={todo.id} remove={remove} />;
	});
	return <div className={style.List}>{todoItems}</div>;
};

export default TodoList;
