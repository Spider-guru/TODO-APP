import "./style.css";
import trash from "../assets/trash.svg";
import { useState } from "react";
import { motion } from "framer-motion";

let TodoItem = ({ todoItem, todoList, setTodoList, index, isDark }) => {
	let [isChecked, setIsChecked] = useState(false);

	let handleClick = () => {
		if (todoList.length == 1) {
			setTodoList((prev) => (prev = []));
			localStorage.removeItem("todoList");
		} else {
			setTodoList((prev) => (prev = prev.filter((item) => item.key !== index)));
			console.log(todoList);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit={{ opacity: 0, scale: 0.7 }}
			className={isDark ? "todoItem todoItemD" : "todoItem todoItemL"}
		>
			<p className={isChecked ? "todoContentLineThrough" : "todoContent"}>{todoItem}</p>

			<div className={"btnCon"}>
				<label className={"container"}>
					<input type='checkbox' onClick={() => setIsChecked((prev) => (prev = !prev))} />
					<span className={"checkmark"}></span>
				</label>

				<img src={trash} alt='' onClick={handleClick} className={"delete"} />
			</div>
		</motion.div>
	);
};

export default TodoItem;
