import style from "./style.module.css";
import trash from "../assets/trash.svg";
import { useState } from "react";

let TodoItem = ({ todoItem, todoList, setTodoList }) => {

	let [isChecked, setIsChecked] = useState(false);

	let handleClick = () => {
		setTodoList(todoList.filter((item) => item.id !== todoItem.id));
	};

	return (
		<div className={style.todoItem}>
			<p className={isChecked ? style.todoContentLineThrough : style.todoContent}>
				{todoItem.name}
			</p>

			<div className={style.btnCon}>
				<label className={style.container}>
					<input
						type="checkbox"
						onClick={() => setIsChecked((prev) => (prev = !prev))}
					/>
					<span className={style.checkmark}></span>
				</label>

				<img
					src={trash}
					alt=""
					onClick={handleClick}
					className={style.delete}
				/>
			</div>
		</div>
	);
};

export default TodoItem;
