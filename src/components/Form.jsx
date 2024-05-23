import { useEffect } from "react";
import style from "./style.module.css";
let Form = ({ setIsErr, todo, setTodo, todoList, setTodoList }) => {
	let handleChange = (e) => {
		setTodo(e.target.value);
	};

	let idGen = () => {
		return Math.round(Math.random() * 10000 * Math.random());
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		if (event.target[0].value == "") {
			setIsErr((prev) => (prev = true));
			return;
		} else {
			setIsErr((prev) => (prev = false));
			setTodoList((prev) => (prev = [...todoList, { item: todo, id: idGen() }]));
			setTodo("");
		}
	};

	let handleLocalStorage = (todolist) => {
		if (localStorage.getItem("react_todo_list") == null) {
			localStorage.setItem("react_todo_list", `${extractTodoItemsFromTodolistArr(todoList)}`);
		}
	};

	let extractTodoItemsFromTodolistArr = (todoList) => {
		let arrOfTodoItems = [];
		Object.values(todoList).map((obj) => arrOfTodoItems.push(obj.item));
		let arrOfTodoItemsToStringFormat = arrOfTodoItems.toString().split().join(" ");
		return arrOfTodoItemsToStringFormat;
	};

	let extractTodoItemsFromLocalStorage = (extractedItems) => {
		return extractedItems.split(",");
	};

	useEffect(() => {

	}, [todoList]);

	return (
		<>
			<form onSubmit={handleSubmit} className={style.form}>
				<input
					placeholder='What are the tasks today?'
					value={todo}
					onChange={handleChange}
					type='text'
					className={style.input}
				/>

				<button type='submit' className={style.submit}>
					{window.innerWidth < 500 ? <span className={style.plus}>&#43;</span> : `Add Task`}
				</button>
			</form>
		</>
	);
};

export default Form;
