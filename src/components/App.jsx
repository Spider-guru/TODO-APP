import style from "./style.module.css";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
	let [todo, setTodo] = useState("");
	let [todoList, setTodoList] = useState([]);
	let [isErr, setIsErr] = useState(false);

	return (
		<div className={style.App}>
			<Header />

			<Form
				todo={todo}
				setTodo={setTodo}
				todoList={todoList}
				setTodoList={setTodoList}
				setIsErr={setIsErr}
			/>

			<TodoList
				todoList={todoList}
				setTodoList={setTodoList}
			/>

			<p>
				{isErr ? (
					<span className={style.errMsg}>
						Pls fill in a valid task, no empty task allowed
					</span>
				) : (
					<span className={style.info}>Built by Spider-Guru🕷</span>
				)}
			</p>
		</div>
	);
}

export default App;
