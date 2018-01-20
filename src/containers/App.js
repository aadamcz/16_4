import React from "react";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
			id: 1,
    			text: 'clean room'
			}, {
			id: 2,
    			text: 'wash the dishes'
			}, {
			id: 3,
    			text: 'feed my cat'
			}]
		};
	}
	addTodo(val){
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
<<<<<<< HEAD
				<TodoList 
					data={this.state.data}
					remove={this.removeTodo.bind(this)}
				/>
=======
>>>>>>> 04acff0ac107fe62bad4a1cf678cd5ba351c2097
			</div>
		);
	}

}

export default App;
