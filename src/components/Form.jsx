import { useEffect } from "react";
import style from "./style.module.css";
import { idGen, extractTodoItemsFromLocalStorage, saveToLocalStorage } from "../utilities";
let Form = ({ setIsErr, todo, setTodo, todoList, setTodoList }) => {
	let handleChange = (e) => {
		setTodo(e.target.value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		if (event.target[0].value == "") {
			setIsErr((prev) => (prev = true));
			return;
		} else {
			setIsErr((prev) => (prev = false));
			setTodoList((prev) => (prev = [...todoList, { paragraph: todo, key: `${idGen()}` }]));
			setTodo("");
		}
	};

	useEffect(() => {
		if (todoList.length !== 0) {
			saveToLocalStorage(todoList);
		}
	}, [todoList]);

	useEffect(() => {
		if (
			localStorage.getItem("todoList") !== null &&
			localStorage.getItem("todoList").length !== 0
		) {
			console.log("hello");
			console.log(localStorage.getItem("todoList"));
			let data = localStorage.getItem("todoList");
			let extractedData = extractTodoItemsFromLocalStorage(data);
			setTodoList((p) => (p = extractedData));
		}
	}, []);

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
