import "./style.css";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
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

	const spring = {
		type: "spring",
		stiffness: 200,
		damping: 10,
		duration: 3,
	};

	useEffect(() => {
		try {
			if (localStorage.getItem("todoTheme") == null) {
				localStorage.setItem("todoTheme", "light");
				setIsDark((ini) => (ini = false));
			} else if (localStorage.getItem("todoTheme") == "dark") {
				setIsDark((ini) => (ini = true));
			} else if (localStorage.getItem("todoTheme") == "light") {
				setIsDark(false);
			}
		} catch (error) {
			console.info("error from setting theme in localstorage");
		}
	}, []);

	useEffect(() => {
		let data = isDark ? "dark" : "light";
		localStorage.setItem("todoTheme", data);
	}, [isDark]);

	return (
		<div className={isDark ? "bodyD" : "bodyL"}>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={spring}
				layout
				className={isDark ? "AppD" : "AppL"}
			>
				<Header isDark={isDark} setIsDark={setIsDark} />
				<Form
					todo={todo}
					setTodo={setTodo}
					todoList={todoList}
					setTodoList={setTodoList}
					setIsErr={setIsErr}
					isDark={isDark}
				/>

				<TodoList todoList={todoList} setTodoList={setTodoList} isDark={isDark} />

				<p>
					{isErr ? (
						<span className={"errMsg"}>Pls fill in a valid task, no empty task allowed</span>
					) : (
						<span className={"info"}>Built by Spider-Guru🕷</span>
					)}
				</p>
			</motion.div>
		</div>
	);
}

export default App;
