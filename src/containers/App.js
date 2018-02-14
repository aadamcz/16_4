import React from "react";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import uuid from "uuid";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	addTodo(val){ //TodoForm, dodawanie nowych elementów
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id){
		const remainder = this.state.data.filter(todo => todo.id !==id);
		this.setState({data:remainder});
	}
	render(){
		return(
			<div className={style.TodoApp}>
				<Title todoNumber={this.state.data.length}/>
				<TodoForm addTodo={this.addTodo.bind(this)}/>
				<TodoList 
					data={this.state.data}
					remove={this.removeTodo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
