import { useEffect } from "react";
import style from "./style.module.css";
import TodoItem from "./todoItem";
let TodoList = ({ todoList, setTodoList }) => {

	return (
		<div className={style.TL}>
			{todoList.length > 0 && todoList.map((todoItem) => (
				<TodoItem
					key={todoItem.key}
					setTodoList={setTodoList}
					todoList={todoList}
					todoItem={todoItem.paragraph}
				/>
			))}
		</div>
	);
};

export default TodoList;
