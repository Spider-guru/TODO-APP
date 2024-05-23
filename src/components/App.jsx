import style from "./style.module.css";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import { motion } from "framer-motion";
/*
features to be added:
1. Light and dark mode with persistent storage
2. animations on startup, components unload and component load
3. Improve design and font
*/

function App() {
	let [todo, setTodo] = useState("");
	let [todoList, setTodoList] = useState([]);
	let [isErr, setIsErr] = useState(false);
	let [isDark, setIsDark] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 2 }}
			className={style.App}
		>
			<Header isDark={isDark} setIsDark={setIsDark} />

			<Form
				todo={todo}
				setTodo={setTodo}
				todoList={todoList}
				setTodoList={setTodoList}
				setIsErr={setIsErr}
			/>

			<TodoList todoList={todoList} setTodoList={setTodoList} />

			<p>
				{isErr ? (
					<span className={style.errMsg}>Pls fill in a valid task, no empty task allowed</span>
				) : (
					<span className={style.info}>Built by Spider-Guru🕷</span>
				)}
			</p>
		</motion.div>
	);
}

export default App;

