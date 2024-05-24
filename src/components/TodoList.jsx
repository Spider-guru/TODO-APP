import { useEffect } from "react";
import "./style.css";
import TodoItem from "./todoItem";
import { AnimatePresence } from "framer-motion";
let TodoList = ({ todoList, setTodoList, isDark }) => {
	return (
		<div className={"TL"}>
			<AnimatePresence>
				{todoList.length > 0 &&
					todoList.map((todoItem) => (
						<TodoItem
							key={todoItem.key}
							setTodoList={setTodoList}
							todoList={todoList}
							todoItem={todoItem.paragraph}
							index={todoItem.key}
							isDark={isDark}
						/>
					))}
			</AnimatePresence>
		</div>
	);
};

export default TodoList;
