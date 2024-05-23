import style from "./style.module.css";
import trash from "../assets/trash.svg";
import { useState } from "react";
import { motion } from "framer-motion";

let TodoItem = ({ todoItem, todoList, setTodoList }) => {
	let [isChecked, setIsChecked] = useState(false);

	let handleClick = () => {
		if (todoList.length == 1) {
			setTodoList((prev) => (prev = []));
			localStorage.removeItem("todoList");
		} else {
			setTodoList((prev) => (prev = prev.filter((item) => item.paragraph !== todoItem)));
			console.log(todoList.length);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className={style.todoItem}
		>
			<p className={isChecked ? style.todoContentLineThrough : style.todoContent}>{todoItem}</p>

			<div className={style.btnCon}>
				<label className={style.container}>
					<input type='checkbox' onClick={() => setIsChecked((prev) => (prev = !prev))} />
					<span className={style.checkmark}></span>
				</label>

				<img src={trash} alt='' onClick={handleClick} className={style.delete} />
			</div>
		</motion.div>
	);
};

export default TodoItem;
